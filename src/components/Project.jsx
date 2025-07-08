  import { useState } from 'react';
  import { projects } from '../data';

  export default function Projects() {
    const [hoveredItem, setHoveredItem] = useState(null);

    return (
      <section id="Project" className="bg-neutral-900 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5 [background-image:linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Floating light spots */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-amber-500/10 blur-[80px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-blue-500/10 blur-[80px]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My Latest Project
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
            {projects.map((project) => (
              <div
                key={project.id}
                className="relative group overflow-hidden rounded-2xl aspect-[4/3] bg-neutral-800 border border-neutral-700 transition-all duration-500 hover:border-amber-400/30 hover:shadow-xl hover:shadow-amber-500/10"
                onMouseEnter={() => setHoveredItem(project.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Project content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  {/* Image */}
                  <div className={`w-full h-40 overflow-hidden rounded-lg mb-4 transition-all duration-500 ${hoveredItem === project.id ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Title */}
                  <div className={`transition-all duration-500 ${hoveredItem === project.id ? 'opacity-0' : 'opacity-100'}`}>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  </div>

                  {/* Tech Stack */}
                  <div className={`flex flex-wrap gap-2 mt-2 ${hoveredItem === project.id ? 'opacity-0' : 'opacity-100'} transition-all duration-500`}>
                    {project.stack.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 text-xs bg-white/10 text-white rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Category and Year */}
                  <div className={`flex items-center justify-between text-sm text-neutral-400 mt-4 transition-all duration-300 ${hoveredItem === project.id ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                    <p>{project.category}</p>
                    <span>{project.year}</span>
                  </div>
                </div>


                {/* Hover overlay */}
                <div className={`absolute inset-0 z-20 bg-gradient-to-b from-black/70 via-black/80 to-black/90 flex items-center justify-center transition-all duration-500 ${hoveredItem === project.id ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="text-center p-6">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-black rounded-full text-lg font-medium transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
                    >
                      View Project
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Shine effect */}
                <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(245,158,11,0.03)_100%)] transition-opacity duration-500 ${hoveredItem === project.id ? 'opacity-100' : 'opacity-0'}`}></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a 
            href="https://github.com/ChristianNathanielP"
            target='_blank'
            rel="noopener noreferrer"
            >
              <button className="px-8 py-3 border cursor-pointer border-amber-500 text-amber-500 rounded-full hover:bg-amber-500/10 transition-all duration-300 flex items-center gap-2 mx-auto">
                View All Projects
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </section>
    );
  }