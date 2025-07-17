import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Award, Calendar } from 'lucide-react';

const About = () => {
  const skills = {
    Frontend: ['React', 'Vue.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
    Backend: ['Node.js', 'Python', 'Express.js', 'Django', 'REST APIs', 'GraphQL'],
    Database: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'],
    Tools: ['Git', 'Docker', 'AWS', 'Vercel', 'Webpack', 'Vite', 'Jest', 'Postman']
  };

  const experience = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Company',
      period: '2022 - Present',
      description: 'Lead development of web applications using React and Node.js'
    },
    {
      title: 'Full Stack Developer',
      company: 'Startup Inc.',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects'
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency',
      period: '2019 - 2020',
      description: 'Created responsive websites and web applications'
    }
  ];

  return (
    <div className="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="about-header"
        >
          <h1 className="page-title">About Me</h1>
          <p className="page-subtitle">Get to know more about my background and skills</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="about-text"
          >
            <div className="bio-section">
              <div className="section-header">
                <User className="section-icon" />
                <h2>Professional Bio</h2>
              </div>
              <p>
                I'm a passionate Full Stack Developer with over 4 years of experience creating 
                digital solutions that make a difference. I specialize in building scalable web 
                applications using modern technologies like React, Node.js, and cloud platforms.
              </p>
              <p>
                My journey in web development started with a curiosity about how websites work, 
                and it has evolved into a career where I get to solve complex problems and create 
                intuitive user experiences every day.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="about-image"
          >
            <div className="image-placeholder">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500" 
                alt="Professional workspace" 
                className="workspace-image"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="skills-section"
        >
          <div className="section-header">
            <Code className="section-icon" />
            <h2>Technical Skills</h2>
          </div>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="skill-category">
                <h3 className="category-title">{category}</h3>
                <div className="skills-list">
                  {skillList.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="experience-section"
        >
          <div className="section-header">
            <Calendar className="section-icon" />
            <h2>Experience</h2>
          </div>
          <div className="timeline">
            {experience.map((job, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3 className="job-title">{job.title}</h3>
                  <h4 className="company">{job.company}</h4>
                  <span className="period">{job.period}</span>
                  <p className="job-description">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;