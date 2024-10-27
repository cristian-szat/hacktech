// Patient.js

class Patient {
    constructor(id, name, age, gender) {
      this.id = id;
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.history = []; // Array to hold patient history records
    }
  
    // Add a history entry
    addHistoryEntry(date, diagnosis, treatment) {
      const entry = {
        date,
        diagnosis,
        treatment,
      };
      this.history.push(entry);
    }
  
    // Retrieve patient information
    getPatientInfo() {
      return {
        id: this.id,
        name: this.name,
        age: this.age,
        gender: this.gender,
        history: this.history,
      };
    }
  
    // Retrieve patient history
    getHistory() {
      return this.history;
    }
  }
  
  module.exports = Patient;
  