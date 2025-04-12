import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function PreviewPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return <div style={styles.error}>No data to preview. Please go back and fill the form.</div>;
  }

  const handleBack = () => navigate(-1);

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.header}>Preview Complaint Details / पूर्वावलोकन विवरण</h2>

        <section style={styles.section}>
          <h3>Personal Information</h3>
          <p><strong>Full Name:</strong> {state.fullName}</p>
          <p><strong>Gender:</strong> {state.gender}</p>
          <p><strong>Age:</strong> {state.age}</p>
          <p><strong>Address:</strong> {state.address}</p>
          <p><strong>Pin:</strong> {state.pin}</p>
          <p><strong>Mobile:</strong> {state.mobile}</p>
          <p><strong>Email:</strong> {state.email}</p>
        </section>

        <section style={styles.section}>
          <h3>Crime Details</h3>
          <p><strong>Title:</strong> {state.title}</p>
          <p><strong>Subject:</strong> {state.subject}</p>
        </section>

        <section style={styles.section}>
          <h3>Place of Occurrence</h3>
          <p><strong>District:</strong> {state.district}</p>
          <p><strong>Police Station:</strong> {state.policeStation}</p>
          <p><strong>Place:</strong> {state.place}</p>
          <p><strong>Date & Time:</strong> {state.datetime}</p>
          <p><strong>Description:</strong> {state.description}</p>
        </section>

        <section style={styles.section}>
          <h3>Uploaded Evidence</h3>
          <p><strong>Photo:</strong> {state.evidencePhoto}</p>
          <p><strong>Video:</strong> {state.evidenceVideo}</p>
          <p><strong>PDF:</strong> {state.evidencePDF}</p>
        </section>

        <div style={styles.buttons}>
          <button style={styles.button} onClick={handleBack}>Back / पीछे जाएं</button>
          <button style={styles.submit}>Submit FIR / FIR दर्ज करें</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
    page: {
      padding: '40px',
      fontFamily: 'sans-serif',
      backgroundColor: '#f0f8ff',
      minHeight: '100vh'
    },
    container: {
      maxWidth: '900px',
      margin: 'auto',
      backgroundColor: '#fff',
      padding: '30px',
      borderRadius: '12px',
      boxShadow: '0 0 15px rgba(0,0,0,0.1)',
      color: '#000' // 🔥 Black text in whole container
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
      color: '#000' // ✅ Heading text black
    },
    section: {
      marginBottom: '20px',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      border: '1px solid #ddd',
      color: '#000' // ✅ Section text black
    },
    buttons: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '30px'
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#444',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer'
    },
    submit: {
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer'
    },
    error: {
      padding: '100px',
      textAlign: 'center',
      fontSize: '20px'
    }
  };

export default PreviewPage;