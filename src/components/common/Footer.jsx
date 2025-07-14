import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <p className="text-center md:text-left mb-4 md:mb-0">
          © 2025 Lakshmi Narayanan. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a
            href="https://github.com/aglnarayanan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="text-gray-400 hover:text-green-400 transition duration-300"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
