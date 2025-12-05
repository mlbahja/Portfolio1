import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Filter } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'RealTime-Forum-Chat',
      description: 'A full-stack Forum solution with user authentication, and users can chat with others and make interact with them by likeing them posts or mark down commant in there posts',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['Golang', 'javascript vanila', 'SQilte', 'html css'],
      category: 'Full Stack',
      githubUrl: 'https://github.com/mlbahja/real-time-forum-typing-in-progress',
      liveUrl: 'https://real-time-forum-production-6031.up.railway.app'
    },
    {
      id: 2,
      title: '01-BLOG',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['Vue.js', 'Express.js', 'Socket.io', 'PostgreSQL'],
      category: 'Full Stack',
      githubUrl: 'https://github.com/mlbahja/real-time-forum-typing-in-progress',
      liveUrl: 'https://real-time-forum-production-6031.up.railway.app'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts and interactive charts.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['React', 'Chart.js', 'Weather API', 'CSS3'],
      category: 'Frontend',
      githubUrl: 'https://github.com/yourusername/weather-dashboard',
      liveUrl: 'https://your-weather-demo.netlify.app'
    },
    {
      id: 4,
      title: 'Blog API',
      description: 'A RESTful API for a blog platform with authentication, CRUD operations, and comment system.',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['Node.js', 'Express.js', 'JWT', 'MongoDB'],
      category: 'Backend',
      githubUrl: 'https://github.com/yourusername/blog-api',
      liveUrl: 'https://your-blog-api.herokuapp.com'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects and skills with modern design.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['React', 'Framer Motion', 'CSS3', 'Responsive Design'],
      category: 'Frontend',
      githubUrl: 'https://github.com/yourusername/portfolio',
      liveUrl: 'https://your-portfolio.netlify.app'
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'Real-time chat application with multiple rooms, user authentication, and message history.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['React', 'Socket.io', 'Node.js', 'Redis'],
      category: 'Full Stack',
      githubUrl: 'https://github.com/yourusername/chat-app',
      liveUrl: 'https://your-chat-demo.netlify.app'
    },
    {
      id: 7,
      title: '  Groupie-Tracker',
      description: 'Real-time chat application with multiple rooms, user authentication, and message history.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['React', 'Socket.io', 'Node.js', 'Redis'],
      category: 'Full Stack',
      githubUrl: 'https://github.com/yourusername/chat-app',
      liveUrl: 'https://your-chat-demo.netlify.app'
    }


  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="projects-header"
        >
          <h1 className="page-title">My Projects</h1>
          <p className="page-subtitle">Here are some of my recent works and personal projects</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="filter-section"
        >
          <div className="filter-header">
            <Filter className="filter-icon" />
            <span>Filter by category:</span>
          </div>
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="project-card"
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      title="View Source Code"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      title="View Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    <Github size={16} /> Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;