const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    skills: { type: [String], default: [] },
    experience: { type: String, default: '' },
    education: { type: String, default: '' },
    template: { type: String, default: 'default' }
});

module.exports = mongoose.model('Resume', ResumeSchema);

