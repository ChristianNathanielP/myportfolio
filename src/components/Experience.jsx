import { motion } from 'framer-motion';
import { useState } from 'react';
import { experiences } from '../data';

const ExperienceItem = ({ experience, index, activeIndex, setActiveIndex }) => {
  const isActive = activeIndex === index;
  
  return (
    <motion.div 
      className={`relative pl-10 pb-10 border-l-2 ${isActive ? 'border-orange-500' : 'border-gray-200'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setActiveIndex(index)}
      onClick={() => setActiveIndex(index)}
    >
      {/* Year marker */}
      <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 ${isActive ? 'bg-orange-500 border-orange-500' : 'bg-white border-gray-300'}`}></div>
      
      {/* Content */}
      <motion.div 
        className={`p-6 rounded-xl ${isActive ? 'bg-orange-50 shadow-md' : 'bg-gray-50'}`}
        animate={{
          scale: isActive ? 1.03 : 1,
          transition: { duration: 0.3 }
        }}
      >
        {experience.icon && (
          <div className="absolute right-6 top-6 w-10 h-10 flex items-center justify-center">
            <img 
              src={experience.icon} 
              alt={experience.company} 
              className="w-full h-full object-contain"
            />
          </div>
        )}
        
        <h3 className="text-lg font-bold text-gray-900">{experience.role}</h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-orange-500 font-medium">{experience.company}</span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-500">{experience.year}</span>
        </div>
        <p className="mt-3 text-gray-600">{experience.description}</p>
        
        {/* Tags */}
        <motion.div 
          className="flex flex-wrap gap-2 mt-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isActive ? 1 : 0,
            height: isActive ? 'auto' : 0
          }}
          transition={{ duration: 0.2 }}
        >
          {isActive && experience.tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 bg-white text-orange-500 text-xs font-medium rounded-full border border-orange-200">
              {tag}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id='Experience' className="bg-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Journey</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My career path through technology
          </p>
        </motion.div>

        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-transparent opacity-20"></div>
          
          {/* Timeline */}
          <div className="space-y-2">
            {experiences.map((experience, index) => (
              <ExperienceItem 
                key={index}
                experience={experience}
                index={index}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>
        </div>

        {/* Floating decoration */}
        <motion.div
          className="absolute right-0 top-1/2 w-40 h-40 rounded-full bg-orange-100 blur-[80px] opacity-40 -z-10"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
}