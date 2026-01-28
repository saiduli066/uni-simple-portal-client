const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  fellowship: { type: mongoose.Schema.Types.ObjectId, ref: 'Fellowship', required: true },
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['submitted', 'under-review', 'approved', 'rejected', 'withdrawn'], default: 'submitted' },
  submittedAt: { type: Date, default: Date.now },
  reviewedAt: Date,
  reviewedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  rejectionReason: String,
  adminRemarks: String
});

module.exports = mongoose.model('Application', applicationSchema);
