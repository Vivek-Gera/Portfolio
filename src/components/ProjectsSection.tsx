import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: string;
  title: string;
  input: string;
  process: string;
  output: string;
  technologies: string[];
  description: string;
  impact: string;
}

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: 'dish-recognition',
      title: 'AI Dish Recognition System',
      input: 'Food images from mobile applications',
      process: 'Deep learning model with USDA API integration',
      output: 'Dish identification with nutritional facts',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'REST APIs', 'Firebase'],
      description: 'Developed an AI model to identify dishes from images and fetch nutritional information from USDA database.',
      impact: 'Accurate dish recognition with real-time nutritional data for health-conscious users.'
    },
    {
      id: 'web-development',
      title: 'Freelance Web Development',
      input: 'Client requirements and design specifications',
      process: 'Full-stack development with modern frameworks',
      output: 'Responsive web applications and e-commerce sites',
      technologies: ['JavaScript', 'React', 'Node.js', 'Firebase', 'XAMPP'],
      description: 'Built multiple web applications and e-commerce platforms for clients, focusing on user experience and performance.',
      impact: 'Delivered 15+ successful projects with 100% client satisfaction rate.'
    },
    {
      id: 'data-analytics-dashboard',
      title: 'Business Intelligence Dashboard',
      input: 'Sales and customer data from multiple sources',
      process: 'ETL pipeline with data transformation',
      output: 'Interactive dashboards with real-time insights',
      technologies: ['Python', 'SQL', 'Power BI', 'Tableau', 'PostgreSQL'],
      description: 'Created comprehensive BI dashboards for business analytics, enabling data-driven decision making.',
      impact: 'Improved business insights by 40% and reduced reporting time by 60%.'
    },
    {
      id: 'java-microservices',
      title: 'Java Microservices Platform',
      input: 'Legacy monolithic application',
      process: 'Service decomposition and API development',
      output: 'Scalable microservices architecture',
      technologies: ['Java', 'Spring Boot', 'Docker', 'Kubernetes', 'PostgreSQL'],
      description: 'Modernized legacy systems by breaking them into microservices, improving scalability and maintainability.',
      impact: 'Reduced deployment time by 80% and improved system reliability.'
    },
    {
      id: 'data-engineering-pipeline',
      title: 'Data Engineering Pipeline',
      input: 'Raw data from multiple sources',
      process: 'Data processing and transformation',
      output: 'Clean, structured data warehouse',
      technologies: ['Apache Spark', 'Apache Kafka', 'Python', 'Airflow', 'AWS'],
      description: 'Built end-to-end data pipelines for processing large-scale data with real-time capabilities.',
      impact: 'Processed terabytes of data daily with 99.9% accuracy and real-time processing.'
    },
    {
      id: 'machine-learning-models',
      title: 'Machine Learning Models',
      input: 'Historical data and user behavior patterns',
      process: 'Feature engineering and model training',
      output: 'Production-ready ML models',
      technologies: ['Python', 'Scikit-learn', 'TensorFlow', 'Pandas', 'NumPy'],
      description: 'Developed predictive models and machine learning solutions for various business problems.',
      impact: 'Improved prediction accuracy by 30% and automated decision-making processes.'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-terminal-green">
            Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Data-driven solutions across Python, Java, Data Analytics, Data Engineering, and Data Science
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-card-bg border border-border-gray rounded-lg p-6 hover:border-terminal-green transition-colors duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Project Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-terminal-green mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300">{project.description}</p>
              </div>

              {/* Pipeline Flow */}
              <div className="space-y-4 mb-6">
                {/* Input */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-data-blue rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">IN</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400">Input</p>
                    <p className="text-terminal-green font-mono text-sm">{project.input}</p>
                  </div>
                </div>

                {/* Process Arrow */}
                <div className="flex justify-center">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-data-blue to-pipeline-orange"></div>
                </div>

                {/* Process */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pipeline-orange rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">PROC</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400">Process</p>
                    <p className="text-terminal-green font-mono text-sm">{project.process}</p>
                  </div>
                </div>

                {/* Output Arrow */}
                <div className="flex justify-center">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-pipeline-orange to-terminal-green"></div>
                </div>

                {/* Output */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-terminal-green rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">OUT</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400">Output</p>
                    <p className="text-terminal-green font-mono text-sm">{project.output}</p>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-4">
                <p className="text-sm text-gray-400 mb-2">Technologies:</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-dark-bg border border-border-gray rounded-full text-xs text-terminal-green"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Impact */}
              <div className="border-t border-border-gray pt-4">
                <p className="text-sm text-gray-400 mb-1">Impact:</p>
                <p className="text-sm text-success-green">{project.impact}</p>
              </div>

              {/* Expandable Details */}
              <motion.button
                className="mt-4 w-full text-center text-terminal-green hover:text-white transition-colors duration-200"
                onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                whileHover={{ scale: 1.05 }}
              >
                {selectedProject === project.id ? 'Show Less' : 'View Details'}
              </motion.button>

              {selectedProject === project.id && (
                <motion.div
                  className="mt-4 p-4 bg-dark-bg rounded-lg border border-border-gray"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-bold text-terminal-green mb-2">Architecture Highlights</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Scalable microservices architecture</li>
                        <li>• Event-driven data processing</li>
                        <li>• Fault-tolerant design patterns</li>
                        <li>• Real-time monitoring and alerting</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-terminal-green mb-2">Key Achievements</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• 99.99% system uptime</li>
                        <li>• Sub-second response times</li>
                        <li>• Zero-downtime deployments</li>
                        <li>• Comprehensive test coverage</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 