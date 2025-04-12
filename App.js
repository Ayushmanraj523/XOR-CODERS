import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VisitPage from './components/VisitPage';
import ContactPage from './components/ContactPage';
import TrackFIRPage from './components/TrackFIRPage';
import PersonalInfoPage from './components/PersonalInfoPage';
import ComplaintForm from './components/ComplaintForm'; // ✅ ADD THIS
import Layout from './components/Layout';
import PreviewPage from './components/PreviewPage';
import OTPAuthentication from './components/OTPAuthentication';
// Future pages ke imports yahan add kar sakte ho
// import AadhaarVerification from './components/AadhaarVerification';
// import Contact from './components/Contact';
// import TrackFIR from './components/TrackFIR';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<VisitPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/track" element={<TrackFIRPage />} />
          <Route path="/personal-info" element={<PersonalInfoPage />} />
          <Route path="/complaint" element={<ComplaintForm />} />
          <Route path="/preview" element={<PreviewPage />} />
          <Route path="/otp" element={<OTPAuthentication />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
