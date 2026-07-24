import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaArrowRight } from 'react-icons/fa';

const projects = [
  {
    tPrefix: "p1_",
    title: "Report News Agent",
    subtitle: "AI-powered News Reporting Agent",
    description: "An AI-powered news reporting agent that automatically fetches, summarizes, and delivers daily news updates using LangChain and FastAPI.",
    tags: ["Python", "FastAPI", "LangChain", "AI Agents"],
    image: "/chatbot-project.png",
    link: "https://github.com/itxmuneebfarid/report_news_agent_alert"
  },
  {
    tPrefix: "p2_",
    title: "CLI Coder Agent",
    subtitle: "Terminal-based AI Assistant",
    description: "A terminal-based AI assistant designed for developers who want quick, keyboard-first coding help without leaving the command line.",
    tags: ["Python", "CLI", "AI Assistant"],
    image: "/docreader-project.png",
    link: "https://github.com/itxmuneebfarid/CLI-coder-base-agent"
  },
  {
    tPrefix: "p3_",
    title: "Audio Podcast",
    subtitle: "PDF to Audio AI Tool",
    description: "Transform your PDFs into engaging audio with our AI-powered podcast tool. Perfect for students, researchers, and busy professionals.",
    tags: ["Python", "Audio AI", "PDF Processing"],
    image: "/voicesync-project.png",
    link: "https://github.com/itxmuneebfarid/Audio-podcast"
  },
  {
    tPrefix: "p4_",
    title: "Traffic Analysis",
    subtitle: "Real-Time Traffic Monitoring",
    description: "A smart system that monitors live traffic data to detect congestion, optimize flow, and improve overall transportation efficiency.",
    tags: ["C++", "Traffic Analysis", "Optimization"],
    image: "/visiontrace-project.png",
    link: "https://github.com/itxmuneebfarid/Real-time-Traffic-Analysis"
  },
  {
    tPrefix: "p5_",
    title: "Trading Insight",
    subtitle: "Data Analysis & Insights",
    description: "A comprehensive data analysis tool built with Jupyter Notebook to extract actionable insights for trading strategies.",
    tags: ["Jupyter Notebook", "Data Analysis", "Trading"],
    image: "/ai-project-banner.png",
    link: "https://github.com/itxmuneebfarid/Trading-insight"
  },
  {
    tPrefix: "p6_",
    title: "District Guessing Game",
    subtitle: "Python GUI Application",
    description: "An interactive Python GUI guessing game that challenges users to name districts and provides automated reporting on missed entries.",
    tags: ["Python", "GUI", "Game Development"],
    image: "/ecommerce-project.png",
    link: "https://github.com/itxmuneebfarid/District-Guessing-Game"
  }
];

const accentStyle = {
  accent: "#f75023",
  ring: "rgba(247,80,35,0.35)",
  glow: "rgba(247,80,35,0.18)",
};

const Portfolio = () => {
  const { t } = useLanguage();

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    const tiltMaxAngle = 8;
    const rotateX = -(y / (box.height / 2)) * tiltMaxAngle;
    const rotateY = (x / (box.width / 2)) * tiltMaxAngle;
    card.style.transition = 'transform 0.1s ease-out, box-shadow 0.2s ease-out, border-color 0.2s ease-out';
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
    card.style.borderColor = accentStyle.ring;
    card.style.boxShadow = `0 25px 50px -12px rgba(0,0,0,0.25), 0 0 30px 2px ${accentStyle.glow}`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transition = 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.6s ease, border-color 0.6s ease';
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)';
    card.style.borderColor = 'rgba(255,255,255,0.08)';
    card.style.boxShadow = '0 4px 24px rgba(0,0,0,0.35)';
  };

  return (
    <section
      id="portfolio"
      className="min-h-screen py-24 px-4 sm:px-6 md:px-12 border-b border-white/5 flex flex-col justify-center items-center relative overflow-hidden"
      style={{
        backgroundImage: " url('/hero-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none select-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none select-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">

        {/* ── Portfolio Heading ── */}
        <div className="text-center mb-8">
          <span className="text-primary font-medium text-[20px] sm:text-[30px] mb-4 tracking-widest uppercase block font-sans">{t('portfolioTitle')}</span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 font-sans">{t('portfolioSubtitle')}</h2>

          {/* <div className="w-16 h-1 bg-primary mx-auto rounded-full" /> */}
        </div>

        {/* ── AI Engineer Value Banner ── */}
        <div
          className="relative rounded-3xl overflow-hidden mb-16 border border-white/8"
          style={{ background: 'linear-gradient(135deg, #151a29 0%, #1a1f35 60%, #101424 100%)' }}
        >
          {/* Banner glow */}
          <div className="absolute left-0 top-0 w-[300px] h-full bg-primary/5 blur-[80px] pointer-events-none" />
          <div className="absolute right-0 bottom-0 w-[200px] h-[200px] bg-primary/8 rounded-full blur-[60px] pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 px-3 sm:px-12 py-10 sm:py-12">
            {/* Left: text */}
            <div className="flex-1 text-center md:text-left">
              {/* <span
                className="inline-block text-xs font-bold tracking-[0.25em] uppercase mb-4 px-3 py-1 rounded-full border font-sans"
                style={{ color: accentStyle.accent, borderColor: accentStyle.ring, backgroundColor: 'rgba(247,80,35,0.08)' }}
              >
                What We Build Together
              </span> */}
              <h3 className="text-2xl sm:text-4xl font-bold text-white mb-4 ">
                {t('portfolioBannerTitle1')} <span style={{ color: accentStyle.accent }}>{t('portfolioBannerTitle2')}</span>
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
                {t('portfolioBannerDesc')}
              </p>
              <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
                {["LLM Engineering", "AI Automation", "Computer Vision", "Voice AI", "RAG Systems", "Multi-Agent AI"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold px-3 py-1 rounded-full border font-sans"
                    style={{ color: '#94a3b8', borderColor: 'rgba(148,163,184,0.2)', backgroundColor: 'rgba(148,163,184,0.05)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: image */}
            <div className="flex-shrink-0 w-full md:w-[300px] lg:w-[360px]">
              <div className="relative rounded-2xl overflow-hidden border border-white/8 shadow-2xl" style={{ aspectRatio: '16/9' }}>
                <img
                  src="/ai-project-banner.png"
                  alt="AI Engineering Projects"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101424]/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* ── Project Cards Grid (3 per row) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 w-full">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="relative rounded-[1.75rem] overflow-hidden border group flex flex-col h-full cursor-pointer"
              style={{
                backgroundColor: '#1a1f35',
                borderColor: 'rgba(255,255,255,0.08)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.35)',
                transformStyle: 'preserve-3d',
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => window.open(project.link, '_blank')}
            >
              {/* ── Card Image Header (full width, full height) ── */}
              <div className="relative w-full overflow-hidden" style={{ height: '200px' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f35] via-[#1a1f35]/30 to-transparent" />
                {/* Glowing accent border on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ boxShadow: `inset 0 0 30px 4px ${accentStyle.glow}` }}
                />
              </div>

              {/* ── Card Body ── */}
              <div className="pt-4 pb-5 px-5 flex flex-col flex-grow">
                <span className="text-primary font-bold text-xs uppercase tracking-wider mb-1 font-sans">{t(project.tPrefix + 'sub')}</span>
                <h3
                  className="text-white font-bold text-base mb-3 font-heading leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-300"
                  style={{ minHeight: '2.5rem' }}
                >
                  {t(project.tPrefix + 'title')}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-grow font-sans">{t(project.tPrefix + 'desc')}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-semibold border transition-colors font-sans"
                      style={{
                        color: '#94a3b8',
                        backgroundColor: 'rgba(148,163,184,0.07)',
                        borderColor: 'rgba(148,163,184,0.18)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = accentStyle.accent;
                        e.currentTarget.style.borderColor = accentStyle.ring;
                        e.stopPropagation();
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#94a3b8';
                        e.currentTarget.style.borderColor = 'rgba(148,163,184,0.18)';
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project */}
                <div className="inline-flex items-center gap-2 text-slate-300 group-hover:text-primary font-bold text-sm transition-colors mt-auto font-sans">
                  {t('projectView')} <FaArrowRight className="text-xs transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
