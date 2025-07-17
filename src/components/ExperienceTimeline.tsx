import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceEntry {
  id: string;
  timestamp: string;
  level: 'INFO' | 'DEBUG' | 'WARN' | 'ERROR';
  company: string;
  role: string;
  duration: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const ExperienceTimeline: React.FC = () => {
  const experiences: ExperienceEntry[] = [
    {
      id: 'accenture-associate',
      timestamp: '2024-08-14',
      level: 'INFO',
      company: 'Accenture',
      role: 'Associate Software Engineer',
      duration: '2024 August 14 - Present',
      description: 'Working as Java Developer and Data Engineer',
      achievements: [
        'Developing enterprise applications using Java and Spring Boot',
        'Building data pipelines and ETL processes',
        'Working with cloud technologies and microservices',
        'Contributing to large-scale software development projects'
      ],
      technologies: ['Java', 'Spring Boot', 'Data Engineering', 'Cloud Technologies', 'Microservices']
    },
    {
      id: 'founder-ceo',
      timestamp: '2020-01-20',
      level: 'DEBUG',
      company: 'Freelance (Founder & CEO)',
      role: 'Founder and CEO',
      duration: '2020 January 20 - 2024 August 13',
      description: 'Freelance web development and AI projects',
      achievements: [
        'Developed AI model to identify dish names and fetch facts from USDA API',
        'Created multiple web applications using Firebase and XAMPP',
        'Built responsive e-commerce platforms and business websites',
        'Managed client relationships and project delivery'
      ],
      technologies: ['Web Development', 'Firebase', 'XAMPP', 'AI/ML', 'JavaScript', 'Python']
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'INFO': return 'text-terminal-green';
      case 'DEBUG': return 'text-data-blue';
      case 'WARN': return 'text-warning-yellow';
      case 'ERROR': return 'text-error-red';
      default: return 'text-gray-400';
    }
  };

  const getLevelBgColor = (level: string) => {
    switch (level) {
      case 'INFO': return 'bg-terminal-green/20';
      case 'DEBUG': return 'bg-data-blue/20';
      case 'WARN': return 'bg-warning-yellow/20';
      case 'ERROR': return 'bg-error-red/20';
      default: return 'bg-gray-500/20';
    }
  };

  return (
    <section id="experience" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-terminal-green">
            Experience Log
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional journey captured in system logs
          </p>
        </motion.div>

        {/* Terminal Header */}
        <div className="bg-terminal-dark border border-terminal-green rounded-lg p-4 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-error-red rounded-full"></div>
              <div className="w-3 h-3 bg-warning-yellow rounded-full"></div>
              <div className="w-3 h-3 bg-success-green rounded-full"></div>
            </div>
            <span className="text-terminal-green text-sm font-mono">experience.log</span>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              className="bg-card-bg border border-border-gray rounded-lg p-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Log Entry Header */}
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-gray-400 font-mono text-sm">[{experience.timestamp}]</span>
                <span className={`font-bold text-sm px-2 py-1 rounded ${getLevelColor(experience.level)} ${getLevelBgColor(experience.level)}`}>
                  {experience.level}
                </span>
                <span className="text-terminal-green font-mono">Joined {experience.company} as {experience.role}</span>
              </div>

              {/* Role and Duration */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-1">
                  {experience.role} at {experience.company}
                </h3>
                <p className="text-gray-400 font-mono text-sm">{experience.duration}</p>
                <p className="text-gray-300 mt-2">{experience.description}</p>
              </div>

              {/* Technologies */}
              <div className="mb-4">
                <p className="text-sm text-gray-400 mb-2">Technologies:</p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-dark-bg border border-border-gray rounded-full text-xs text-terminal-green"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <p className="text-sm text-gray-400 mb-2">Key Achievements:</p>
                <ul className="space-y-1">
                  {experience.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-sm text-gray-300 flex items-start space-x-2">
                      <span className="text-terminal-green mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Animated Progress Bar */}
              <motion.div
                className="mt-4 h-1 bg-dark-bg rounded-full overflow-hidden"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 2, delay: index * 0.3 }}
                viewport={{ once: true }}
              >
                <div className={`h-full ${getLevelBgColor(experience.level)}`}></div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center p-6 bg-card-bg border border-border-gray rounded-lg">
            <div className="text-3xl font-bold text-terminal-green mb-2">6+</div>
            <div className="text-sm text-gray-400">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-card-bg border border-border-gray rounded-lg">
            <div className="text-3xl font-bold text-data-blue mb-2">50+</div>
            <div className="text-sm text-gray-400">Projects Delivered</div>
          </div>
          <div className="text-center p-6 bg-card-bg border border-border-gray rounded-lg">
            <div className="text-3xl font-bold text-pipeline-orange mb-2">10M+</div>
            <div className="text-sm text-gray-400">Events Processed/sec</div>
          </div>
          <div className="text-center p-6 bg-card-bg border border-border-gray rounded-lg">
            <div className="text-3xl font-bold text-api-purple mb-2">99.99%</div>
            <div className="text-sm text-gray-400">System Uptime</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceTimeline; 