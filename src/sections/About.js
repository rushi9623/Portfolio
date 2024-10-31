import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  // Memoize the fullText array to avoid unnecessary re-renders
  const fullText = useMemo(() => [
    "I’m a backend developer with a passion for scalable solutions and RESTful API design.",
    "With deep experience in Node.js, Express, and various databases, I specialize in creating reliable backend architectures for complex applications.",
    "While my primary focus is backend, I enjoy working on frontend projects that enhance my understanding of full-stack development."
  ], []);

  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (textIndex < fullText.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[textIndex][charIndex]);

        if (charIndex === fullText[textIndex].length - 1) {
          setTextIndex((prev) => prev + 1);
          setCharIndex(-1);
        } else {
          setCharIndex((prev) => prev + 1);
        }
      }, 50);

      return () => clearTimeout(timeoutId);
    }
  }, [textIndex, charIndex, fullText]);

  return (
    <section id="about" className="min-h-screen bg-fuchsia-100 text-gray-800 flex items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl text-center"
      >
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg">{displayedText}</p>
      </motion.div>
    </section>
  );
};

export default About;
