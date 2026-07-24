import React, { useState, useEffect } from 'react';

const Robot3D = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slides = [
    {
      id: 1,
      image: '/rebot1.png',
      glow: 'shadow-[0_0_60px_rgba(0,212,255,0.22)] border-[#00d4ff]/25',
      textColor: 'text-[#00d4ff]',
      accentBg: 'bg-[#00d4ff]/15',
      accentHex: '#00d4ff',
      label: 'AI Core v1.0',
      code: 'SN-0041'
    },
    {
      id: 2,
      image: '/rebot2.png',
      glow: 'shadow-[0_0_60px_rgba(168,85,247,0.22)] border-[#a855f7]/25',
      textColor: 'text-[#a855f7]',
      accentBg: 'bg-[#a855f7]/15',
      accentHex: '#a855f7',
      label: 'Robotic Assistant',
      code: 'SN-0072'
    },
    {
      id: 3,
      image: '/rebot3.png',
      glow: 'shadow-[0_0_60px_rgba(247,80,35,0.22)] border-[#f75023]/25',
      textColor: 'text-primary',
      accentBg: 'bg-primary/15',
      accentHex: '#f75023',
      label: 'Advanced Android',
      code: 'SN-0103'
    },
    {
      id: 4,
      image: '/rebot4.png',
      glow: 'shadow-[0_0_60px_rgba(16,185,129,0.22)] border-[#10b981]/25',
      textColor: 'text-[#10b981]',
      accentBg: 'bg-[#10b981]/15',
      accentHex: '#10b981',
      label: 'AI Automation v2',
      code: 'SN-0158'
    }
  ];

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isHovered, slides.length]);

  const active = slides[activeIdx];

  const CornerBracket = ({ position, color }) => {
    const posClasses = {
      tl: 'top-3 left-3 border-t-2 border-l-2 rounded-tl-xl',
      tr: 'top-3 right-3 border-t-2 border-r-2 rounded-tr-xl',
      bl: 'bottom-3 left-3 border-b-2 border-l-2 rounded-bl-xl',
      br: 'bottom-3 right-3 border-b-2 border-r-2 rounded-br-xl'
    };
    return (
      <div
        className={`absolute w-6 h-6 transition-all duration-700 ease-in-out pointer-events-none z-20 ${posClasses[position]}`}
        style={{
          borderColor: color,
          filter: `drop-shadow(0 0 6px ${color}99)`
        }}
      />
    );
  };

  const getCardStyle = (idx) => {
    const diff = (idx - activeIdx + slides.length) % slides.length;
    
    if (diff === 0) {
      return { 
        transform: 'translateX(0px) translateY(0px) scale(1)', 
        zIndex: 40, 
        opacity: 1 
      };
    } else if (diff === 1) {
      return { 
        transform: 'translateX(-35px) translateY(-25px) scale(0.95)', 
        zIndex: 30, 
        opacity: 0.7 
      };
    } else if (diff === 2) {
      return { 
        transform: 'translateX(-70px) translateY(-50px) scale(0.9)', 
        zIndex: 20, 
        opacity: 0.4 
      };
    } else {
      return { 
        transform: 'translateX(-105px) translateY(-75px) scale(0.85)', 
        zIndex: 10, 
        opacity: 0.2 
      };
    }
  };

  return (
    <div
      className="relative w-full h-full min-h-[560px] flex flex-col items-center justify-center py-6 px-4 select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-[100px] pointer-events-none transition-all duration-1000 ease-in-out opacity-25"
        style={{ backgroundColor: active.accentHex }}
      />

      <div className="relative w-full max-w-[400px] aspect-[4/5] flex items-center justify-center ml-8 lg:ml-16">
        {slides.map((slide, idx) => {
          const isActive = idx === activeIdx;
          const styleProps = getCardStyle(idx);
          
          return (
            <div
              key={slide.id}
              onClick={() => setActiveIdx(idx)}
              className={`absolute top-0 left-0 w-full h-full rounded-[32px] backdrop-blur-xl bg-[#1c2235]/60 border cursor-pointer flex flex-col items-center justify-between p-4 overflow-hidden ${isActive ? slide.glow : 'border-white/10 shadow-lg'}`}
              style={{
                ...styleProps,
                transition: 'transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), z-index 0s'
              }}
            >
              <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

              <CornerBracket position="tl" color={slide.accentHex} />
              <CornerBracket position="tr" color={slide.accentHex} />
              <CornerBracket position="bl" color={slide.accentHex} />
              <CornerBracket position="br" color={slide.accentHex} />

              <div
                className={`absolute top-5 left-5 w-1.5 h-1.5 rounded-full z-20 transition-opacity duration-700 ${isActive ? 'animate-pulse opacity-100' : 'opacity-50'}`}
                style={{ backgroundColor: slide.accentHex, boxShadow: `0 0 8px ${slide.accentHex}` }}
              />

              <span
                className="absolute bottom-4 right-6 text-[9px] font-mono tracking-widest z-20 transition-colors duration-700"
                style={{ color: slide.accentHex }}
              >
                {slide.code}
              </span>

              <div className="w-full flex items-center justify-between relative z-10 pointer-events-none p-2">
                <span className="text-[10px] font-mono tracking-widest text-gray-400 pl-6">STATUS: ONLINE</span>
                <span className={`text-[10px] font-mono font-bold tracking-widest uppercase transition-colors duration-500 ${slide.textColor} pr-6`}>
                  {slide.label}
                </span>
              </div>

              <div className="relative w-full h-[78%] flex items-center justify-center my-auto">
                <img
                  src={slide.image}
                  alt={slide.label}
                  className={`w-[96%] h-[96%] object-contain select-none pointer-events-none transition-transform duration-700 ${isActive ? 'animate-float-robot scale-100 opacity-100' : 'scale-95 opacity-80'}`}
                  style={{
                    filter: isActive ? 'drop-shadow(0 15px 35px rgba(0,0,0,0.45))' : 'drop-shadow(0 0px 0px rgba(0,0,0,0))',
                    transition: 'transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.8s ease-out'
                  }}
                />
              </div>

              <div className="w-full flex items-center justify-between relative z-10 pointer-events-none p-2">
                <span className="text-[10px] font-mono tracking-widest text-gray-500 pl-6">REV: 2050</span>
                <span className="text-[10px] font-mono tracking-widest text-gray-500 pr-16">
                  0{idx + 1} / 0{slides.length}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-center gap-3 mt-10 relative z-20">
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => setActiveIdx(idx)}
            className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${activeIdx === idx
              ? `w-8 ${slide.accentBg} border border-current ${slide.textColor}`
              : 'w-2.5 bg-white/10 hover:bg-white/20 border border-transparent'
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Robot3D;