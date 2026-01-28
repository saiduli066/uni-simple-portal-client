const express = require('express');
const router = express.Router();
const Fellowship = require('../models/Fellowship');
const Application = require('../models/Application');
const { auth, checkRole } = require('../middleware/auth');

router.get('/', auth, async (req, res) => {
  try {
    const fellowships = await Fellowship.find({ isActive: true }).sort({ deadline: 1 });
    res.json({ fellowships });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch fellowships', error: error.message });
  }
});

router.post('/', auth, checkRole('admin'), async (req, res) => {
  try {
    const fellowship = new Fellowship({ ...req.body, createdBy: req.userId });
    await fellowship.save();
    res.status(201).json({ fellowship });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create fellowship', error: error.message });
  }
});

router.post('/:id/apply', auth, checkRole('student'), async (req, res) => {
  try {
    const existing = await Application.findOne({ fellowship: req.params.id, student: req.userId });
    if (existing) {
      return res.status(400).json({ message: 'Already applied' });
    }
    const application = new Application({ fellowship: req.params.id, student: req.userId });
    await application.save();
    res.status(201).json({ application });
  } catch (error) {
    res.status(500).json({ message: 'Failed to apply', error: error.message });
  }
});

router.get('/my-applications', auth, checkRole('student'), async (req, res) => {
  try {
    const applications = await Application.find({ student: req.userId }).populate('fellowship').sort({ submittedAt: -1 });
    res.json({ applications });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch applications', error: error.message });
  }
});

router.patch('/applications/:id/withdraw', auth, checkRole('student'), async (req, res) => {
  try {
    const application = await Application.findOne({ _id: req.params.id, student: req.userId });
    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }
    if (application.status !== 'submitted') {
      return res.status(400).json({ message: 'Cannot withdraw this application' });
    }
    application.status = 'withdrawn';
    await application.save();
    res.json({ application });
  } catch (error) {
    res.status(500).json({ message: 'Failed to withdraw', error: error.message });
  }
});

router.get('/applications', auth, checkRole('admin'), async (req, res) => {
  try {
    const applications = await Application.find().populate('fellowship student').sort({ submittedAt: -1 });
    res.json({ applications });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch applications', error: error.message });
  }
});

router.patch('/applications/:id/review', auth, checkRole('admin'), async (req, res) => {
  try {
    const { status, rejectionReason, adminRemarks } = req.body;
    const application = await Application.findById(req.params.id);
    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }
    application.status = status;
    application.reviewedAt = new Date();
    application.reviewedBy = req.userId;
    if (rejectionReason) application.rejectionReason = rejectionReason;
    if (adminRemarks) application.adminRemarks = adminRemarks;
    await application.save();
    res.json({ application });
  } catch (error) {
    res.status(500).json({ message: 'Failed to review application', error: error.message });
  }
});

module.exports = router;
