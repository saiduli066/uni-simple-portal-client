const mongoose = require('mongoose');

const emailBenefitSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    provider: { type: String, required: true },
    description: { type: String, required: true },
    category: { 
        type: String, 
        enum: ['Development', 'Cloud', 'Design', 'Learning', 'Security', 'Productivity'],
        required: true 
    },
    link: { type: String, required: true },
    value: String,
    popular: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('EmailBenefit', emailBenefitSchema);
