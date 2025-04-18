import React from 'react';
import { motion } from 'framer-motion';

function EmergencyBanner() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="bg-gradient-to-r from-red-700 to-red-600 py-4 emergency-pulse"
    >
      <div className="container mx-auto px-4 text-center flex items-center justify-center space-x-4">
        <span className="inline-block w-3 h-3 bg-white rounded-full animate-ping"></span>
        <p className="text-lg md:text-xl font-semibold text-white">
          EMERGENCY: Immediate humanitarian assistance needed in Palestine
        </p>
      </div>
    </motion.div>
  );
}

export default EmergencyBanner;