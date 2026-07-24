import React, { useEffect, useState } from 'react';

const Preloader = ({ onFinish }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress bar over 2.2s
    const progressInterval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return p + 2;
      });
    }, 44);

    // Start exit fade slightly before finishing
    const exitTimer = setTimeout(() => setIsExiting(true), 2200);
    // Actually unmount / notify parent after fade completes
    const finishTimer = setTimeout(() => onFinish(), 2700);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  const name = 'MUNEEB';

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0d0f1a] overflow-hidden transition-opacity duration-500 ${isExiting ? 'opacity-0' : 'opacity-100'
        }`}
    >
      {/* Ambient glow orbs */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-indigo-600/20 blur-[120px] -top-40 -left-40 animate-orb-drift-1" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-fuchsia-600/10 blur-[100px] -bottom-32 -right-24 animate-orb-drift-2" />

      {/* Rotating faint ring */}
      <div className="absolute w-[340px] h-[340px] rounded-full border border-white/5 animate-spin-slow" />
      <div className="absolute w-[260px] h-[260px] rounded-full border border-white/[0.07] animate-spin-slow-reverse" />

      <div
        className={`relative flex flex-col items-center transition-all duration-700 ease-out ${isExiting ? 'scale-95 opacity-0' : 'scale-100 opacity-100 animate-logo-in'
          }`}
      >
        <div className="flex items-center gap-4 mb-5">
          <span className="text-4xl md:text-6xl font-light text-white tracking-widest border-r border-white/20 pr-5 drop-shadow-[0_0_18px_rgba(255,255,255,0.25)]">
            MF
          </span>
          <div className="flex flex-col justify-center">
            <span className="flex text-2xl md:text-3xl font-bold text-white tracking-[0.1em] leading-tight">
              {name.split('').map((letter, i) => (
                <span
                  key={i}
                  className="inline-block animate-letter-in"
                  style={{ animationDelay: `${0.3 + i * 0.06}s` }}
                >
                  {letter}
                </span>
              ))}
            </span>
            <span className="text-xs md:text-sm text-gray-400 font-medium tracking-[0.2em] mt-1 animate-fade-in-delayed">
              FARID
            </span>
          </div>
        </div>

        {/* Field / role tagline */}
        <div className="flex items-center gap-3 mb-2 animate-fade-in-delayed" style={{ animationDelay: '1.1s' }}>
          <span className="h-px w-6 bg-gradient-to-r from-transparent to-white/30" />
          <span className="text-[11px] md:text-xs text-indigo-300 font-semibold tracking-[0.35em] uppercase">
            AI Engineer
          </span>
          <span className="h-px w-6 bg-gradient-to-l from-transparent to-white/30" />
        </div>

        {/* Loading dots */}
        <div className="flex space-x-3 mt-6">
          <div className="w-3 h-3 rounded-full bg-white animate-dot-bounce" style={{ animationDelay: '0s' }} />
          <div className="w-3 h-3 rounded-full bg-white animate-dot-bounce" style={{ animationDelay: '0.15s' }} />
          <div className="w-3 h-3 rounded-full bg-white animate-dot-bounce" style={{ animationDelay: '0.3s' }} />
        </div>

        {/* Progress bar */}
        <div className="mt-8 w-40 h-[3px] bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-400 via-white to-fuchsia-400 rounded-full transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <style>{`
        @keyframes orb-drift-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(40px, 30px) scale(1.15); }
        }
        @keyframes orb-drift-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, -25px) scale(1.1); }
        }
        .animate-orb-drift-1 { animation: orb-drift-1 6s ease-in-out infinite; }
        .animate-orb-drift-2 { animation: orb-drift-2 7s ease-in-out infinite; }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 14s linear infinite; }
        .animate-spin-slow-reverse { animation: spin-slow 10s linear infinite reverse; }

        @keyframes logo-in {
          0% { opacity: 0; transform: translateY(14px) scale(0.96); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-logo-in { animation: logo-in 0.7s ease-out both; }

        @keyframes letter-in {
          0% { opacity: 0; transform: translateY(10px); filter: blur(4px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .animate-letter-in { animation: letter-in 0.5s ease-out both; }

        @keyframes fade-in-delayed {
          0% { opacity: 0; transform: translateY(6px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-delayed { animation: fade-in-delayed 0.6s ease-out 0.9s both; }

        @keyframes dot-bounce {
          0%, 80%, 100% { transform: translateY(0) scale(0.85); opacity: 0.5; }
          40% { transform: translateY(-8px) scale(1); opacity: 1; }
        }
        .animate-dot-bounce { animation: dot-bounce 1s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Preloader;