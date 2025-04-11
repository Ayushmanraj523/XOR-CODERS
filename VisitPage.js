import React from 'react';
import './VisitPage.css';
import { useNavigate } from 'react-router-dom';

function VisitPage() {
  const navigate = useNavigate();

  return (
    <div className="visit-page">
      <main className="visit-main">
        <h1>Welcome to Virtual Police Station</h1>
        <p>A secure and digital way to file FIRs online from anywhere in India.</p>
        <button onClick={() => navigate('/personal-info')}>
          🚔 File a Complaint
        </button>
      </main>

      {/* 🔹 Features Section Added */}
      <section className="features-section">
        <h2>Features</h2>
        <div className="features-container">
          <div className="feature-box">
            <img src="/images/dashboard-icon.png" alt="Dashboard" />
            <h3>Dashboard Reports</h3>
            <p>Statistical report with Crime and Action.</p>
          </div>
          <div className="feature-box">
            <img src="/images/download-icon.png" alt="Download FIR" />
            <h3>Download FIR</h3>
            <p>Easy to download FIR.</p>
          </div>
          <div className="feature-box">
            <img src="/images/messaging-icon.png" alt="Messaging" />
            <h3>Instant Messaging System</h3>
            <p>SMS/E-Mail to Complainants on any type of Enquiry.</p>
          </div>
        </div>
      </section>

      <footer className="visit-footer">
        <p>Disclaimer: This is a demo version of the Virtual Police Station. All data submitted is for testing purposes only and not legally binding.</p>
      </footer>
    </div>
  );
}

export default VisitPage;
