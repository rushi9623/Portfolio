import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-3xl mx-auto">
        {/* Section Header with Animation */}
        <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Experience & Internship
        </motion.h2>

        {/* Internship Details with Animation */}
        <motion.div
          className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.h3
            className="text-2xl font-semibold text-blue-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Company Name: Time Chain Labs
          </motion.h3>
          <p className="text-sm text-gray-400">15/05/2023 - 15/08/2023</p>

          <div className="space-y-4 mt-4">
            {/* Proficiency */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <h4 className="text-xl font-semibold">Proficiency</h4>
              <p className="text-gray-300">
                Developed the frontend, focusing on creating a user-friendly login interface and other essential components to enhance overall functionality.
              </p>
            </motion.div>

            {/* Skills Developed */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <h4 className="text-xl font-semibold">Skills Developed</h4>
              <p className="text-gray-300">
                JavaScript, React.js, HTML, CSS, Node.js, MongoDB
              </p>
            </motion.div>

            {/* Code Maintenance */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <h4 className="text-xl font-semibold">Code Maintenance</h4>
              <p className="text-gray-300">
                Debugged and resolved issues, optimized application performance, and ensured codebase cleanliness and maintainability.
              </p>
            </motion.div>

            {/* Collaboration */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <h4 className="text-xl font-semibold">Collaboration</h4>
              <p className="text-gray-300">
                Worked closely with cross-functional teams, including product managers, designers, and other developers, to deliver high-quality products.
              </p>
            </motion.div>

            {/* Documentation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
            >
              <h4 className="text-xl font-semibold">Documentation</h4>
              <p className="text-gray-300">
                Created and maintained project documentation, including code, test case documentation, and release notes.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
