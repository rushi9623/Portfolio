// src/components/Navbar.js
import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      className="fixed w-full top-0 left-0 bg-gray-800 text-white px-8 py-4"
      initial={{ y: -100 }} // Start off-screen
      animate={{ y: 0 }} // Slide into view
      transition={{ duration: 0.5 }}
    >
      <ul className="flex space-x-8 justify-center">
        <li><a href="#home" className="hover:text-gray-400">Home</a></li>
        <li><a href="#about" className="hover:text-gray-400">About</a></li>
        <li><a href="#experience" className="hover:text-gray-400">Experience</a></li>
        <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
