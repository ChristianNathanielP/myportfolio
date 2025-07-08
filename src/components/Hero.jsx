import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function HeroSection() {
  const containerRef = useRef(null);

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section 
      id='Hero' 
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-24 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden w-full h-full">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-orange-100 to-orange-200 opacity-40 blur-xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '2s' }}
          className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 opacity-30 blur-xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '4s' }}
          className="absolute top-2/3 left-2/3 w-24 h-24 rounded-full bg-gradient-to-r from-purple-100 to-purple-200 opacity-30 blur-xl"
        />

        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium shadow-sm">
            Portfolio by Christian Nathaniel
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
        >
          <span className="block">Building what I love,</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-500">
            learning as I go
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl font-light text-gray-600 mb-12 max-w-4xl mx-auto"
        >
          I'm a Computer Science student who loves turning ideas into real, usable websites with a focus on clarity and usability. Passionate about frontend development and design, I enjoy every step of the process.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="https://www.linkedin.com/in/christian-nathaniel-3071b0368/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full hover:shadow-lg transition-all duration-300 font-medium"
          >
            Let's Connect
          </a>
          <a 
            href="#Project" 
            className="inline-block px-8 py-4 bg-white text-gray-800 rounded-full hover:shadow-lg transition-all duration-300 font-medium border border-gray-200"
          >
            See My Projects
          </a>
        </motion.div>
      </div>

      {/* Decorative Shapes */}
      <motion.div 
        className="absolute bottom-20 left-10 w-16 h-16 rounded-lg bg-orange-100 opacity-30 rotate-45"
        animate={{
          y: [0, -30, 0],
          rotate: [45, 60, 45]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-20 right-10 w-12 h-12 rounded-full bg-blue-100 opacity-30"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </section>
  );
}
