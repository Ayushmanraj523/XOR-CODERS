import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 40px',
    backgroundColor: '#0072ff',
    color: 'white',
  };

  const buttonStyle = {
    background: 'white',
    color: '#0072ff',
    border: 'none',
    padding: '8px 16px',
    marginLeft: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  const logoContainer = {
    display: 'flex',
    alignItems: 'center',
  };

  const logoImage = {
    height: '40px',
    marginRight: '10px',
  };

  return (
    <div style={navbarStyle}>
      <div style={logoContainer}>
        <img src="/images/logo.png" alt="Logo" style={logoImage} />
        <h2 style={{ margin: 0 }}>Virtual Police Station</h2>
      </div>
      <div>
        <button style={buttonStyle} onClick={() => navigate('/')}>Home</button>
        <button style={buttonStyle} onClick={() => navigate('/contact')}>Contact</button>
        <button style={buttonStyle} onClick={() => navigate('/track')}>Track FIR</button>
      </div>
    </div>
  );
}

export default Navbar;
