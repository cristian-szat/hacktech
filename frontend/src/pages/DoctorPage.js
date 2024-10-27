import React, { useState, useEffect } from "react";
import styles from "./DoctorPage.css";
import Chatbot from "./../components/Chatbot"; // Import the Chatbot component
import DiagnosticArea from "./../components/Diagnostics"; // Import the DiagnosticArea component

const DoctorPage = () => {
  const [patients, setPatients] = useState([]);
  const [error, setError] = useState(null);
  
  /* Sample patient data
  const patients = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Emily Johnson" },
    { id: 4, name: "Michael Brown" },
  ];*/

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

    // Function to fetch the patients
    const getPatients = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/patient");
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json(); // Assuming response is JSON
        setPatients(data.allPatients); // Set the retrieved data in state
      } catch (err) {
        setError(err.message);
        console.error("Failed to fetch patients:", err);
      }
    };

  // Filter patients based on search input
  const filteredPatients = (patients) => {
    console.log(patients, "patients")
    if(patients){
      patients.filter(patient =>
        patient.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return patients;
}

  const handlePatientSelect = (event) => {
    const patientId = parseInt(event.target.value);
    setSelectedPatient(patientId);
  };

  const handleMedicationChange = (event) => {
    const options = event.target.options;
    const selectedValues = Array.from(options)
      .filter(option => option.selected)
      .map(option => option.value);
    setSelectedMedications(selectedValues);
  };

  const handleSave = () => {
    // alert(`Saved for ${selectedPatient?.name}: ${diagnostic} - Medications: ${selectedMedications.join(", ")}`);
    alert(`The data was saved!`);
  };

    // Fetch patients when component mounts
    useEffect(() => {
      getPatients();
    }, []);


  return (
    <div className={styles.pageContainer}>
      {/* Patient History Sidebar */}
      <div className={styles.historySidebar}>
        <input
          type="text"
          placeholder="Search patient..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
        <select onChange={handlePatientSelect} defaultValue="">
          <option value="" disabled>Select a patient</option>
          {filteredPatients(patients).map((patient) => (
            <option key={patient.id} value={patient.id}>{patient.name}</option>
          ))}
        </select>
      </div>

      {/* Chat Window */}
      <div className={styles.chatContainer}>
        <Chatbot patient={selectedPatient} />
      </div>

      {/* Medication and Diagnostic Area */}
      <DiagnosticArea selectedPatient={selectedPatient}  diagnostic= {diagnostic} setDiagnostic= {setDiagnostic} medications={medications} selectedMedications={selectedMedications} handleMedicationChange={handleMedicationChange} handleSave={handleSave}/>
    </div>
  );
};

export default DoctorPage;
