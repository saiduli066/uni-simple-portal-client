const express = require('express');
const router = express.Router();
const EmailBenefit = require('../models/EmailBenefit');

// GET all email benefits with pagination and filtering
router.get('/', async (req, res) => {
    try {
        const { page = 1, limit = 10, category, search, popular } = req.query;
        
        const query = {};
        if (category) query.category = category;
        if (popular) query.popular = popular === 'true';
        if (search) {
            query.$or = [
                { name: { $regex: search, $options: 'i' } },
                { provider: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } }
            ];
        }

        const benefits = await EmailBenefit.find(query)
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .sort({ createdAt: -1 });

        const count = await EmailBenefit.countDocuments(query);

        res.json({
            benefits,
            totalPages: Math.ceil(count / limit),
            currentPage: page,
            total: count
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET single benefit by ID
router.get('/:id', async (req, res) => {
    try {
        const benefit = await EmailBenefit.findById(req.params.id);
        if (!benefit) return res.status(404).json({ message: 'Benefit not found' });
        res.json(benefit);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET benefits by category
router.get('/category/:category', async (req, res) => {
    try {
        const benefits = await EmailBenefit.find({ category: req.params.category });
        res.json(benefits);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST create new benefit (admin only)
router.post('/', async (req, res) => {
    try {
        const benefit = new EmailBenefit(req.body);
        const newBenefit = await benefit.save();
        res.status(201).json(newBenefit);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// PUT update benefit (admin only)
router.put('/:id', async (req, res) => {
    try {
        const benefit = await EmailBenefit.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!benefit) return res.status(404).json({ message: 'Benefit not found' });
        res.json(benefit);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE benefit (admin only)
router.delete('/:id', async (req, res) => {
    try {
        const benefit = await EmailBenefit.findByIdAndDelete(req.params.id);
        if (!benefit) return res.status(404).json({ message: 'Benefit not found' });
        res.json({ message: 'Benefit deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
