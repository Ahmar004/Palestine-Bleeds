import React from 'react';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black py-16 mt-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-3xl mx-auto bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-700"
        >
          <h3 className="text-3xl font-bold mb-6 gradient-text">DUA</h3>
          <p className="text-gray-300 text-xl leading-relaxed">
            May Allah give us Tawfiq to help our brothers and sisters in Palestine, Allahumma Aameen!
          </p>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-500"
        >
          Last updated: April 8, 2025
        </motion.p>
      </div>
    </footer>
  );
}

export default Footer;