import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

function Layout() {
  const layoutStyle = {
    minHeight: '100vh',
    backgroundImage: "url('/images/bg.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundColor: 'rgba(0,0,0,0.6)',
    backgroundBlendMode: 'overlay',
    color: 'white',
  };

  return (
    <div style={layoutStyle}>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
