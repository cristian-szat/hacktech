// services/PatientService.js

const Patient = require("../entities/patient");

class PatientService {
  constructor() {
    // Initialize mock data with a few patients using the Patient model
    this.patients = [
      new Patient(1, "John Doe", 35, "Male"),
      new Patient(2, "Jane Smith", 29, "Female"),
      new Patient(3, "Alex Johnson", 40, "Male"),
    ];

    // Add mock history entries for each patient
    this.patients[0].addHistoryEntry("2023-10-01", "Flu", "Prescribed rest and hydration");
    this.patients[0].addHistoryEntry("2023-11-15", "Sprained Ankle", "Recommended physical therapy");

    this.patients[1].addHistoryEntry("2023-09-10", "Allergic Reaction", "Prescribed antihistamines");
    this.patients[1].addHistoryEntry("2023-10-05", "Migraine", "Prescribed medication");

    this.patients[2].addHistoryEntry("2023-08-20", "High Blood Pressure", "Started on medication");
  }

  // Get all patients (basic info)
  getPatients() {
    return this.patients.map((patient) => ({
      id: patient.id,
      name: patient.name,
      age: patient.age,
      gender: patient.gender,
    }));
  }

  // Get detailed info for a specific patient by ID
  getPatientDetails(id) {
    const patient = this.patients.find((patient) => patient.id === id);
    if (!patient) {
      throw new Error(`Patient with ID ${id} not found.`);
    }
    return patient.getPatientInfo();
  }
}

module.exports = PatientService;
