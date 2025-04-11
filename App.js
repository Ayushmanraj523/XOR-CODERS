import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ComplaintForm from './components/ComplaintForm';
import ComplaintPreview from './components/ComplaintPreview';
import OTPAuthentication from './components/OTPAuthentication';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComplaintForm />} />
        <Route path="/preview" element={<ComplaintPreview />} />
        <Route path="/otp" element={<OTPAuthentication />} />
      </Routes>
    </Router>
  );
}

export default App;
