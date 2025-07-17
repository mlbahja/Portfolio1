import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowRight, Code, Database, Server } from 'lucide-react';

const Home = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' }
  ];

  const techIcons = [
    { icon: Code, label: 'Frontend' },
    { icon: Server, label: 'Backend' },
    { icon: Database, label: 'Database' }
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-text"
            >
              <h1 className="hero-title">
                Hi, I'm <span className="highlight">Your Name</span>
              </h1>
              <h2 className="hero-subtitle">Full Stack Developer</h2>
              <p className="hero-description">
                I create modern, scalable web applications using cutting-edge technologies. 
                Passionate about clean code, user experience, and solving complex problems.
              </p>
              
              <div className="hero-actions">
                <Link to="/projects" className="btn btn-primary">
                  View My Work <ArrowRight size={20} />
                </Link>
                <a 
                  href="/resume.pdf" 
                  download 
                  className="btn btn-secondary"
                >
                  <Download size={20} /> Resume
                </a>
              </div>

              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={24} />
                    <span>{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-visual"
            >
              <div className="floating-elements">
                {techIcons.map((tech, index) => (
                  <motion.div
                    key={tech.label}
                    className="floating-icon"
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 3,
                      delay: index * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <tech.icon size={40} />
                    <span>{tech.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="intro-cards">
        <div className="container">
          <div className="cards-grid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="intro-card"
            >
              <Code className="card-icon" />
              <h3>Frontend Development</h3>
              <p>Creating responsive, interactive user interfaces with React, Vue, and modern CSS frameworks.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="intro-card"
            >
              <Server className="card-icon" />
              <h3>Backend Development</h3>
              <p>Building robust APIs and server-side applications with Node.js, Python, and cloud technologies.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="intro-card"
            >
              <Database className="card-icon" />
              <h3>Database Design</h3>
              <p>Designing efficient database schemas and optimizing queries for better performance.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;