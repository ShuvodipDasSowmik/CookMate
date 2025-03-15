import React from 'react';
import { Container } from 'react-bootstrap';
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer({ darkMode = false }) {
  return (
    <footer className={`py-3 mt-5 ${darkMode ? "bg-custom-dark text-light" : "bg-custom-light text-dark"}`}>
      <Container className="d-flex flex-column align-items-center">
        <div className="mb-2">
          <a 
            href="https://www.instagram.com/d.sowmik/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`mx-2 ${darkMode ? "text-light" : "text-dark"}`}
          >
            <FaInstagram size={24} />
          </a>
          <a 
            href="https://www.facebook.com/d.sowmik/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`mx-2 ${darkMode ? "text-light" : "text-dark"}`}
          >
            <FaFacebook size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/shuvodip-sowmik/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`mx-2 ${darkMode ? "text-light" : "text-dark"}`}
          >
            <FaLinkedin size={24} />
          </a>
          <a 
            href="https://github.com/ShuvodipDasSowmik" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`mx-2 ${darkMode ? "text-light" : "text-dark"}`}
          >
            <FaGithub size={24} />
          </a>
        </div>
        <p className="text-center mb-0">
          © {new Date().getFullYear()} CookMate. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;