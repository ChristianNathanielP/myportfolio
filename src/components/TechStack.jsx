import { useState } from 'react';
import { motion } from 'framer-motion';
import { technologies } from '../data';

export default function TechStack() {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <section id='TechStack' className="bg-neutral-900 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5 [background-image:linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Tech Stack
          </h2>
          <div className="w-16 h-0.5 bg-amber-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3 cursor-pointer">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-lg aspect-square bg-neutral-800 border border-neutral-700 transition-all duration-300 hover:border-amber-400/30 hover:shadow-md hover:shadow-amber-500/10"
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
            >
              <div className="absolute inset-0 p-2 flex flex-col items-center justify-center">
                <img src={tech.icon} className={`w-14 text-xl transition-all duration-200 ${hoveredItem === index ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`} style={{ color: tech.color }}>
                </img>
                {/* <div className={`text-xs font-medium text-white mt-1 transition-all duration-200 ${hoveredItem === index ? 'opacity-0' : 'opacity-100'}`} >
                  {tech.name}
                </div> */}
              </div>

              <a href={tech.doc} target='_blank' className={`absolute inset-0 bg-black/80 flex items-center justify-center transition-all duration-200 ${hoveredItem === index ? 'opacity-100' : 'opacity-0'}`}>
                <span 
                  className="text-xs font-medium px-2 py-1 rounded"
                  style={{ backgroundColor: tech.color }}
                >
                  {tech.name}
                </span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}