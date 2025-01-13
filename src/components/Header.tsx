import Link from "next/link";
import ExampleOffcanvas from "./ExampleOffcanvas";
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="d-flex justify-content-between align-items-md-center pb-3 mb-5 border-bottom bg-white">
      <Link
          href="/"
          className="d-flex align-items-center text-dark text-decoration-none"
        >
          <Image
        src="/images/logo-fist-black.svg" // Path to your SVG in the public directory
        alt="Logo Fist Black"
        width={32} // Adjust width as needed
        height={32} // Adjust height as needed
      />
          <ExampleOffcanvas className="me-3 btn-dark" />
        </Link>
    </header>
  );
};

export default Header;
