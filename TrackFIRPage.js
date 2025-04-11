import React, { useState } from 'react';

function TrackFIRPage() {
  const [firId, setFirId] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState('');
  const [verified, setVerified] = useState(false);

  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
    },
    headerBox: {
      backgroundColor: '#fff',
      padding: '25px 35px',
      borderRadius: '12px',
      boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
      marginBottom: '30px',
      maxWidth: '600px',
      textAlign: 'center',
    },
    heading: {
      fontSize: '38px',
      fontWeight: 'bold',
      color: '#1a237e',
      marginBottom: '10px',
    },
    paragraph: {
      fontSize: '18px',
      color: '#333',
      marginBottom: '5px',
    },
    input: {
      width: '280px',
      padding: '10px',
      margin: '10px 0',
      fontSize: '16px',
      borderRadius: '6px',
      border: '1px solid #ccc',
    },
    button: {
      padding: '10px 24px',
      fontSize: '16px',
      backgroundColor: '#1e88e5',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      marginTop: '15px',
      transition: 'all 0.3s',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    status: {
      fontSize: '20px',
      color: 'green',
      marginTop: '30px',
      fontWeight: 'bold',
      textShadow: '1px 1px 2px #ccc',
    },
  };

  const handleTrack = (e) => {
    e.preventDefault();
    setShowOtp(true);
  };

  const handleVerify = () => {
    if (otp === '123456') {
      setVerified(true);
    } else {
      alert('❌ Invalid OTP. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.headerBox}>
        <h2 style={styles.heading}>📄 Track Your FIR</h2>
        <p style={styles.paragraph}>Enter your registered details to track FIR progress</p>
      </div>

      {!verified && (
        <form onSubmit={handleTrack} style={styles.form}>
          <input
            type="text"
            placeholder="FIR ID"
            value={firId}
            onChange={(e) => setFirId(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="email"
            placeholder="Registered Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={styles.input}
            required
          />
          {!showOtp && (
            <button type="submit" style={styles.button}>📩 Send OTP</button>
          )}
        </form>
      )}

      {showOtp && !verified && (
        <div style={styles.form}>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            style={styles.input}
            required
          />
          <button onClick={handleVerify} style={styles.button}>✅ Verify OTP</button>
        </div>
      )}

      {verified && (
        <div style={styles.status}>
          🔍 FIR Status: Your report is under investigation.
        </div>
      )}
    </div>
  );
}

export default TrackFIRPage;
