import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

function Statistics() {
  const stats = [
    { label: "Children in Need", value: 1100000, suffix: "+" },
    { label: "Displaced People", value: 1900000, suffix: "+" },
    { label: "Medical Aid Required", value: 2200000, suffix: "+" }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.6 }}
          className="stat-card p-8 rounded-2xl text-center transform hover:scale-105 transition-transform duration-300"
        >
          <motion.h3 
            className="text-5xl font-bold gradient-text mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2 + 0.3 }}
          >
            <CountUp
              end={stat.value}
              duration={2.5}
              separator=","
              suffix={stat.suffix}
            />
          </motion.h3>
          <p className="text-gray-300 text-lg">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default Statistics;