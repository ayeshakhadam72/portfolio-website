import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaStar } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const BlogComments = () => {
  const { t } = useLanguage();

  const commentsData = [
    {
      name: 'Sarah Jenkins',
      role: t('c1_role') || '@Product_Manager',
      text: t('c1_text') || 'This article was exactly what I needed! The insights on local AI models helped our team reduce cloud costs significantly.',
      avatar: 'S'
    },
    {
      name: 'David Chen',
      role: t('c2_role') || '@Tech_Lead',
      text: t('c2_text') || 'Setting up Open WebUI was a breeze following this guide. Brilliant walkthrough on integrating it with Ollama.',
      avatar: 'D'
    },
    {
      name: 'Elena Rodriguez',
      role: t('c3_role') || '@AI_Researcher',
      text: t('c3_text') || 'Fascinating read on multi-agent systems. The practical examples really bridged the gap between theory and implementation.',
      avatar: 'E'
    },
    {
      name: 'Michael Chang',
      role: t('c4_role') || '@Startup_Founder',
      text: t('c4_text') || 'As a non-technical founder, I appreciate how you broke down complex LLM concepts into actionable business strategies.',
      avatar: 'M'
    },
    {
      name: 'Alex Mercer',
      role: t('c5_role') || '@DevOps_Engineer',
      text: t('c5_text') || 'The deployment architecture you suggested saved us weeks of trial and error. Excellent contribution to the community.',
      avatar: 'A'
    },
    {
      name: 'Rachel Wood',
      role: t('c6_role') || '@Data_Scientist',
      text: t('c6_text') || 'Highly informative! Your breakdown of RAG vs Fine-tuning cleared up a lot of misconceptions our team had.',
      avatar: 'R'
    }
  ];

  return (
    <div className="w-full pt-4 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center flex flex-col items-center">
        <div className="border border-white/20 rounded-full px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase text-white inline-flex items-center gap-2">
          {t('readerFeedback') || 'READER FEEDBACK'} <span className="text-xl leading-none" style={{ transform: 'rotate(45deg)' }}>↘</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white font-heading tracking-wide">
          {t('whatCommunitySays') || 'What the Community Says'}
        </h2>
      </div>

      {/* Infinite scrolling row */}
      <div className="relative w-full flex overflow-x-hidden">
        <div className="flex animate-marquee gap-6 py-4 px-3 w-max">
          {[...commentsData, ...commentsData].map((comment, idx) => (
            <div
              key={idx}
              className="w-[320px] sm:w-[380px] bg-white rounded-[20px] p-7 flex flex-col shadow-2xl flex-shrink-0 transition-transform hover:-translate-y-2 cursor-default"
            >
              <div className="flex justify-between items-start mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#101424] text-white flex items-center justify-center font-bold text-lg">
                    {comment.avatar}
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-gray-900 font-bold text-[16px] leading-tight mb-1 font-heading">{comment.name}</span>
                    <span className="text-gray-500 text-[13px] font-sans">{comment.role}</span>
                  </div>
                </div>
                <FcGoogle className="text-2xl" />
              </div>

              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} className="text-[#f59e0b] text-[15px]" />
                ))}
              </div>

              <p className="text-gray-700 text-[15px] leading-relaxed font-sans text-left">
                {comment.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 12px)); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>

  );
};

export default BlogComments;
