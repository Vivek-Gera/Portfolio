import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Message sent successfully!');
    }, 2000);
  };

  const contactMethods = [
    {
      name: 'Email',
      value: 'iam.vivekgera@gmail.com',
      icon: '📧',
      command: 'SendMessage("iam.vivekgera@gmail.com", "Let\'s collaborate")'
    },
    {
      name: 'YouTube',
      value: 'youtube.com/@CodeWithVivekGera',
      icon: '📺',
      command: 'Subscribe("youtube.com/@CodeWithVivekGera")'
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/codewithvivek',
      icon: '💼',
      command: 'Connect("linkedin.com/in/codewithvivek")'
    },
    {
      name: 'Instagram',
      value: 'instagram.com/therealvivekgera',
      icon: '📸',
      command: 'Follow("instagram.com/therealvivekgera")'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-terminal-green">
            System Interface
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate on your next data engineering project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-card-bg border border-border-gray rounded-lg p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-terminal-green mb-2">
                SendMessage()
              </h3>
              <p className="text-gray-300">Fill out the form below to initiate collaboration</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-mono text-gray-400 mb-2">
                  name: string
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-dark-bg border border-border-gray rounded-lg text-white placeholder-gray-400 focus:border-terminal-green focus:outline-none font-mono"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-gray-400 mb-2">
                  email: string
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-dark-bg border border-border-gray rounded-lg text-white placeholder-gray-400 focus:border-terminal-green focus:outline-none font-mono"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-gray-400 mb-2">
                  subject: string
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-dark-bg border border-border-gray rounded-lg text-white placeholder-gray-400 focus:border-terminal-green focus:outline-none font-mono"
                  placeholder="Project inquiry, collaboration, etc."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-gray-400 mb-2">
                  message: string
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-dark-bg border border-border-gray rounded-lg text-white placeholder-gray-400 focus:border-terminal-green focus:outline-none font-mono resize-none"
                  placeholder="Describe your project or collaboration idea..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-terminal-green text-terminal-dark py-3 rounded-lg font-bold font-mono hover:bg-terminal-green/80 transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'SendMessage()'}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Methods & Animated Envelope */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Contact Methods */}
            <div className="bg-card-bg border border-border-gray rounded-lg p-6">
              <h3 className="text-xl font-bold text-terminal-green mb-6">
                Contact Methods
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.name}
                    className="flex items-center justify-between p-4 bg-dark-bg border border-border-gray rounded-lg hover:border-terminal-green transition-colors duration-200"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{method.icon}</span>
                      <div>
                        <p className="font-bold text-white">{method.name}</p>
                        <p className="text-sm text-gray-400 font-mono">{method.value}</p>
                      </div>
                    </div>
                    <div className="text-xs text-terminal-green font-mono opacity-60">
                      {method.command}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Animated Envelope */}
            <div className="bg-card-bg border border-border-gray rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-terminal-green mb-6">
                3D Message Envelope
              </h3>
              
              <motion.div
                className="relative w-32 h-20 mx-auto mb-4"
                whileHover={{ scale: 1.1 }}
                onClick={() => setIsEnvelopeOpen(!isEnvelopeOpen)}
              >
                {/* Envelope Base */}
                <div className="absolute inset-0 bg-gradient-to-br from-data-blue to-api-purple rounded-lg"></div>
                
                {/* Envelope Flap */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-br from-pipeline-orange to-terminal-green rounded-t-lg origin-bottom"
                  animate={{ rotateX: isEnvelopeOpen ? -180 : 0 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Message Inside */}
                <motion.div
                  className="absolute inset-2 bg-white rounded text-xs text-gray-800 flex items-center justify-center font-mono"
                  animate={{ 
                    y: isEnvelopeOpen ? -10 : 0,
                    opacity: isEnvelopeOpen ? 1 : 0.8
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {isEnvelopeOpen ? 'Message Sent!' : 'Click to Open'}
                </motion.div>
              </motion.div>
              
              <p className="text-sm text-gray-400 font-mono">
                Click the envelope to simulate message delivery
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card-bg border border-border-gray rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-terminal-green mb-1">24h</div>
                <div className="text-xs text-gray-400">Response Time</div>
              </div>
              <div className="bg-card-bg border border-border-gray rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-data-blue mb-1">100%</div>
                <div className="text-xs text-gray-400">Success Rate</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 font-mono">
            Ready to build the next generation of data platforms together?
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <span className="text-terminal-green font-mono">// Let's connect</span>
            <span className="text-gray-600">|</span>
            <span className="text-data-blue font-mono">// Let's build</span>
            <span className="text-gray-600">|</span>
            <span className="text-pipeline-orange font-mono">// Let's scale</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection; 