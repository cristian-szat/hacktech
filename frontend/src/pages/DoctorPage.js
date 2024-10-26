import React, { useState } from "react";
import styles from "./DoctorPage.css";
import Chatbot from "./../components/Chatbot"; // Import the Chatbot component

const DoctorPage = () => {
  // Sample patient data
  const patients = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Emily Johnson" },
    { id: 4, name: "Michael Brown" },
  ];

  const medications = [
    { id: 1, name: "Aspirin" },
    { id: 2, name: "Ibuprofen" },
    { id: 3, name: "Amoxicillin" },
    { id: 4, name: "Metformin" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [diagnostic, setDiagnostic] = useState("");
  const [selectedMedications, setSelectedMedications] = useState([]);

  // Filter patients based on search input
  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePatientSelect = (event) => {
    const patientId = parseInt(event.target.value);
    setSelectedPatient(patients.find((p) => p.id === patientId));
  };

  const handleMedicationChange = (event) => {
    const options = event.target.options;
    const selectedValues = Array.from(options)
      .filter(option => option.selected)
      .map(option => option.value);
    setSelectedMedications(selectedValues);
  };

  const handleSave = () => {
    alert(`Saved for ${selectedPatient?.name}: ${diagnostic} - Medications: ${selectedMedications.join(", ")}`);
  };

  return (
    <div className={styles.pageContainer}>
      {/* Patient History Sidebar */}
      <div className={styles.historySidebar}>
        <h3>Recent Patients</h3>
        <input
          type="text"
          placeholder="Search patient..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
        <select onChange={handlePatientSelect} defaultValue="">
          <option value="" disabled>Select a patient</option>
          {filteredPatients.map((patient) => (
            <option key={patient.id} value={patient.id}>{patient.name}</option>
          ))}
        </select>
      </div>

      {/* Chat Window */}
      <div className={styles.chatContainer}>
        <Chatbot />
      </div>

      {/* Medication and Diagnostic Area */}
      <div className={styles.diagnosticContainer}>
        <h2>Medication and Diagnostic</h2>
        {selectedPatient && (
          <>
            <textarea
              placeholder="Enter diagnostic details..."
              value={diagnostic}
              onChange={(e) => setDiagnostic(e.target.value)}
              className={styles.diagnosticInput}
            />
            <select
              multiple
              value={selectedMedications}
              onChange={handleMedicationChange}
              className={styles.medicationSelect}
            >
              {medications.map((med) => (
                <option key={med.id} value={med.name}>{med.name}</option>
              ))}
            </select>
            <button onClick={handleSave} className={styles.saveButton}>Save</button>
          </>
        )}
      </div>
    </div>
  );
};

export default DoctorPage;
