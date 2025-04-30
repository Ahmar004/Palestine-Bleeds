import React from 'react';
import { motion } from 'framer-motion';

function Header() {
  return (
    <header className="relative bg-gradient-to-b from-black to-gray-900 py-20">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-4 text-center relative z-10"
      >
        <motion.h1 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-6xl md:text-7xl font-bold mb-6"
        >
          <span className="gradient-text">Palestine</span>{" "}
          <span className="text-white">Bleeds</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          Every moment counts. Your support can make the difference between life and death for Palestinian families in crisis.
        </motion.p>
      </motion.div>
      
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </header>
  );
}

export default Header;