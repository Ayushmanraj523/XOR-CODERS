import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ComplaintForm() {
  const [formData, setFormData] = useState({
    title: '', subject: '', district: '', policeStation: '', place: '', datetime: '', description: '',
    fullName: '', gender: '', age: '', address: '', pin: '',
    mobile: '', email: '', telephone: '', idType: '', idDetail: '', attachment: null,
    evidencePhoto: null, evidenceVideo: null, evidencePDF: null
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handlePreview = () => {
    if (!formData.evidencePhoto && !formData.evidenceVideo && !formData.evidencePDF) {
      alert('कृपया कम से कम एक साक्ष्य अपलोड करें।\nPlease upload at least one piece of evidence.');
      return;
    }

    const previewData = {
      ...formData,
      attachment: formData.attachment?.name || 'No file selected',
      evidencePhoto: formData.evidencePhoto?.name || 'No photo selected',
      evidenceVideo: formData.evidenceVideo?.name || 'No video selected',
      evidencePDF: formData.evidencePDF?.name || 'No PDF selected'
    };

    console.log("Previewing data:", previewData); // Optional for dev logs
    navigate('/preview', { state: formData });
  };

  const handleBack = () => window.history.back();

  return (
    <div style={styles.fullScreenPage}>
      <div style={styles.container}>
        <h2 style={styles.header}>Complaint Form / शिकायत फ़ॉर्म</h2>
        <p style={styles.instructions}>
          कृपया सुनिश्चित करें कि आप सभी जानकारी सही तरीके से भर रहे हैं। *चिन्हित फ़ील्ड अनिवार्य हैं।<br />
          Please ensure that all details entered are correct. Fields marked with * are mandatory.
        </p>
        <form style={styles.form} onSubmit={e => e.preventDefault()}>

          <fieldset style={styles.section}><legend>Type of Crime / अपराध का प्रकार</legend>
            <div style={styles.row}><label style={styles.label}>Title / शीर्षक *</label>
              <select name="title" value={formData.title} onChange={handleChange} required style={styles.input}>
                <option value="">Select / चयन करें</option>
                <option value="Theft">Theft / चोरी</option>
                <option value="Assault">Assault / हमला</option>
                <option value="Murder">Murder / हत्या</option>
                <option value="Cyber Crime">Cyber Crime / साइबर अपराध</option>
              </select>
            </div>

            <div style={styles.row}><label style={styles.label}>Subject / विषय *</label>
              <input style={styles.input} type="text" name="subject" value={formData.subject} onChange={handleChange} required />
            </div>

            <fieldset style={{ ...styles.section, marginTop: '20px' }}>
              <legend>घटना स्थल / Place of Occurrence</legend>
              <div style={styles.row}><label style={styles.label}>ज़िला / District *</label>
                <select name="district" value={formData.district} onChange={handleChange} required style={styles.input}>
                  <option value="">-Select-</option>
                  <option value="Ranchi">Ranchi</option>
                  <option value="Dhanbad">Dhanbad</option>
                  <option value="Jamshedpur">Jamshedpur</option>
                </select>
              </div>
              <div style={styles.row}><label style={styles.label}>थाना / Police Station</label>
                <input style={styles.input} type="text" name="policeStation" value={formData.policeStation} onChange={handleChange} />
              </div>
              <div style={styles.row}><label style={styles.label}>घटना स्थल / Place of Occurrence</label>
                <input style={styles.input} type="text" name="place" value={formData.place} onChange={handleChange} />
              </div>
            </fieldset>

            <div style={styles.row}><label style={styles.label}>Date & Time / दिनांक और समय *</label>
              <input style={styles.input} type="datetime-local" name="datetime" value={formData.datetime} onChange={handleChange} required />
            </div>

            <div style={styles.row}><label style={styles.label}>Description / विवरण *</label>
              <textarea style={styles.textarea} name="description" value={formData.description} onChange={handleChange} required />
            </div>
          </fieldset>

          <fieldset style={styles.section}><legend>Evidence Upload / साक्ष्य अपलोड करें</legend>
            <div style={styles.evidenceGrid}>
              <div style={styles.evidenceItem}><label style={styles.label}>Photo (PNG, max 50MB) / फ़ोटो</label>
                <input type="file" accept="image/png" name="evidencePhoto" onChange={handleChange} style={styles.input} />
              </div>

              <div style={styles.evidenceItem}><label style={styles.label}>Video (MP4, max 100MB) / वीडियो</label>
                <input type="file" accept="video/mp4" name="evidenceVideo" onChange={handleChange} style={styles.input} />
              </div>

              <div style={styles.evidenceItem}><label style={styles.label}>Document (PDF, max 20MB) / दस्तावेज़</label>
                <input type="file" accept="application/pdf" name="evidencePDF" onChange={handleChange} style={styles.input} />
              </div>
            </div>
          </fieldset>

          <div style={styles.buttonRow}>
            <button type="button" onClick={handleBack} style={styles.button}>Back / पीछे जाएं</button>
            <button type="button" onClick={handlePreview} style={styles.button}>Preview / पूर्वावलोकन</button>
          </div>

        </form>
      </div>
    </div>
  );
}

const styles = {
  fullScreenPage: {
    minHeight: '100vh',
    width: '100vw',
    background: 'linear-gradient(to right, #ffd89b, #19547b)',
    padding: '30px',
    overflowX: 'hidden'
  },
  container: {
    width: '100%',
    maxWidth: '1200px',
    margin: 'auto',
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 0 15px rgba(0,0,0,0.2)',
    fontFamily: 'sans-serif'
  },
  header: {
    textAlign: 'center',
    marginBottom: '10px'
  },
  instructions: {
    fontSize: '14px',
    textAlign: 'center',
    color: '#444',
    marginBottom: '25px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  section: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    backgroundColor: '#f2f9ff'
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginBottom: '15px'
  },
  label: {
    flex: '1',
    marginRight: '20px',
    fontWeight: 'bold',
    minWidth: '200px'
  },
  input: {
    flex: '2',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  },
  textarea: {
    flex: '2',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    height: '100px'
  },
  evidenceGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '15px'
  },
  evidenceItem: {
    display: 'flex',
    alignItems: 'center'
  },
  buttonRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#333',
    color: 'white',
    cursor: 'pointer'
  }
};

export default ComplaintForm;