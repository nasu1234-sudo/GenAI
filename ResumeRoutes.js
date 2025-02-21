const express = require('express');
const Resume = require('../models/Resume');

const router = express.Router();

// Create a new resume
router.post('/', async (req, res) => {
    try {
        if (!req.body.name || !req.body.email || !req.body.phone) {
            return res.status(400).send({ error: 'Missing required fields' });
        }
        const resume = new Resume(req.body);
        await resume.save();
        res.status(201).send(resume);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Get all resumes
router.get('/', async (req, res) => {
    try {
        const resumes = await Resume.find();
        res.send(resumes);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

module.exports = router;
