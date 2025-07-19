import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import DataUniverse from './DataUniverse';

const terminalLines = [
  "// Welcome to Vivek Gera's Data Engine",
  "booting pipelines...",
  "initializing JVM...",
  "loading microservices...",
  "connecting to Kafka cluster...",
  "spark context ready...",
  "airflow DAGs loaded...",
  "system ready for data processing",
  "",
  "> Hello, I'm Vivek Gera",
  "> Data Engineer & Java Developer",
  "> Building scalable data platforms",
  "> Creating robust backend systems",
  "",
  "> Ready to transform your data infrastructure"
];

// Utility function to check WebGL support
function isWebGLAvailable() {
  try {
    const canvas = document.createElement('canvas');
    return !!window.WebGLRenderingContext && (
      !!canvas.getContext('webgl') || !!canvas.getContext('experimental-webgl')
    );
  } catch (e) {
    return false;
  }
}

const HeroSection: React.FC = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const typingTimeout = useRef<NodeJS.Timeout | null>(null);
  const lineTimeout = useRef<NodeJS.Timeout | null>(null);
  const terminalRef = useRef<HTMLDivElement | null>(null);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    setWebglSupported(isWebGLAvailable());
  }, []);

  // Typing effect
  const typeLine = useCallback((line: string, charIndex: number) => {
    if (charIndex <= line.length) {
      setDisplayedText(line.substring(0, charIndex));
      typingTimeout.current = setTimeout(() => typeLine(line, charIndex + 1), 120);
    } else {
      setIsTyping(false);
      lineTimeout.current = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
        setIsTyping(true);
      }, 800);
    }
  }, []);

  useEffect(() => {
    setDisplayedText('');
    if (currentLine < terminalLines.length) {
      typeLine(terminalLines[currentLine], 0);
    }
    return () => {
      if (typingTimeout.current) clearTimeout(typingTimeout.current);
      if (lineTimeout.current) clearTimeout(lineTimeout.current);
    };
  }, [currentLine, typeLine]);

  // Restart animation on tab focus
  useEffect(() => {
    function handleVisibility() {
      if (document.visibilityState === 'visible') {
        setCurrentLine(0);
        setDisplayedText('');
        setIsTyping(true);
      }
    }
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  // Auto-scroll terminal to bottom on new line or character
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [currentLine, displayedText]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Three.js Background */}
      <div className="absolute inset-0 z-0">
        {webglSupported ? (
          <Canvas camera={{ position: [0, 0, 5] }}>
            <OrbitControls enableZoom={false} enablePan={false} />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <DataUniverse />
          </Canvas>
        ) : (
          <div className="flex items-center justify-center h-full text-red-500 font-mono bg-black bg-opacity-80">
            WebGL is not supported on this device/browser.
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Terminal Interface */}
          <div className="bg-terminal-dark border border-terminal-green rounded-lg p-8 mb-8 glow-effect">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-error-red rounded-full"></div>
                <div className="w-3 h-3 bg-warning-yellow rounded-full"></div>
                <div className="w-3 h-3 bg-success-green rounded-full"></div>
              </div>
              <span className="ml-4 text-terminal-green text-sm">vivek@dataverse:~</span>
            </div>
            <div ref={terminalRef} className="font-mono text-terminal-green text-left h-24 overflow-y-auto custom-scrollbar">
              {/* Terminal content below */}
              <div>
                {terminalLines.slice(0, currentLine).map((line, index) => (
                  <div key={index} className="mb-1">{line}</div>
                ))}
                {currentLine < terminalLines.length && (
                  <div style={{ display: 'inline' }}>
                    {displayedText}<span className="cursor-blink"></span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-terminal-green">
            Vivek Gera
          </h1>
          <motion.p
            className="text-2xl md:text-3xl text-terminal-green mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.8 }}
          >
            Data Engineer & Java Developer
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.8 }}
          >
            <motion.button
              className="bg-terminal-green text-terminal-dark px-8 py-3 rounded-lg font-bold hover:bg-terminal-green/80 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </motion.button>
            <motion.button
              className="border border-terminal-green text-terminal-green px-8 py-3 rounded-lg font-bold hover:bg-terminal-green hover:text-terminal-dark transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-terminal-green rounded-full flex justify-center">
          <div className="w-1 h-3 bg-terminal-green rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection; 