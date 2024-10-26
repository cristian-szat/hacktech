import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CardContainer from "./components/CardContainer";
import PatientPage from "./pages/PatientPage";
import DoctorPage from "./pages/DoctorPage";
import "./App.css";
import TalkingPage from "./pages/TalkingPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<CardContainer />} />
            <Route path="/patient" element={<PatientPage />} />
            <Route path="/doctor" element={<DoctorPage />} />
            <Route path="/talking" element={<TalkingPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;