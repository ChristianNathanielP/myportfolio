import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Project.jsx'
import Experience from './components/Experience.jsx'
import TechStack from './components/TechStack.jsx'
import Footer from './components/Footer.jsx'
import { Analytics } from '@vercel/analytics/react';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="container mx-auto w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <TechStack />
      <Footer />
      {import.meta.env.PROD && <Analytics />}
    </div>
  </StrictMode>,
)
