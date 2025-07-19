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
  github?: string;
}

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [selectedProcessFlow, setSelectedProcessFlow] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: 'dish-recognition',
      title: 'NutriLens-AI-Food-Nutrition',
      input: 'Raw food images provided by the user.',
      process: `1. Image preprocessing: random rotation, resized crop, horizontal flip, normalization.\n2. Model: Pretrained DenseNet-161 CNN, classifier redefined for 101 food categories.\n3. Training: Data split (8:1:1), heavy augmentation, Adam optimizer, dropout.\n4. Inference: Predicts food class and nutritional info.`,
      output: 'Predicted food category (from 101 classes) and nutritional analysis for the identified food item.',
      technologies: ['Python', 'PyTorch', 'DenseNet-161', 'Streamlit', 'Jupyter Notebook', 'Data Augmentation'],
      description: 'Automatic identification of food items using a pretrained DenseNet-161 CNN. Improves food classification accuracy with advanced data augmentation. Outputs both food class and nutritional analysis.',
      impact: 'Automates food identification and nutrition analysis for diet tracking, health apps, and research. Improves classification accuracy and enables future mobile expansion.',
      github: 'https://github.com/Vivek-Gera/NutriLens-AI-Food-Nutrition'
    },
    {
      id: 'pal-ai-companion',
      title: 'Personal AI Life-companion (PAL)',
      input: 'User voice/text commands, personal data, smart device signals, and contextual information.',
      process: `1. Define scope and features: Voice recognition, NLP, task management, smart device control, etc.\n2. Natural Language Processing: Understand and respond to user commands using NLP libraries.\n3. Sentiment Analysis: Detect and adapt to user emotions for empathetic responses.\n4. Machine Learning: Train models for speech, language, and emotion understanding.\n5. Dialogue Management: Maintain context and generate coherent, context-aware responses.\n6. Personalization: Learn user preferences and adapt over time.\n7. Integrate APIs: Connect to weather, news, calendar, and smart home APIs.\n8. User Interface: Voice and/or chatbot interface for seamless interaction.\n9. Test and iterate: Continuous improvement based on user feedback.`,
      output: 'Conversational, context-aware responses; task automation; personalized recommendations; smart device control.',
      technologies: ['Python', 'NLP', 'Speech Recognition', 'Machine Learning', 'Dialogflow', 'PyTorch', 'APIs', 'React'],
      description: 'A personal AI companion that understands natural language, manages tasks, controls devices, and adapts to user preferences. It combines NLP, sentiment analysis, and ML to create a human-like, empathetic assistant.',
      impact: 'Aims to revolutionize personal productivity and digital companionship by providing a friendly, intelligent, and adaptive AI assistant for daily life.',
      github: 'https://github.com/Vivek-Gera/PAL'
    },
    {
      id: 'meioe-emoji',
      title: 'Multiple Expressions In One Emoji (MEIOE)',
      input: 'User selection of emoji expressions, custom facial features, gestures, and visual elements within a mobile app or emoji picker.',
      process: `1. Mobile App Development: Build a custom keyboard/emoji picker using React Native or native platforms.\n2. Emoji Integration: Use Unicode standards and emoji libraries for encoding/decoding and display.\n3. Messaging App Integration: Integrate with WhatsApp/Instagram APIs for custom emoji support.\n4. User Experience: Design an intuitive UI for selecting, layering, and customizing emoji expressions.\n5. Real-time Messaging: Enable real-time emoji sharing with Firebase Cloud Messaging.\n6. Backend & Database: (Optional) Use Node.js and Firebase for storing user data and custom expressions.\n7. Authentication: Use Firebase Authentication for secure user login.\n8. Cloud Storage: Store emoji assets and custom expressions in Firebase Cloud Storage.\n9. Testing & Deployment: Test across devices and deploy to Google Play Store/Apple App Store.\n10. Maintenance: Update app for ongoing compatibility and user feedback.`,
      output: 'Dynamic, multi-expression emojis that can be layered, customized, and shared across messaging platforms for richer digital communication.',
      technologies: ['React Native', 'React Native Elements', 'React Navigation', 'emoji-datasource', 'react-native-emoji', 'Firebase', 'Node.js', 'Firebase Auth', 'Firebase Cloud Messaging'],
      description: 'MEIOE revolutionizes communication by allowing users to create and share emojis with multiple, customizable expressions. The project provides a user-friendly interface for selecting, layering, and transitioning between expressions and engaging conversations.',
      impact: 'Enables users to express complex emotions and reactions in digital conversations, breaking the limitations of traditional emojis and enhancing expressiveness across platforms.',
      github: 'https://github.com/Vivek-Gera/MEIOE'
    },
    {
      id: 'realtime-adf-pipeline',
      title: 'Real-Time Water Sensor Data Pipeline (Azure)',
      input: 'Aggregated water sensor data (over 1 million rows) from multiple European countries, including country, water body, determinands, concentration levels, and quality samples.',
      process: `1. Data Ingestion: Use Azure Logic Apps and Data Factory to ingest new data from SQL database into Azure Blob Storage.\n2. Real-time Triggering: Triggers automatically detect and retrieve newly added records.\n3. Data Storage & Transformation: Store incremental data in Azure Data Lake Gen2 and transform using Azure Databricks.\n4. Visualization: Visualize processed data in Power BI for real-time insights.\n5. Automation: Configured triggers and pipelines ensure seamless, hands-off operation.`,
      output: 'Real-time, incremental water quality data available for analysis and visualization in Power BI, enabling immediate insights and proactive decision-making.',
      technologies: ['SQL', 'Scala', 'Azure SQL Database', 'Azure Logic Apps', 'Azure Blob Storage', 'Azure Data Lake Gen2', 'Azure Data Factory', 'Azure Databricks', 'Power BI'],
      description: 'A scalable, automated Azure pipeline for real-time ingestion, processing, and storage of water sensor data. Only new records are processed, maximizing efficiency and minimizing costs. The solution provides actionable insights into water quality across Europe.',
      impact: 'Enables organizations to monitor water quality in real time, optimize resource usage, and make proactive decisions based on immediate data availability.',
      github: 'https://github.com/Vivek-Gera/Real-time-ADF-Pipeline-with-LogicApps'
    },
    {
      id: 'personal-finance-pbi',
      title: 'Personal Finance PowerBI Dashboard',
      input: 'Personal expense data collected and organized in Excel workbooks, including date, item category, price, location, and comments.',
      process: `1. Data Collection: Manually input purchase receipts into Excel, standardize categories and dates.\n2. Data Cleaning: Edit categories, standardize date formats, and remove null entries.\n3. Data Preparation: Create calendar, item, and location lookup tables for analysis.\n4. Measure Creation: Build PowerBI measures for total cost, price ranges, averages, and custom metrics.\n5. Dashboard Design: Plan and implement interactive visuals and slicers for deep data exploration.\n6. Visualization: Use PowerBI to create executive summary and granular dashboards.\n7. Sharing: Provide instructions for others to download and use the dashboard locally.`,
      output: 'Interactive PowerBI dashboards that visualize monthly, weekly, and granular spending, enabling users to analyze and understand their financial behavior.',
      technologies: ['Python', 'openpyxl', 'Microsoft Excel', 'Microsoft PowerBI Desktop'],
      description: 'A comprehensive PowerBI dashboard project for personal finance analysis. Transforms static Excel data into dynamic, interactive dashboards, enabling deep insights into spending patterns and financial behavior.',
      impact: 'Empowers users to make informed financial decisions by providing clear, actionable insights into their spending habits and trends.',
      github: 'https://github.com/Vivek-Gera/Financial-Analysis-PBI'
    },
    {
      id: 'flight-booking-system',
      title: 'Flight Booking System',
      input: 'User authentication, flight search parameters (origin, destination, dates, passengers), seat selection, and payment information.',
      process: `1. Authentication & Authorization: Implement Tomcat Roles for Airline Admin, Manager, and Customer access control.\n2. Admin Workflow: Airline Admin sets seat prices and features for First Class, Business, and Economy seats.\n3. Manager Approval: Airline Manager reviews and approves seat configurations before customer availability.\n4. Customer Booking: Customers search flights, select seats, and complete payment transactions.\n5. Real-time Updates: System calculates remaining seats and prevents overbooking.\n6. Email Integration: Automated flight itinerary emails sent to customers upon booking confirmation.\n7. Security Implementation: SQL Injection and Cross-Site Scripting (XSS) protection measures.`,
      output: 'Fully functional web-based flight booking system with role-based access, real-time seat management, secure payment processing, and automated customer communication.',
      technologies: ['Java', 'Java Servlets', 'HTML', 'CSS', 'JavaScript', 'Tomcat'],
      description: 'A robust flight booking system for Turkish Airlines using Java Servlets and JSP (MVC). Includes role-based access, real-time seat tracking, secure payments, and automated email alerts.',
      impact: 'Streamlines airline operations with automated booking workflows, reduces manual errors, and provides secure, user-friendly booking experience for customers.',
      github: 'https://github.com/Vivek-Gera/Flight_Booking_System_JavaSerVlets'
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {projects.map((project, index) => (
            <div key={project.id} className="flex flex-col">
              <motion.div
                className="bg-card-bg border border-border-gray rounded-lg p-6 hover:border-terminal-green transition-colors duration-300 flex flex-col h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Project Header */}
                <div className="mb-6 flex-shrink-0">
                  <h3 className="text-2xl font-bold text-terminal-green mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300">{project.description}</p>
                </div>

                {/* Technologies */}
                <div className="mb-4 flex-shrink-0">
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
                <div className="border-t border-border-gray pt-4 flex-shrink-0">
                  <p className="text-sm text-gray-400 mb-1">Impact:</p>
                  <p className="text-sm text-success-green">{project.impact}</p>
                </div>

                {/* Spacer to push buttons to bottom */}
                <div className="flex-grow"></div>

                {/* Action Buttons */}
                <div className="mt-4 flex gap-2 flex-shrink-0">
                  <motion.button
                    className="flex-1 text-center text-terminal-green hover:text-white transition-colors duration-200 border border-terminal-green rounded px-3 py-2"
                    onClick={() => {
                      if (selectedProcessFlow === project.id) {
                        setSelectedProcessFlow(null);
                      } else {
                        setSelectedProcessFlow(project.id);
                        setSelectedProject(null);
                      }
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {selectedProcessFlow === project.id ? 'Hide Process Flow' : 'View Process Flow'}
                  </motion.button>
                  <motion.button
                    className="flex-1 text-center text-terminal-green hover:text-white transition-colors duration-200 border border-terminal-green rounded px-3 py-2"
                    onClick={() => {
                      if (selectedProject === project.id) {
                        setSelectedProject(null);
                      } else {
                        setSelectedProject(project.id);
                        setSelectedProcessFlow(null);
                      }
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {selectedProject === project.id ? 'Show Less' : 'View Details'}
                  </motion.button>
                </div>
              </motion.div>

              {/* Process Flow Modal - Outside the card */}
              {selectedProcessFlow === project.id && (
                <motion.div
                  className="mt-4 p-4 bg-dark-bg rounded-lg border border-border-gray"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <h4 className="font-bold text-terminal-green mb-4 text-center">Process Flow</h4>
                  <div className="space-y-4">
                    {/* Input */}
                    <div className="bg-card-bg border border-border-gray rounded-lg p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-8 h-8 bg-data-blue rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-xs">IN</span>
                        </div>
                        <h5 className="text-terminal-green font-semibold">Input</h5>
                      </div>
                      <p className="text-gray-300 text-sm">{project.input}</p>
                    </div>

                    {/* Process Arrow */}
                    <div className="flex justify-center">
                      <div className="w-0.5 h-6 bg-gradient-to-b from-data-blue to-pipeline-orange"></div>
                    </div>

                    {/* Process */}
                    <div className="bg-card-bg border border-border-gray rounded-lg p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-8 h-8 bg-pipeline-orange rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-xs">PROC</span>
                        </div>
                        <h5 className="text-terminal-green font-semibold">Process</h5>
                      </div>
                      <div className="text-gray-300 text-sm space-y-1">
                        {project.process.split('\n').map((line, idx) => (
                          <div key={idx}>{line}</div>
                        ))}
                      </div>
                    </div>

                    {/* Output Arrow */}
                    <div className="flex justify-center">
                      <div className="w-0.5 h-6 bg-gradient-to-b from-pipeline-orange to-terminal-green"></div>
                    </div>

                    {/* Output */}
                    <div className="bg-card-bg border border-border-gray rounded-lg p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-8 h-8 bg-terminal-green rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-xs">OUT</span>
                        </div>
                        <h5 className="text-terminal-green font-semibold">Output</h5>
                      </div>
                      <p className="text-gray-300 text-sm">{project.output}</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* View Details Modal - Outside the card */}
              {selectedProject === project.id && (
                <motion.div
                  className="mt-4 p-4 bg-dark-bg rounded-lg border border-border-gray"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <div className="space-y-3">
                    {/* If this project has a github link, show it at the top */}
                    {project.github && (
                      <div className="mb-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-terminal-green underline hover:text-white font-mono text-sm"
                        >
                          View on GitHub ↗
                        </a>
                      </div>
                    )}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 