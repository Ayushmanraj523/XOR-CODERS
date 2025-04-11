import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function PersonalInfoPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    age: '',
    address: '',
    pinCode: '',
    mobile: '',
    email: '',
    aadhaar: '',
    otp: '',
  });

  const navigate = useNavigate();

  const [otpSent, setOtpSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSendOtp = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/otp/send', {
        name: formData.fullName,
        aadhaar: formData.aadhaar,
        email: formData.email,
      });
      console.log(response.data);
      alert("📨 " + response.data);
      setOtpSent(true);
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("❌ Failed to send OTP");
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/otp/verify', {
        name: formData.fullName,
        aadhaar: formData.aadhaar,
        email: formData.email,
        otp: formData.otp,
      });
  
      if (response.data.includes("OTP Verified")) {
        setIsVerified(true);
        alert("✅ " + response.data);
        navigate("/complaint"); // ✅ Navigate to ComplaintForm
      } else {
        alert("❌ " + response.data);
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("❌ OTP Verification Failed");
    }
  };
  
  const inputStyle = {
    width: '100%',
    padding: '12px',
    margin: '8px 0 16px 0',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
    color: '#000', // ✅ black text
    backgroundColor: '#fff', // ✅ white input background
  };

  const buttonStyle = {
    background: 'linear-gradient(to right, #0072ff, #00c6ff)',
    color: 'white',
    padding: '10px 18px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: '0.3s',
  };

  return (
    <div
      style={{
        maxWidth: '700px',
        margin: '60px auto',
        padding: '30px',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '16px',
        boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2 style={{ textAlign: 'center', color: '#1a237e', marginBottom: '30px' }}>
        🧾 Personal Information
      </h2>

      <form>
        <label style={{ color: '#000' }}>Full Name:</label>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required style={inputStyle} />

        <label style={{ color: '#000' }}>Gender:</label>
        <select name="gender" value={formData.gender} onChange={handleChange} required style={inputStyle}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label style={{ color: '#000' }}>Age:</label>
        <input type="number" name="age" value={formData.age} onChange={handleChange} required style={inputStyle} />

        <label style={{ color: '#000' }}>Address:</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} required style={inputStyle} />

        <label style={{ color: '#000' }}>Pin Code:</label>
        <input type="text" name="pinCode" value={formData.pinCode} onChange={handleChange} required style={inputStyle} />

        <label style={{ color: '#000' }}>Mobile Number:</label>
        <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required style={inputStyle} />

        <label style={{ color: '#000' }}>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required style={inputStyle} />

        <label style={{ color: '#000' }}>Aadhaar Number:</label>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input type="text" name="aadhaar" value={formData.aadhaar} onChange={handleChange} required style={{ ...inputStyle, flex: 1 }} />
          <button type="button" onClick={handleSendOtp} style={buttonStyle}>📨 Send OTP</button>
        </div>

        {otpSent && (
          <>
            <label style={{ color: '#000' }}>Enter OTP:</label>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input type="text" name="otp" value={formData.otp} onChange={handleChange} required style={{ ...inputStyle, flex: 1 }} />
              <button type="button" onClick={handleVerifyOtp} style={buttonStyle}>✅ Verify</button>
            </div>
          </>
        )}

        {isVerified && (
          <p style={{ color: 'green', marginTop: '12px', fontWeight: 'bold' }}>
            ✅ OTP Verified Successfully!
          </p>
        )}
      </form>
    </div>
  );
}

export default PersonalInfoPage;