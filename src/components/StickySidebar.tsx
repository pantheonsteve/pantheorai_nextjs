import React from 'react';
import NavItem from './NavItem';
import Link from 'next/link';
import { Button } from 'react-bootstrap';

const StickySidebar = () => {
  return (
    <div
      className="d-flex flex-column bg-dark text-white p-3 position-fixed"
      style={{
        width: '280px',
        height: '100vh',
        top: 0,
        left: 0,
      }}
    >
      {/* Sidebar Header */}
      <Link href="/" className="d-flex align-items-center mb-3 text-white text-decoration-none">
        <span className="fs-4">Pantheor Copilot</span>
      </Link>
      <hr />

      {/* Navigation Links */}
      <ul className="nav flex-column">
        <NavItem href="/chat" buttonText="Chat with Gong Call Index" />
        <NavItem href="/gong" buttonText="Summarize Gong Calls" />
      </ul>
      <hr />

      {/* Footer Links */}
    </div>
  );
};

export default StickySidebar;