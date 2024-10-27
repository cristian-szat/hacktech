import React from "react";
import styles from "./Diagnostics.module.css";

const DiagnosticArea = ({ selectedPatient, diagnostic, setDiagnostic, medications, selectedMedications, handleMedicationChange, handleSave }) => {
  return (
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
          <button onClick={handleSave} className={styles.saveButton}>
            Save
          </button>
        </>
      )}
    </div>
  );
};

export default DiagnosticArea;
