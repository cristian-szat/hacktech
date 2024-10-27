const express = require('express');
const router = express.Router();
const { fetchPatientResponse } = require('../controllers/patientController');

router.get('/', fetchPatientResponse);

module.exports = router;