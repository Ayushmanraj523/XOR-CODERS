import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function OTPAuthentication() {
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const handleSendOtp = () => {
    if (email && phone) {
      alert(`OTP sent to Email: ${email} and Phone: ${phone}`);
      setIsOtpSent(true);
    }
  };

  const handleVerifyOtp = () => {
    if (otp === '123456') {
      alert('✅ OTP Verified. Complaint Submitted!');
      setIsVerified(true);
    } else {
      alert('❌ Invalid OTP');
    }
  };

  return (
    <div style={styles.fullPageWrapper}>
      <div style={styles.card}>
        <h2 style={styles.heading}>OTP Verification / ओटीपी सत्यापन</h2>
        <p style={styles.redirect}>
          Redirected from: <b>{location.state?.from || 'user'}</b>
        </p>

        <div style={styles.inputGroup}>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label>Phone Number:</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={styles.input}
          />
        </div>

        <button
          onClick={handleSendOtp}
          style={{
            ...styles.button,
            backgroundColor: email && phone ? '#007BFF' : '#ccc',
            cursor: email && phone ? 'pointer' : 'not-allowed'
          }}
          disabled={!email || !phone}
        >
          📨 Send OTP
        </button>

        {isOtpSent && (
          <>
            <div style={styles.inputGroup}>
              <label>Enter OTP:</label>
              <input
                type="text"
                placeholder="Enter the OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                style={styles.input}
              />
            </div>
            <button onClick={handleVerifyOtp} style={{ ...styles.button, backgroundColor: '#28a745' }}>
              ✅ Verify OTP
            </button>
          </>
        )}

        {isVerified && (
          <div style={styles.successMessage}>
            🎉 Complaint Verified & Submitted Successfully!
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  fullPageWrapper: {
    height: '100vh',
    width: '100vw',
    background: 'linear-gradient(to right, #ff9966, #ff5e62)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Segoe UI, sans-serif',
    padding: '20px',
    boxSizing: 'border-box',
  },
  card: {
    background: '#fff',
    padding: '40px 30px',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
    maxWidth: '480px',
    width: '100%',
    boxSizing: 'border-box'
  },
  heading: {
    textAlign: 'center',
    marginBottom: '24px',
    fontSize: '26px',
    color: '#333'
  },
  redirect: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '24px',
    textAlign: 'center'
  },
  inputGroup: {
    marginBottom: '20px'
  },
  input: {
    width: '100%',
    padding: '12px',
    marginTop: '6px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '16px'
  },
  button: {
    width: '100%',
    padding: '14px',
    fontSize: '16px',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontWeight: '600',
    transition: '0.3s',
    marginBottom: '10px'
  },
  successMessage: {
    marginTop: '25px',
    textAlign: 'center',
    color: '#28a745',
    fontWeight: 'bold',
    fontSize: '16px'
  }
};

export default OTPAuthentication;
