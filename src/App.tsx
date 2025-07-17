import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import SkillsMap from './components/SkillsMap';
import ProjectsSection from './components/ProjectsSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import BlogSection from './components/BlogSection';
import YouTubeSection from './components/YouTubeSection';
import ContactSection from './components/ContactSection';
import Navigation from './components/Navigation';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <Navigation />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <HeroSection />
        <SkillsMap />
        <ProjectsSection />
        <ExperienceTimeline />
        <BlogSection />
        <YouTubeSection />
        <ContactSection />
      </motion.div>
    </div>
  );
};

export default App; 