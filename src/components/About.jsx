import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="min-h-screen py-20 px-4 sm:px-6 md:px-12 border-b border-white/5 flex flex-col justify-center items-center relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 15% 20%, rgba(247,80,35,0.08) 0%, transparent 45%),
          radial-gradient(circle at 85% 75%, rgba(247,80,35,0.06) 0%, transparent 50%),
          linear-gradient(160deg, #1c2235 0%, #191e2f 45%, #151a29 100%)
        `,
      }}
    >
      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none select-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Extra ambient glow blobs for depth */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[130px] pointer-events-none select-none" />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-primary/10 rounded-full blur-[130px] pointer-events-none select-none" />

      {/* Fine vignette to focus attention toward center */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 40%, rgba(10,12,20,0.35) 100%)',
        }}
      />

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Column: Image with Blobs and Badges */}
        <div className="relative flex justify-center items-center order-2 lg:order-1 mt-16 lg:mt-0">

          {/* Background glow */}
          <div className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] bg-primary/20 rounded-full blur-[90px] pointer-events-none select-none" />

          {/* Dotted grid decoration */}
          <svg
            className="absolute -top-8 -left-4 sm:-top-10 sm:-left-10 w-24 h-24 sm:w-28 sm:h-28 text-primary/70 pointer-events-none select-none z-20"
            viewBox="0 0 100 100"
            fill="currentColor"
          >
            {Array.from({ length: 5 }).map((_, row) =>
              Array.from({ length: 5 }).map((_, col) => (
                <circle key={`${row}-${col}`} cx={col * 22 + 6} cy={row * 22 + 6} r="3" />
              ))
            )}
          </svg>

          {/* Decorative Squiggle Loop SVG */}
          <svg
            className="absolute -bottom-6 -right-2 sm:right-6 w-20 h-20 sm:w-24 sm:h-24 text-primary opacity-50 pointer-events-none select-none hidden sm:block z-20"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          >
            <path d="M50,15 C25,10 15,35 30,55 C45,75 75,65 70,40 C65,15 40,25 35,45 C30,65 50,85 70,80" />
          </svg>

          {/* Image and Badge Wrapper */}
          <div className="relative w-[270px] sm:w-[410px] md:w-[460px] z-10">
            {/* Floating Tech Neural Nodes - Top Right */}
            <svg
              className="absolute -top-6 -right-6 sm:-top-12 sm:-right-12 w-16 h-16 sm:w-28 sm:h-28 pointer-events-none select-none z-20 animate-natural-drift"
              viewBox="0 0 100 100"
            >
              <line x1="20" y1="80" x2="50" y2="40" stroke="#f75023" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="3 3" />
              <line x1="50" y1="40" x2="85" y2="60" stroke="#f75023" strokeWidth="1.5" strokeOpacity="0.4" />
              <line x1="50" y1="40" x2="65" y2="15" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.3" />
              <line x1="20" y1="80" x2="65" y2="15" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.15" />
              
              <circle cx="20" cy="80" r="4.5" fill="#f75023" />
              <circle cx="50" cy="40" r="6" fill="#ffffff" />
              <circle cx="85" cy="60" r="3.5" fill="#f75023" />
              <circle cx="65" cy="15" r="4.5" fill="#ffffff" />
              
              <circle cx="50" cy="40" r="11" fill="#ffffff" fillOpacity="0.15" />
              <circle cx="20" cy="80" r="9" fill="#f75023" fillOpacity="0.15" />
            </svg>

            {/* Floating Tech Neural Nodes - Bottom Left */}
            <svg
              className="absolute -bottom-6 -left-6 sm:-bottom-10 sm:-left-12 w-20 h-20 sm:w-32 sm:h-32 pointer-events-none select-none z-20 animate-float-robot"
              viewBox="0 0 100 100"
            >
              <line x1="15" y1="30" x2="45" y2="70" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.3" />
              <line x1="45" y1="70" x2="85" y2="40" stroke="#f75023" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="3 3" />
              <line x1="15" y1="30" x2="85" y2="40" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.15" />
              <line x1="45" y1="70" x2="55" y2="90" stroke="#f75023" strokeWidth="1.5" strokeOpacity="0.4" />
              
              <circle cx="15" cy="30" r="3.5" fill="#ffffff" />
              <circle cx="45" cy="70" r="6.5" fill="#f75023" />
              <circle cx="85" cy="40" r="4.5" fill="#ffffff" />
              <circle cx="55" cy="90" r="3.5" fill="#f75023" />
              
              <circle cx="45" cy="70" r="13" fill="#f75023" fillOpacity="0.15" />
            </svg>

            {/* Gradient ring frame */}
            <div className="relative p-[5px] sm:p-[6px] rounded-[2rem] bg-gradient-to-br from-primary via-primary/40 to-transparent shadow-2xl">
              {/* About Image Container */}
              <div className="relative w-full h-[350px] sm:h-[490px] md:h-[560px] rounded-[1.7rem] overflow-hidden bg-[#141926]">
                <img
                  src="/muneeb.png"
                  alt="Muneeb Farid - AI Engineer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                />
                {/* Bottom fade overlay for depth */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#141926]/70 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Floating Badge (Right) - Stacked Vertically with matching Gradient Border */}
            <div className="absolute right-[-10px] sm:right-[-30px] bottom-[-5%] sm:bottom-[-7%] p-[2.5px] sm:p-[3px] rounded-2xl bg-gradient-to-br from-primary via-primary/40 to-transparent shadow-[0_10px_30px_rgba(247,80,35,0.2)] z-20 hover:scale-105 hover:-translate-y-1 transition-transform duration-300">
              <div className="bg-[#1c2235] backdrop-blur-md rounded-xl p-3 sm:p-5 flex flex-col items-center justify-center text-center select-none">
                <span className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-primary to-[#ff7854] bg-clip-text text-transparent leading-none mb-1.5 sm:mb-2">3+</span>
                <div className="text-[9px] sm:text-xs font-bold text-white max-w-[85px] sm:max-w-[95px] leading-tight uppercase tracking-wider">
                  {t('aboutYearsExp')}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="flex flex-col items-start text-start order-1 lg:order-2">
          <span className="text-primary font-bold text-lg md:text-xl tracking-wider mb-2 block font-sans uppercase">
            {t('aboutHeading')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6 font-sans">
            {t('aboutSubHeading')}
          </h2>
          <div className="w-16 h-1 bg-primary mb-6 rounded-full" />
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
            {t('aboutContent')}
          </p>

          {/* Contact Details Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-y-5 gap-x-8 bg-[#1f263e]/40 border border-white/5 rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 w-full max-w-xl mt-4">
            <div>
              <span className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-wider block mb-0.5 sm:mb-1 font-semibold">{t('aboutNameLabel')}</span>
              <span className="text-white font-semibold text-sm sm:text-base">{t('aboutName')}</span>
            </div>
            <div>
              <span className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-wider block mb-0.5 sm:mb-1 font-semibold">{t('aboutPhoneLabel')}</span>
              <a href="https://wa.me/923297325390" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary font-sans font-extrabold text-sm sm:text-base transition-colors">+92 329 7325390</a>
            </div>
            <div>
              <span className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-wider block mb-0.5 sm:mb-1 font-semibold">{t('aboutEmailLabel')}</span>
              <a href="mailto:fareedmuneeb98@gmail.com" className="text-white hover:text-primary font-sans font-semibold text-[13px] sm:text-base transition-colors break-all">fareedmuneeb98@gmail.com</a>
            </div>
            <div>
              <span className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-wider block mb-0.5 sm:mb-1 font-semibold">{t('aboutSpecialtyLabel')}</span>
              <span className="text-white font-extrabold text-sm sm:text-base">{t('aboutSpecialty')}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 sm:gap-4 w-full">
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center px-6 py-2.5 sm:px-8 sm:py-3 font-sans text-sm sm:text-[17px] font-bold text-white rounded-full overflow-hidden transition-all duration-300 bg-primary hover:shadow-[0_0_15px_rgba(247,80,35,0.4)] group no-underline cursor-pointer"
            >
              <span className="absolute inset-0 w-full h-full bg-[#e04318] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0" />
              <span className="relative z-10">{t('aboutReadMore')}</span>
            </a>

            <a
              href="/muneebfarid.pdf"
              download="Muneeb_Farid_CV.pdf"
              className="relative inline-flex items-center justify-center px-6 py-2.5 sm:px-8 sm:py-3 font-sans text-sm sm:text-[17px] font-bold text-white border-2 border-primary rounded-full overflow-hidden transition-all duration-300 hover:text-white hover:shadow-[0_0_15px_rgba(247,80,35,0.4)] group no-underline cursor-pointer"
            >
              <span className="absolute inset-0 w-full h-full bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0" />
              <span className="relative z-10">{t('aboutDownloadCV')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;