import React from 'react';
import { motion } from 'framer-motion';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readTime: string;
  category: string;
}

const BlogSection: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 'kafka-performance',
      title: 'Optimizing Kafka Performance for High-Throughput Data Processing',
      excerpt: 'Deep dive into Kafka configuration tuning, partition strategies, and monitoring techniques for processing millions of events per second.',
      date: '2024-01-15',
      tags: ['#KafkaPerformance', '#DataEngineering', '#SystemDesign'],
      readTime: '8 min read',
      category: 'Data Engineering'
    },
    {
      id: 'spark-optimization',
      title: 'Apache Spark Optimization: From Hours to Minutes',
      excerpt: 'Advanced techniques for optimizing Spark jobs, including memory management, partition strategies, and cluster tuning.',
      date: '2023-12-20',
      tags: ['#SparkOptimization', '#BigData', '#Performance'],
      readTime: '12 min read',
      category: 'Big Data'
    },
    {
      id: 'microservices-patterns',
      title: 'Microservices Design Patterns for Data Platforms',
      excerpt: 'Exploring event-driven architecture, saga patterns, and distributed data management in microservices environments.',
      date: '2023-11-10',
      tags: ['#Microservices', '#Architecture', '#EventDriven'],
      readTime: '10 min read',
      category: 'System Design'
    },
    {
      id: 'data-quality',
      title: 'Building Robust Data Quality Monitoring Systems',
      excerpt: 'Implementing comprehensive data quality checks, anomaly detection, and automated alerting for production data pipelines.',
      date: '2023-10-25',
      tags: ['#DataQuality', '#Monitoring', '#ETL'],
      readTime: '6 min read',
      category: 'Data Engineering'
    },
    {
      id: 'airflow-best-practices',
      title: 'Apache Airflow Best Practices for Production',
      excerpt: 'Lessons learned from managing complex DAGs, error handling, and scaling Airflow for enterprise workloads.',
      date: '2023-09-15',
      tags: ['#Airflow', '#Workflow', '#Orchestration'],
      readTime: '9 min read',
      category: 'Workflow'
    },
    {
      id: 'java-performance',
      title: 'Java Performance Tuning for Data Applications',
      excerpt: 'JVM optimization, garbage collection tuning, and memory management strategies for high-performance Java applications.',
      date: '2023-08-30',
      tags: ['#JavaPerformance', '#JVM', '#Optimization'],
      readTime: '11 min read',
      category: 'Backend'
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Data Engineering': 'text-data-blue',
      'Big Data': 'text-api-purple',
      'System Design': 'text-pipeline-orange',
      'Workflow': 'text-terminal-green',
      'Backend': 'text-warning-yellow'
    };
    return colors[category as keyof typeof colors] || 'text-gray-400';
  };

  return (
    <section id="blog" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Data Reports
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technical insights and engineering deep-dives from the field
          </p>
        </motion.div>

        {/* Dashboard Header */}
        <div className="bg-card-bg border border-border-gray rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-terminal-green rounded-full animate-pulse"></div>
              <span className="text-terminal-green font-mono">blog.vivek.dev</span>
              <div className="text-xs text-success-green">● LIVE</div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-400">Posts:</span>
              <span className="text-terminal-green font-mono">{blogPosts.length}</span>
            </div>
          </div>
          
          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-terminal-green">50K+</div>
              <div className="text-xs text-gray-400">Monthly Views</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-data-blue">25+</div>
              <div className="text-xs text-gray-400">Articles</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pipeline-orange">95%</div>
              <div className="text-xs text-gray-400">Engagement</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-api-purple">10K+</div>
              <div className="text-xs text-gray-400">Subscribers</div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-card-bg border border-border-gray rounded-lg p-6 hover:border-terminal-green transition-colors duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Post Header */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-bold ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400 font-mono">{post.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-400 font-mono">{post.date}</p>
              </div>

              {/* Post Excerpt */}
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-dark-bg border border-border-gray rounded text-xs text-terminal-green font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Read More Button */}
              <motion.button
                className="w-full text-center text-terminal-green hover:text-white transition-colors duration-200 text-sm font-mono"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                READ REPORT →
              </motion.button>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          className="mt-12 bg-card-bg border border-border-gray rounded-lg p-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-terminal-green mb-4">
            Subscribe to Data Insights
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get the latest articles on data engineering, system design, and backend development delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-dark-bg border border-border-gray rounded-lg text-white placeholder-gray-400 focus:border-terminal-green focus:outline-none"
            />
            <motion.button
              className="px-6 py-3 bg-terminal-green text-terminal-dark font-bold rounded-lg hover:bg-terminal-green/80 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection; 