import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface SkillNode {
  id: string;
  name: string;
  category: string;
  x: number;
  y: number;
  description: string;
}

const skills: SkillNode[] = [
  { id: 'cloud', name: 'Cloud', category: 'Cloud', x: 50, y: 10, description: 'AWS, Google Cloud, Microsoft Azure' },
  { id: 'backend-programming', name: 'Backend Programming', category: 'Backend', x: 18, y: 20, description: 'Python, Java, C' },
  { id: 'data-streaming', name: 'Data Streaming', category: 'Data Streaming', x: 80, y: 20, description: 'Apache Kafka, Real-time streaming' },

  { id: 'data-analysis', name: 'Data Analysis', category: 'Analytics', x: 40, y: 35, description: 'Power BI, Tableau, Data Visualization, SQL' },
  { id: 'database-languages', name: 'Database Languages', category: 'Database', x: 25, y: 40, description: 'HQL, SQL (Oracle), NoSQL (MongoDB, Postgres)' },
  { id: 'cache', name: 'Cache', category: 'Cache', x: 70, y: 40, description: 'Redis, In-memory caching' },

  { id: 'data-scientist', name: 'Data Scientist', category: 'ML/AI', x: 55, y: 50, description: 'Deep Learning, CNN, Machine Learning, Statistical Analysis' },

  { id: 'data-engineering', name: 'Data Engineering', category: 'ETL & Pipeline', x: 20, y: 65, description: 'Kafka, Airflow, Kubernetes, Docker, Spark, Redis, PostgreSQL, Java, AWS' },
  { id: 'workflow', name: 'Workflow', category: 'Workflow', x: 40, y: 70, description: 'Apache Airflow, DAG management' },
  { id: 'big-data', name: 'Big Data', category: 'Big Data', x: 65, y: 65, description: 'Apache Spark, Distributed computing' },

  { id: 'devops', name: 'DevOps', category: 'DevOps', x: 80, y: 80, description: 'Docker, Microservices deployment' }
];


const connections = [
  { from: 'data-analysis', to: 'backend-programming' },
  { from: 'data-analysis', to: 'cloud' },
  { from: 'data-analysis', to: 'data-streaming' },
  { from: 'data-analysis', to: 'data-scientist' },
  { from: 'data-analysis', to: 'workflow' },
  { from: 'data-analysis', to: 'database-languages' },
  { from: 'data-scientist', to: 'big-data' },
  { from: 'data-scientist', to: 'data-streaming' },
  { from: 'data-scientist', to: 'cache' },
  { from: 'data-scientist', to: 'devops' },
  { from: 'backend-programming', to: 'database-languages' },
  { from: 'backend-programming', to: 'cloud' },
  { from: 'backend-programming', to: 'data-streaming' },
  { from: 'database-languages', to: 'data-engineering' },
  { from: 'data-engineering', to: 'workflow' },
  { from: 'data-engineering', to: 'devops' },
  { from: 'workflow', to: 'big-data' },
  { from: 'cloud', to: 'data-streaming' },
  { from: 'data-streaming', to: 'cache' },
  { from: 'cache', to: 'big-data' },
  { from: 'big-data', to: 'devops' }
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

const NODE_RADIUS = 60; // Increased radius for larger circles

const SkillsMap: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);

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
        <div className="relative w-full h-[800px] bg-card-bg border border-border-gray rounded-lg overflow-hidden">
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* SVG for lines and nodes */}
          <svg className="absolute inset-0 w-full h-full" width="100%" height="100%"
            viewBox="0 -170 1200 880" // Increased height by 4 grid blocks (160 units)
            style={{ display: 'block', zIndex: 10 }}
          >
            {/* Connections */}
            {connections.map((connection, index) => {
              const fromSkill = skills.find(s => s.id === connection.from);
              const toSkill = skills.find(s => s.id === connection.to);
              if (!fromSkill || !toSkill) return null;
              // Convert percent to SVG coordinates (scale up for new viewBox)
              const x1 = fromSkill.x * 12;
              const y1 = fromSkill.y * 7.2;
              const x2 = toSkill.x * 12;
              const y2 = toSkill.y * 7.2;
              return (
                <motion.line
                  key={index}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#00ff41"
                  strokeWidth="2"
                  opacity="0.3"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              );
            })}

            {/* Skill Nodes */}
            {skills.map((skill, index) => {
              const cx = skill.x * 12;
              const cy = skill.y * 7.2;
              const gradientId = `gradient-${skill.category.replace(/\s/g, '-')}`;
              return (
                <g key={skill.id}
                  onMouseEnter={e => {
                    setHoveredSkill(skill.id);
                    // Get SVG position and map to screen
                    const svg = e.currentTarget.ownerSVGElement;
                    if (svg) {
                      const pt = svg.createSVGPoint();
                      pt.x = cx;
                      pt.y = cy - NODE_RADIUS - 10; // above the node
                      const screenCTM = svg.getScreenCTM();
                      if (screenCTM) {
                        const transformed = pt.matrixTransform(screenCTM);
                        setTooltipPos({ x: transformed.x, y: transformed.y });
                      }
                    }
                  }}
                  onMouseLeave={() => { setHoveredSkill(null); setTooltipPos(null); }}
                  style={{ cursor: 'pointer' }}
                >
                  <circle
                    cx={cx}
                    cy={cy}
                    r={NODE_RADIUS}
                    fill={`url(#${gradientId})`}
                    stroke="#00ff41"
                    strokeWidth="2"
                    filter={hoveredSkill === skill.id ? 'drop-shadow(0 0 12px #00ff41)' : undefined}
                  />
                  <text
                    x={cx}
                    y={cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="16"
                    fontWeight="bold"
                    fill="#fff"
                    pointerEvents="none"
                    style={{ fontFamily: 'monospace', userSelect: 'none' }}
                  >
                    {skill.name.split(' ').map((word, i, arr) => (
                      <tspan
                        key={i}
                        x={cx}
                        dy={i === 0 ? 0 : 18}
                        textAnchor="middle"
                      >
                        {word}
                      </tspan>
                    ))}
                  </text>
                </g>
              );
            })}

            {/* SVG Gradients for categories */}
            <defs>
              {Array.from(new Set(skills.map(s => s.category))).map((category, i) => {
                // Map tailwind-like color names to real colors
                const colorMap: Record<string, [string, string]> = {
                  'Analytics': ['#bdbdbd', '#757575'],
                  'ML/AI': ['#bdbdbd', '#757575'],
                  'Backend': ['#3b82f6', '#a21caf'],
                  'Data Streaming': ['#f59e42', '#22c55e'],
                  'Big Data': ['#a21caf', '#3b82f6'],
                  'Workflow': ['#22c55e', '#f59e42'],
                  'Database': ['#3b82f6', '#22c55e'],
                  'Cache': ['#f59e42', '#a21caf'],
                  'DevOps': ['#22c55e', '#3b82f6'],
                  'Orchestration': ['#a21caf', '#f59e42'],
                  'Cloud': ['#3b82f6', '#22c55e'],
                  'Scripting': ['#f59e42', '#a21caf'],
                };
                const [from, to] = colorMap[category] || ['#757575', '#bdbdbd'];
                return (
                  <linearGradient id={`gradient-${category.replace(/\s/g, '-')}`} key={category} x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor={from} />
                    <stop offset="100%" stopColor={to} />
                  </linearGradient>
                );
              })}
            </defs>
          </svg>

          {/* Tooltip (floating, above all) */}
          {hoveredSkill && tooltipPos && (
            <div
              style={{
                position: 'fixed',
                left: tooltipPos.x,
                top: tooltipPos.y - 10,
                zIndex: 50,
                minWidth: 220,
                maxWidth: 320,
                background: '#181d23',
                border: '1.5px solid #00ff41',
                borderRadius: 12,
                padding: '18px 22px',
                color: '#fff',
                fontFamily: 'monospace',
                boxShadow: '0 2px 16px #000a',
                pointerEvents: 'none',
                transform: 'translate(-50%, -100%)'
              }}
            >
              <div style={{ color: '#00ff41', fontWeight: 700, fontSize: 20, marginBottom: 8 }}>{skills.find(s => s.id === hoveredSkill)?.name}</div>
              <div style={{ fontSize: 16, color: '#bdbdbd', whiteSpace: 'pre-line' }}>{skills.find(s => s.id === hoveredSkill)?.description}</div>
            </div>
          )}
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