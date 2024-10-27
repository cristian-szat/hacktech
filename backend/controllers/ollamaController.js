const { default: ollama } = require('ollama');
const PatientService = require("../services/patientService");

const fetchOllamaResponse = async (req, res) => {
    const { query, context, patient } = req.body;

    const patientService = new PatientService();
    let patientData = "";
    patientData = JSON.stringify(patientService.getPatientDetails(patient || 1));

    let initPrompt = '';

    if (!context.length) {
        if (patient) {
            initPrompt = 'I am the doctor Smith and I will need some help with a patient with the following data: ' + patientData + '.';
        } else {
            initPrompt = 'I am the patient with the following data: ' + patientData + '.'
        }
    }

    try {
        const response = await ollama.generate({
            model: process.env.OLLAMA_MODEL_NAME,
            prompt: initPrompt + query,
            context
        });

        res.json({ reply: response });
    } catch (error) {
        console.error('Error calling Ollama API:', error);
        res.status(500).send({ error: 'Error interacting with the model' });
    }
};

module.exports = { fetchOllamaResponse };