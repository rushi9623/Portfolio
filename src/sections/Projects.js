import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Project card component
const ProjectCard = ({ title, description, techStack, githubLink, liveLink, image, onClick, flipped }) => {
  return (
    <motion.div
      className={`relative w-full h-full cursor-pointer perspective-1000 transition-all duration-300 ${flipped ? 'scale-105' : ''}`}
      onClick={onClick}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        className="relative w-96 h-96 transform-style preserve-3d transition-transform duration-700"
      >
        {/* Front side of the card */}
        <div className="absolute inset-0 rounded-lg overflow-hidden shadow-lg bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
          <div className="p-8 bg-gradient-to-b from-transparent to-black h-full w-full flex flex-col justify-end">
            <h3 className="text-2xl font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm text-gray-300">Tech Stack: {techStack}</p>
          </div>
        </div>

        {/* Back side of the card */}
        <div
          className={`absolute inset-0 p-6 bg-gray-800 text-white rounded-lg backface-hidden ${flipped ? 'opacity-100' : 'opacity-0'}`}
          style={{ transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
        >
          <h3 className="text-xl font-semibold mb-2">Project Details</h3>
          <p className="text-sm mb-4 overflow-hidden" style={{ maxHeight: '16rem', overflowY: 'auto' }}>
            {description} built with {techStack}.
          </p>
          <div className="flex space-x-4">
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
              <FaGithub size={24} />
            </a>
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-500">
              <FaExternalLinkAlt size={24} />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Main Projects section component
const Projects = () => {
  const projectData = [
    {
      title: "Blog App",
      description: "Sign In and Sign Up authentication , Built using MVC Architecture , User can search a movie name and get details of that movie ,Details of movies are fetched from API ,User can add a movie to a playlist,Playlist is completely private and user can see it after login only ,Without sign in user can search movie and ,get details but cannot add to playlist",
      techStack: "Node.js, React.js , Express,Html,Css,MongoDB",
      githubLink: "https://github.com/rushi9623/BlogApp",
      liveLink: "https://blog-app-using-mern-stack-beta.vercel.app/",
      image: "/imgs/BLOG.jpg"
    },
    {
      title: "Task Management API",
      description: "Description: Developed a Task Management ,API with role-based access control to manage admin and user functionalities. Admin Role:Create, edit, and delete tasks with details like title, description, and due dates.Manage task statuses and assign tasks to users.User Role:View and update assigned tasks, track progress, and collaborate through task comments.Features:Role-based access control: Admin and User specific routes and permissions. JWT Authentication: Secure user login andprotected routes.Task Management: Admins control task creation, users manage assigned tasks.Tech Stack: Node.js, Express.js, MongoDB",
      techStack: "Node.js, React.js , Express,Html,Css,MongoDB",
      image: "/imgs/TASK.jpg"
    },
    {
      title: "Movie Library App",
      description:  " Sign In and Sign Up authentication, Users can create, edit, and delete blog posts,Users can comment on and like blog posts,Integrated with a third-party API for fetching related blog content, User profiles with the ability to upload a profil picture, Search functionality to find posts by keywords, Responsive design for seamless usage on, different devices ",
      techStack: "Node.js, React.js , Express,Html,Css,MongoDB",
      githubLink: "https://github.com/rushi9623/movielibrary",
      image: "/imgs/Movie.jpg"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [hovering, setHovering] = useState(false);

  // Set interval for slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      if (!hovering) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectData.length);
        setFlipped(false); // Reset flip state on each slide change
      }
    }, 3000); // Change slides every 3 seconds

    return () => clearInterval(interval);
  }, [hovering, projectData.length]);

  // Handle hover state
  const handleMouseEnter = () => setHovering(true);
  const handleMouseLeave = () => setHovering(false);

  // Function to flip the card
  const flipCard = () => setFlipped(!flipped);

  // Functions to manually navigate slides
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectData.length);
    setFlipped(false); // Reset flip state when moving to the next slide
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projectData.length) % projectData.length);
    setFlipped(false); // Reset flip state when moving to the previous slide
  };

  return (
    <section id="projects" className="min-h-screen bg-gray-900 text-white p-8 flex items-center justify-center relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div 
          className="w-full md:w-1/2 h-80"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ProjectCard
            {...projectData[currentIndex]}
            onClick={flipCard}
            flipped={flipped}
          />
        </div>
      </motion.div>

      {/* Left button */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full hover:bg-gray-600 focus:outline-none"
      >
        {'<'}
      </button>

      {/* Right button */}
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full hover:bg-gray-600 focus:outline-none"
      >
        {'>'}
      </button>
    </section>
  );
};

export default Projects;
