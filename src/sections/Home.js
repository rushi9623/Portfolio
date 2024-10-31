// src/components/Home.js
import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const dev = {
    name: "Rushikesh Ughade",
    role: "Backend Developer",
    skills: ["Node.js", "Express", "MongoDB", "React"],
    about: "Passionate backend developer with experience in building and scaling APIs.",
  };

  // Function to open the CV
  const viewCV = () => {
    window.open("/Resume/RESUME_MERN.pdf", "_blank");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center h-full max-w-6xl relative space-y-6 md:space-y-0 md:space-x-6">
        
        {/* Profile Image */}
        <motion.div
          className="flex justify-center md:justify-end w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/imgs/Profile.jpg"
            alt="Profile"
            className="w-64 h-auto md:w-80 md:h-80 mt-8 object-cover rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Developer Code Output Section */}
        <motion.div
          className="w-full md:w-1/2 text-green-400 text-xs md:text-sm font-mono"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p>const dev = {'{'}</p>
          <p>{`  name: "${dev.name}",`}</p>
          <p>{`  role: "${dev.role}",`}</p>
          <p>{`  skills: [${dev.skills.map(skill => `"${skill}"`).join(', ')}],`}</p>
          <p>{`  about: "${dev.about}",`}</p>
          <p>{`};`}</p>

          {/* viewCV Function as a clickable link */}
          <p>{`function `}<span className="text-blue-500 cursor-pointer" onClick={viewCV}>{`viewCV()`}</span>{` {`}</p>
          <p>{`  console.log("View CV");`}</p>
          <p>{`  for (const [key, value] of Object.entries(dev)) {`}</p>
          <p>{`    console.log(\`\${key.charAt(0).toUpperCase() + key.slice(1)}: \${Array.isArray(value) ? value.join(", ") : value}\`);`}</p>
          <p>{`  }`}</p>
          <p>{`}`}</p>

          {/* Button for viewCV() */}
          <button 
            onClick={viewCV}
            className="mt-4 bg-blue-600 text-white py-1 px-4 rounded-full shadow-lg text-xs"
          >
            viewCV();
          </button>

          {/* Social Media Logos */}
          <div className="mt-6 flex space-x-4">
            <a 
              href="https://www.linkedin.com/in/rushikesh-ughade-3ab439223/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src="/logos/linkdin.png" 
                alt="" 
                className="w-8 h-8 hover:opacity-80 transition-opacity duration-300" 
              />
            </a>
            <a 
              href="https://github.com/rushi9623" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src="/logos/git.png" 
                alt="" 
                className="w-8 h-8 hover:opacity-80 transition-opacity duration-300" 
              />
            </a>
            {/* <a 
              href="https://www.instagram.com/your-profile" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src="/logos/inst.jpg" 
                alt="" 
                className="w-8 h-8 hover:opacity-80 transition-opacity duration-300" 
              />
            </a> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
