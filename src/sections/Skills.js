import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: "JavaScript", logo: "/logos/js.png" },
  { name: "Node.js", logo: "/logos/Node.png" },
  { name: "React", logo: "/logos/react.png" },
  { name: "Express", logo: "/logos/express.png" },
  { name: "HTML", logo: "/logos/html.png" },
  { name: "CSS", logo: "/logos/css.png" },
  { name: "MongoDB", logo: "/logos/mongodb.png" },
  { name: "SQL", logo: "/logos/sql.png" },
  { name: "Git", logo: "/logos/git.png" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const skillVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120 } },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center p-8"
      style={{
        background: "radial-gradient(circle at center, #1e3a8a, #1f2937, #111827)",
        color: "#F9FAFB",
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <motion.p
          className="text-lg mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Technical skills with a focus on backend development.
        </motion.p>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center space-x-2 bg-gray-800 p-4 rounded-lg shadow-md text-sm font-semibold transition-all duration-300 transform hover:scale-105"
              variants={skillVariants}
              whileHover={{
                scale: 1.15,
                rotate: 3,
                boxShadow: "0px 0px 15px 5px rgba(255,255,255,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                backgroundImage: "linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.2))",
              }}
            >
              <motion.img
                src={skill.logo}
                alt={skill.name}
                className="w-6 h-6"
                whileHover={{ rotate: -5, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
