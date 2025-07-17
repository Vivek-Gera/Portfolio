import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface SkillNode {
  id: string;
  name: string;
  category: string;
  x: number;
  y: number;
  description: string;
  projects: string[];
}

const SkillsMap: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills: SkillNode[] = [
    {
      id: 'data-analytics',
      name: 'Data Analytics',
      category: 'Analytics',
      x: 35,
      y: 35,
      description: 'SQL, Power BI, Tableau, Data Visualization',
      projects: ['Business Intelligence', 'Dashboard Development']
    },
    {
      id: 'data-science',
      name: 'Data Science',
      category: 'ML/AI',
      x: 65,
      y: 55,
      description: 'Machine Learning, Statistical Analysis, Model Building',
      projects: ['Predictive Models', 'NLP Applications']
    },
    {
      id: 'java',
      name: 'Java',
      category: 'Backend',
      x: 15,
      y: 25,
      description: 'Core Java, Spring Boot, Microservices',
      projects: ['E-commerce Platform', 'Payment Gateway']
    },
    {
      id: 'postgresql',
      name: 'PostgreSQL',
      category: 'Database',
      x: 25,
      y: 50,
      description: 'Relational database, Data modeling',
      projects: ['Data Warehouse', 'OLTP Systems']
    },
    {
      id: 'kubernetes',
      name: 'Kubernetes',
      category: 'Orchestration',
      x: 10,
      y: 75,
      description: 'Container orchestration, Scalability',
      projects: ['Microservices Platform', 'Auto-scaling']
    },
    {
      id: 'airflow',
      name: 'Apache Airflow',
      category: 'Workflow',
      x: 25,
      y: 85,
      description: 'Workflow orchestration, DAG management',
      projects: ['Data Pipeline Orchestration', 'Scheduled Jobs']
    },
    {
      id: 'aws',
      name: 'AWS',
      category: 'Cloud',
      x: 50,
      y: 15,
      description: 'Cloud infrastructure, Serverless',
      projects: ['Cloud Migration', 'Serverless APIs']
    },
    {
      id: 'kafka',
      name: 'Apache Kafka',
      category: 'Data Streaming',
      x: 85,
      y: 25,
      description: 'Real-time data streaming, Event-driven architecture',
      projects: ['Real-time Analytics', 'Log Processing Pipeline']
    },
    {
      id: 'redis',
      name: 'Redis',
      category: 'Cache',
      x: 75,
      y: 45,
      description: 'In-memory caching, Session management',
      projects: ['API Caching', 'Session Store']
    },
    {
      id: 'spark',
      name: 'Apache Spark',
      category: 'Big Data',
      x: 85,
      y: 75,
      description: 'Distributed computing, Data processing',
      projects: ['ETL Pipeline', 'Machine Learning Pipeline']
    },
    {
      id: 'docker',
      name: 'Docker',
      category: 'DevOps',
      x: 90,
      y: 85,
      description: 'Containerization, Microservices deployment',
      projects: ['Containerized Services', 'CI/CD Pipeline']
    }
  ];

  const connections = [
    // Data Analytics connections (central hub)
    { from: 'data-analytics', to: 'java' },
    { from: 'data-analytics', to: 'aws' },
    { from: 'data-analytics', to: 'kafka' },
    { from: 'data-analytics', to: 'data-science' },
    { from: 'data-analytics', to: 'airflow' },
    { from: 'data-analytics', to: 'postgresql' },
    
    // Data Science connections
    { from: 'data-science', to: 'spark' },
    { from: 'data-science', to: 'kafka' },
    { from: 'data-science', to: 'redis' },
    { from: 'data-science', to: 'docker' },
    
    // Java connections
    { from: 'java', to: 'postgresql' },
    { from: 'java', to: 'aws' },
    { from: 'java', to: 'kafka' },
    
    // PostgreSQL connections
    { from: 'postgresql', to: 'kubernetes' },
    
    // Kubernetes connections
    { from: 'kubernetes', to: 'airflow' },
    { from: 'kubernetes', to: 'docker' },
    
    // Apache Airflow connections
    { from: 'airflow', to: 'spark' },
    
    // AWS connections
    { from: 'aws', to: 'kafka' },
    
    // Apache Kafka connections
    { from: 'kafka', to: 'redis' },
    
    // Redis connections
    { from: 'redis', to: 'spark' },
    
    // Apache Spark connections
    { from: 'spark', to: 'docker' }
  ];

  const getSkillColor = (category: string) => {
    const colors = {
      'Analytics': 'from-gray-400 to-gray-500',
      'ML/AI': 'from-gray-400 to-gray-500',
      'Backend': 'from-data-blue to-api-purple',
      'Data Streaming': 'from-pipeline-orange to-terminal-green',
      'Big Data': 'from-api-purple to-data-blue',
      'Workflow': 'from-terminal-green to-pipeline-orange',
      'Database': 'from-data-blue to-terminal-green',
      'Cache': 'from-pipeline-orange to-api-purple',
      'DevOps': 'from-terminal-green to-data-blue',
      'Orchestration': 'from-api-purple to-pipeline-orange',
      'Cloud': 'from-data-blue to-terminal-green',
      'Scripting': 'from-pipeline-orange to-api-purple'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  return (
    <section id="skills" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-terminal-green">
            Tech Stack
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Interactive circuit board of technologies powering scalable data platforms
          </p>
        </motion.div>

        {/* Circuit Board Container */}
        <div className="relative w-full h-[600px] bg-card-bg border border-border-gray rounded-lg overflow-hidden">
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Connections */}
          <svg className="absolute inset-0 w-full h-full">
            {connections.map((connection, index) => {
              const fromSkill = skills.find(s => s.id === connection.from);
              const toSkill = skills.find(s => s.id === connection.to);
              
              if (!fromSkill || !toSkill) return null;

              return (
                <motion.line
                  key={index}
                  x1={`${fromSkill.x}%`}
                  y1={`${fromSkill.y}%`}
                  x2={`${toSkill.x}%`}
                  y2={`${toSkill.y}%`}
                  stroke="#00ff41"
                  strokeWidth="2"
                  opacity="0.3"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              );
            })}
          </svg>

          {/* Skill Nodes */}
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{ 
                left: `${skill.x}%`, 
                top: `${skill.y}%` 
              } as React.CSSProperties}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className={`w-20 h-20 rounded-full bg-gradient-to-br ${getSkillColor(skill.category)} flex items-center justify-center cursor-pointer glow-effect`}
                onHoverStart={() => setHoveredSkill(skill.id)}
                onHoverEnd={() => setHoveredSkill(null)}
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-white font-bold text-xs text-center leading-tight px-1">{skill.name}</span>
              </motion.div>

              {/* Tooltip */}
              {hoveredSkill === skill.id && (
                <motion.div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-64 bg-card-bg border border-border-gray rounded-lg p-4 z-10"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  <h3 className="font-bold text-terminal-green mb-2">{skill.name}</h3>
                  <p className="text-sm text-gray-300 mb-3">{skill.description}</p>
                  <div className="space-y-1">
                    <p className="text-xs text-gray-400">Projects:</p>
                    {skill.projects.map((project, idx) => (
                      <p key={idx} className="text-xs text-terminal-green">• {project}</p>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <motion.div
          className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {Array.from(new Set(skills.map(s => s.category))).map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${getSkillColor(category)}`}></div>
              <span className="text-sm text-gray-300">{category}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsMap; 