const PatientService = require("../services/patientService");

const fetchPatientResponse = async (req, res) => {
    const { query, context } = req.body;

    try {
        const patientService = new PatientService();

        const allPatients = patientService.getPatients();
        console.log("All Patients:", allPatients);

        res.json({ allPatients });
    } catch (error) {
        console.error('Error calling Patients API:', error);
        res.status(500).send({ error: 'Error getting patient data' });
    }
};

module.exports = { fetchPatientResponse };