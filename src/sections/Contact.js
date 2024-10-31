import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 text-white p-8">
      <div className="max-w-md mx-auto text-center space-y-4">
        {/* Animated Header */}
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Getting in Touch
        </motion.h1>

        {/* Additional Information with Animation */}
        <motion.h2
          className="text-2xl font-semibold"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Rushikesh Ughade
        </motion.h2>
        <motion.h2
          className="text-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Kothrud, Pune 411038
        </motion.h2>
        <motion.h2
          className="text-lg mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          rushiughade0@gmail.com
        </motion.h2>

        {/* Optional: Display Mobile Number */}
        <motion.p
          className="text-lg mt-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Phone: +917020203414
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;
