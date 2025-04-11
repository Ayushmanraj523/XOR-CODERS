import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function ComplaintPreview() {
  const { state: data } = useLocation();
  const navigate = useNavigate();

  if (!data) {
    return <div>No data to preview.</div>;
  }

  const handleEdit = () => navigate('/');
  const handleVerify = () => {
    navigate('/otp', { state: data }); // Send all data to OTP page
  };

  return (
    <div style={styles.page}>
      <div style={styles.a4sheet}>
        <h2 style={styles.title}>Complaint Preview / शिकायत पूर्वावलोकन</h2>

        <section>
          <h3 style={styles.sectionTitle}>Type of Crime / अपराध का प्रकार</h3>
          <p><strong>Title:</strong> {data.title}</p>
          <p><strong>Subject:</strong> {data.subject}</p>
        </section>

        <section>
          <h3 style={styles.sectionTitle}>Place of Occurrence / घटना स्थल</h3>
          <p><strong>District:</strong> {data.district}</p>
          <p><strong>Police Station:</strong> {data.policeStation}</p>
          <p><strong>Place:</strong> {data.place}</p>
          <p><strong>Date & Time:</strong> {data.datetime}</p>
        </section>

        <section>
          <h3 style={styles.sectionTitle}>Description / विवरण</h3>
          <p>{data.description}</p>
        </section>

        <section>
          <h3 style={styles.sectionTitle}>Evidence Uploaded / साक्ष्य</h3>
          <p><strong>Photo:</strong> {data.evidencePhoto?.name || 'Not uploaded'}</p>
          <p><strong>Video:</strong> {data.evidenceVideo?.name || 'Not uploaded'}</p>
          <p><strong>PDF:</strong> {data.evidencePDF?.name || 'Not uploaded'}</p>
        </section>

        <div style={styles.buttonContainer}>
          <button onClick={handleEdit} style={styles.button}>✏️ Edit</button>
          <button onClick={handleVerify} style={styles.button}>✅ Verify</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    background: '#f4f4f4',
    padding: '40px',
    display: 'flex',
    justifyContent: 'center'
  },
  a4sheet: {
    width: '794px',
    minHeight: '1123px',
    background: '#fff',
    padding: '40px',
    border: '2px solid #ccc',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    fontFamily: 'serif',
    fontSize: '18px', // Increased base font size
    lineHeight: '1.6'
  },
  title: {
    textAlign: 'center',
    fontSize: '28px',
    marginBottom: '30px',
    borderBottom: '2px solid black',
    paddingBottom: '10px'
  },
  sectionTitle: {
    fontSize: '22px',
    marginTop: '25px',
    marginBottom: '10px',
    textDecoration: 'underline'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '40px',
    
  },
  button: {
    padding: '12px 24px',
    fontSize: '18px',
    cursor: 'pointer',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '6px'
  }
};

export default ComplaintPreview;
