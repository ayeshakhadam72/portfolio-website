import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FiMessageSquare, FiBookOpen, FiUsers, FiTrendingUp, FiCpu, FiServer, FiPieChart, FiLink, FiCloud } from 'react-icons/fi';
import { FaRocket, FaRobot, FaBolt, FaLaptopCode } from 'react-icons/fa';

const services = [
  {
    title: "AI Chatbots & Virtual Assistants",
    description: "Develop smart conversational AI using OpenAI, Gemini, Claude, or open-source LLMs. I create chatbots that provide natural interactions, automate support, and improve customer engagement.",
    icon: <FiMessageSquare />,
  },
  {
    title: "RAG & Knowledge Base Systems",
    description: "Transform your documents into intelligent assistants using Retrieval-Augmented Generation (RAG). Enable users to search, analyze, and chat with PDFs, manuals, and enterprise knowledge bases.",
    icon: <FiBookOpen />,
  },
  {
    title: "Multi-Agent AI Systems",
    description: "Design AI agents that collaborate to solve complex tasks autonomously. Using LangGraph and CrewAI, I build workflows for research, automation, planning, and decision-making.",
    icon: <FiUsers />,
  },
  {
    title: "AI Trading & Financial Solutions",
    description: "Develop AI-powered trading platforms, market analysis tools, and automated trading agents. Integrate real-time market data, technical indicators, and predictive machine learning models.",
    icon: <FiTrendingUp />,
  },
  {
    title: "Machine Learning Solutions",
    description: "Create custom machine learning models for prediction, classification, recommendation, and anomaly detection. From data preprocessing to deployment, I deliver end-to-end ML solutions.",
    icon: <FiCpu />,
  },
  {
    title: "FastAPI & AI Backend Development",
    description: "Build high-performance backend APIs for AI applications with FastAPI and Python. Secure, scalable, and optimized services that integrate seamlessly with web and mobile applications.",
    icon: <FiServer />,
  },
  {
    title: "Data Analytics & Predictive Intelligence",
    description: "Turn raw data into actionable insights with AI and analytics. Build dashboards, forecasting models, and business intelligence solutions to support smarter decision-making.",
    icon: <FiPieChart />,
  },
  {
    title: "AI Integration & Automation",
    description: "Integrate AI capabilities into existing applications and automate repetitive workflows. Connect LLMs, databases, third-party APIs, and cloud services for seamless business automation.",
    icon: <FiLink />,
  },
  {
    title: "AI Deployment & Cloud Solutions",
    description: "Deploy AI models and applications on AWS, Azure, Google Cloud, or Docker environments. Ensure reliable performance, scalability, and continuous delivery for production-ready AI systems.",
    icon: <FiCloud />,
  },
];

const CARD_BG = 'rgba(255,255,255,0.04)';
const CARD_BORDER = 'rgba(255,255,255,0.09)';

const ServiceCard = ({ service, t }) => {
  const handleEnter = (e) => {
    const card = e.currentTarget;
    // Keep background and border same, just add white shadow and translateY
    card.style.boxShadow = '0 0 35px 5px rgba(255,255,255,0.12)';
    card.style.transform = 'translateY(-4px) scale(1.02)';
  };
  const handleLeave = (e) => {
    const card = e.currentTarget;
    card.style.boxShadow = 'none';
    card.style.transform = 'translateY(0) scale(1)';
  };

  return (
    <div
      className="flex-shrink-0 w-[300px] sm:w-[330px] rounded-2xl border 
        px-3 py-4 sm:px-5 sm:py-5  flex flex-col gap-5 relative group transition-all duration-400 cursor-default"


      style={{
        backgroundColor: CARD_BG,
        borderColor: CARD_BORDER,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        transition: 'background-color 0.35s, border-color 0.35s, box-shadow 0.35s, transform 0.35s',
      }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Icon pill */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
        style={{
          background: 'rgba(247,80,35,0.10)',
          border: '1px solid rgba(247,80,35,0.20)',
        }}
      >
        {service.icon}
      </div>

      {/* Title */}
      <h3 className="text-white font-bold text-[18px] leading-snug font-heading">
        {service.tPrefix ? (t(service.tPrefix + 'title') || service.title) : service.title}
      </h3>

      {/* Description */}
      <p className="text-slate-400 text-[13px] sm:text-[16px] leading-relaxed font-sans flex-grow">
        {service.tPrefix ? (t(service.tPrefix + 'desc') || service.description) : service.description}
      </p>

      {/* Arrow — animates on hover */}
      <button
        onClick={() => {
          const el = document.getElementById('contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        className="w-9 h-9 rounded-full flex items-center justify-center border self-start mt-auto transition-all duration-300 group-hover:border-primary group-hover:text-primary group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:scale-110 cursor-pointer"
        style={{
          borderColor: 'rgba(255,255,255,0.14)',
          color: 'rgba(255,255,255,0.45)',
          background: 'transparent',
        }}
        aria-label="Contact me"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
};

const Service = () => {
  const { t } = useLanguage();
  const trackRef = useRef(null);
  const animRef = useRef(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);

  /* ── Infinite auto-scroll left ── */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const speed = 0.6; // px per frame

    const step = () => {
      if (!pausedRef.current) {
        posRef.current += speed;
        // Reset when first half scrolled completely
        const halfWidth = track.scrollWidth / 2;
        if (posRef.current >= halfWidth) posRef.current = 0;
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(step);
    };

    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const pause = () => { pausedRef.current = true; };
  const resume = () => { pausedRef.current = false; };

  // Duplicate cards for seamless infinite loop
  const doubled = [...services, ...services];

  return (
    <section
      id="service"
      className="relative min-h-screen py-12 sm:py-24 border-b border-white/5 flex flex-col justify-center items-center overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(rgba(16,20,36,0.88), rgba(16,20,36,0.88)), url('/hero-2.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full">

        {/* ── Section Header — max-w-7xl to match other sections ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-6">
          <div className="flex flex-col items-center text-center">
            <span
              className="text-primary font-medium text-[20px] sm:text-[30px] mb-4 tracking-widest uppercase block font-sans  "

            >
              {t('servicesTitle')}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[52px] font-bold mb-4  text-white tracking-tight mb-5 leading-tight">
              My AI Expertise &amp;&nbsp;
              <span style={{ color: '#f75023' }}>Capabilities</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg  leading-relaxed max-w-2xl text-center font-sans">
              I deliver practical, cutting-edge AI solutions that automate workflows, amplify intelligence, and turn complex data into measurable business results.
            </p>
          </div>
        </div>

        {/* ── Scrolling Cards Track (full width intentional for marquee) ── */}
        <div
          className="relative w-full overflow-hidden"
          onMouseEnter={pause}
          onMouseLeave={resume}
        >
          {/* Left white shadow */}
          <div className="absolute left-0 top-0 h-full w-32 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.12), transparent)' }} />
          {/* Right white shadow */}
          <div className="absolute right-0 top-0 h-full w-32 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, rgba(255,255,255,0.12), transparent)' }} />

          <div
            ref={trackRef}
            className="flex gap-6 will-change-transform"
            style={{ width: 'max-content', paddingLeft: '2rem', paddingRight: '2rem', paddingTop: '1rem', paddingBottom: '1.5rem' }}
          >
            {doubled.map((item, idx) => (
              <ServiceCard key={`col1-${idx}`} service={item} t={t} />
            ))}
          </div>
        </div>

        {/* ── Stats Row — max-w-7xl to match other sections ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: <FaRocket />, 
                value: '15+ AI Projects', 
                desc: 'Built AI agents, LLM applications, RAG systems, trading bots, and automation tools.'
              },
              { 
                icon: <FaRobot />, 
                value: '8+ AI Technologies', 
                desc: 'LangChain, LangGraph, FastAPI, Python, OpenAI, Gemini, FAISS, ChromaDB.'
              },
              { 
                icon: <FaBolt />, 
                value: '20+ APIs Integrated', 
                desc: 'Integrated LLM APIs, vector databases, financial APIs, authentication, and cloud services.'
              },
              { 
                icon: <FaLaptopCode />, 
                value: '100K+ Lines of Code', 
                desc: 'Developed scalable AI systems, backend services, and production-ready applications.'
              },
            ].map((stat, idx) => (
              <div 
                key={idx} 
                className="group relative p-6 rounded-2xl border transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_10px_40px_rgba(247,80,35,0.25)] hover:border-primary/50 overflow-hidden cursor-default"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.02)',
                  borderColor: 'rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                {/* Hover animated glow background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#f75023]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                {/* Diagonal sweep animation on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Attractive Icon Box with bounce/rotate on hover */}
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 border transition-all duration-500 group-hover:-rotate-12 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(247,80,35,0.5)] bg-[#f75023]/10 border-[#f75023]/30 text-[#f75023] group-hover:bg-[#f75023] group-hover:text-white">
                    {stat.icon}
                  </div>
                  
                  <h3 className="text-white font-bold text-[18px] leading-snug font-heading mb-3 group-hover:text-[#f75023] transition-colors duration-300">{stat.value}</h3>
                  <p className="text-slate-400 text-[13px] sm:text-[16px] leading-relaxed font-sans">{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
