import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  views: string;
  category: string;
  command: string;
}

const YouTubeSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isTyping, setIsTyping] = useState(false);
  const [typedCommand, setTypedCommand] = useState('');

  const videos: Video[] = [
    {
      id: 'kafka-tutorial',
      title: 'Apache Kafka Deep Dive: Architecture & Best Practices',
      description: 'Comprehensive tutorial on Kafka architecture, partitioning strategies, and production deployment.',
      thumbnail: 'https://img.youtube.com/vi/example1/maxresdefault.jpg',
      duration: '45:30',
      views: '125K',
      category: 'Data Engineering',
      command: 'watch --topic kafka_architecture'
    },
    {
      id: 'spark-optimization',
      title: 'Spark Performance Optimization: From Hours to Minutes',
      description: 'Advanced Spark tuning techniques, memory management, and cluster optimization strategies.',
      thumbnail: 'https://img.youtube.com/vi/example2/maxresdefault.jpg',
      duration: '38:15',
      views: '89K',
      category: 'Big Data',
      command: 'watch --topic spark_optimization'
    },
    {
      id: 'microservices-patterns',
      title: 'Microservices Design Patterns for Data Platforms',
      description: 'Event-driven architecture, saga patterns, and distributed data management in microservices.',
      thumbnail: 'https://img.youtube.com/vi/example3/maxresdefault.jpg',
      duration: '52:20',
      views: '156K',
      category: 'System Design',
      command: 'watch --topic microservices_patterns'
    },
    {
      id: 'java-performance',
      title: 'Java Performance Tuning for High-Throughput Applications',
      description: 'JVM optimization, garbage collection tuning, and memory management for data applications.',
      thumbnail: 'https://img.youtube.com/vi/example4/maxresdefault.jpg',
      duration: '41:45',
      views: '98K',
      category: 'Backend',
      command: 'watch --topic java_performance'
    },
    {
      id: 'airflow-tutorial',
      title: 'Apache Airflow: Building Production Data Pipelines',
      description: 'Complete guide to Airflow DAGs, operators, and best practices for production workflows.',
      thumbnail: 'https://img.youtube.com/vi/example5/maxresdefault.jpg',
      duration: '35:10',
      views: '112K',
      category: 'Workflow',
      command: 'watch --topic airflow_pipelines'
    },
    {
      id: 'data-quality',
      title: 'Data Quality Monitoring: Building Robust Systems',
      description: 'Implementing comprehensive data quality checks, anomaly detection, and automated alerting.',
      thumbnail: 'https://img.youtube.com/vi/example6/maxresdefault.jpg',
      duration: '28:35',
      views: '76K',
      category: 'Data Engineering',
      command: 'watch --topic data_quality'
    }
  ];

  const categories = ['all', 'Data Engineering', 'Big Data', 'System Design', 'Backend', 'Workflow'];

  const filteredVideos = selectedCategory === 'all' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setIsTyping(true);
    setTypedCommand(`watch --category ${category.toLowerCase().replace(' ', '_')}`);
    
    setTimeout(() => {
      setIsTyping(false);
    }, 2000);
  };

  const handleCommandInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const command = e.currentTarget.value;
      setTypedCommand(command);
      setIsTyping(true);
      
      setTimeout(() => {
        setIsTyping(false);
      }, 2000);
      
      e.currentTarget.value = '';
    }
  };

  return (
    <section id="videos" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-terminal-green">
            Command Console
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technical tutorials and deep-dive sessions on data engineering
          </p>
        </motion.div>

        {/* Terminal Console */}
        <div className="bg-terminal-dark border border-terminal-green rounded-lg p-6 mb-8">
          <div className="flex items-center mb-4">
            <div className="flex space-x-2 mr-4">
              <div className="w-3 h-3 bg-error-red rounded-full"></div>
              <div className="w-3 h-3 bg-warning-yellow rounded-full"></div>
              <div className="w-3 h-3 bg-success-green rounded-full"></div>
            </div>
            <span className="text-terminal-green text-sm font-mono">vivek@youtube:~</span>
          </div>
          
          <div className="font-mono text-terminal-green">
            <div className="mb-2">
              <span className="text-gray-400">$</span> watch --help
            </div>
            <div className="text-sm text-gray-400 mb-4">
              Available commands: --category, --topic, --latest, --popular
            </div>
            <div className="mb-2">
              <span className="text-gray-400">$</span> {typedCommand}
              {isTyping && <span className="cursor-blink"></span>}
            </div>
            {!isTyping && typedCommand && (
              <div className="text-sm text-success-green">
                ✓ Found {filteredVideos.length} videos in category "{selectedCategory}"
              </div>
            )}
            <div className="mt-4">
              <span className="text-gray-400">$</span>
              <input
                type="text"
                className="bg-transparent border-none outline-none text-terminal-green font-mono ml-2 w-64"
                placeholder="Type your command here..."
                onKeyPress={handleCommandInput}
              />
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`px-4 py-2 rounded-lg font-mono text-sm transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-terminal-green text-terminal-dark'
                  : 'bg-card-bg border border-border-gray text-gray-300 hover:border-terminal-green'
              }`}
              onClick={() => handleCategorySelect(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category === 'all' ? 'ALL' : category.toUpperCase()}
            </motion.button>
          ))}
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              className="bg-card-bg border border-border-gray rounded-lg overflow-hidden hover:border-terminal-green transition-colors duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Video Thumbnail */}
              <div className="relative">
                <div className="w-full h-48 bg-gradient-to-br from-data-blue to-api-purple flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-2">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-white text-sm font-mono">{video.command}</p>
                  </div>
                </div>
                <div className="absolute top-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-terminal-green font-mono">{video.category}</span>
                  <span className="text-xs text-gray-400">{video.views} views</span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                  {video.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {video.description}
                </p>

                <motion.button
                  className="w-full bg-terminal-green text-terminal-dark py-2 rounded font-mono text-sm font-bold hover:bg-terminal-green/80 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  WATCH NOW
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Channel Stats */}
        <motion.div
          className="mt-12 bg-card-bg border border-border-gray rounded-lg p-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-terminal-green mb-4">
            Channel Analytics
            <span className="text-xs text-success-green ml-2">● LIVE</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-terminal-green mb-2 animate-pulse">500K+</div>
              <div className="text-sm text-gray-400">Subscribers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-data-blue mb-2 animate-pulse">2M+</div>
              <div className="text-sm text-gray-400">Total Views</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pipeline-orange mb-2 animate-pulse">50+</div>
              <div className="text-sm text-gray-400">Videos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-api-purple mb-2 animate-pulse">95%</div>
              <div className="text-sm text-gray-400">Engagement</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default YouTubeSection; 