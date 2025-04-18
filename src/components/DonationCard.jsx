import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

function DonationCard({ organization, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl card-hover border border-gray-700"
    >
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-4 gradient-text">{organization.name}</h3>
        <p className="text-gray-300 mb-8 text-lg leading-relaxed">{organization.description}</p>
        
        <div className="mb-8">
          <h4 className="text-lg font-semibold mb-4 flex items-center">
            <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
            Verified Sources
          </h4>
          <ul className="space-y-3">
            {organization.verificationSources.map((source, index) => (
              <li key={index}>
                <a 
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
                >
                  <span className="mr-2">→</span>
                  {source.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Donation Options</h4>
          <div className="space-y-4">
            {organization.donationOptions.map((option, index) => (
              <motion.a
                key={index}
                href={option.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-4 px-6 rounded-xl text-center transition-all duration-300 transform hover:scale-105"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {option.name}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default DonationCard;