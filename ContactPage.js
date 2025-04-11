import React from 'react';

function ContactPage() {
  const styles = {
    container: {
      minHeight: '100vh',
      /*background: 'linear-gradient(to right, #1e3c72, #2a5298)',*/
      padding: '60px 20px',
      textAlign: 'center',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    heading: {
      fontSize: '40px',
      fontWeight: 'bold',
      marginBottom: '20px',
      textShadow: '1px 1px 3px rgba(0,0,0,0.3)',
    },
    paragraph: {
      fontSize: '18px',
      marginBottom: '30px',
      maxWidth: '600px',
    },
    list: {
      listStyle: 'none',
      padding: 0,
      fontSize: '16px',
      lineHeight: '1.8',
      color: '#e0e0e0',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📬 Contact Us</h2>
      <p style={styles.paragraph}>
        Facing any issues or need assistance? Feel free to get in touch with our team below:
      </p>
      <ul style={styles.list}>
        <li>📧 Email: support@digitalfir.gov.in</li>
        <li>📞 Phone: +91-1800-123-4567</li>
        <li>📍 Address: Virtual FIR HQ, New Delhi</li>
      </ul>
    </div>
  );
}

export default ContactPage;
