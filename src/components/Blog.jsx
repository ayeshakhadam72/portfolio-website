import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi';
import { blogsData } from '../data/blogsData';
import BlogDetail from './BlogDetail';

const Blog = () => {
  const { t } = useLanguage();
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <>
      <section
        id="blog"
        className="min-h-screen py-12 sm:py-24 px-4 sm:px-6 md:px-12 border-b border-white/5 relative"
        style={{
          backgroundImage: "url('/blogs.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-[#101424]/90 backdrop-blur-[2px]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-[20px] sm:text-[30px] mb-4 tracking-widest uppercase block font-sans  ">{t('blogTitle') || 'BLOGS'}</span>
            <h2 className="text-3xl sm:text-4xl md:text-[52px] font-bold mb-4  text-white tracking-tight mb-5 leading-tight">
              {t('blogSubtitle') || 'Latest Insights'}
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogsData.map((blog) => (
              <div
                key={blog.id}
                className="bg-[#181d31] rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-500 group flex flex-col hover:-translate-y-3 hover:shadow-[0_10px_30px_rgba(247,80,35,0.2)]"
              >
                {/* Card Image */}
                <div className="relative h-56 overflow-hidden bg-gray-800">
                  <div className="absolute top-4 left-4 z-10 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    {blog.category}
                  </div>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => { e.target.src = '/blogs.jpg' }}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181d31] to-transparent opacity-60"></div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 font-medium">
                    <div className="flex items-center gap-1.5">
                      <FiCalendar /> {blog.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FiClock /> {blog.readTime}
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-3 line-clamp-2 leading-snug">
                    {blog.tPrefix ? t(blog.tPrefix + 'title') || blog.title : blog.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {blog.tPrefix ? t(blog.tPrefix + 'desc') || blog.description : blog.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-white/5">
                    <button
                      onClick={() => setSelectedBlog(blog)}
                      className="text-primary hover:text-white font-semibold text-sm flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      {t('blogReadArticle') || 'Read more'} <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Detail Overlay Modal */}
      {selectedBlog && (
        <BlogDetail
          blog={selectedBlog}
          onBack={() => setSelectedBlog(null)}
        />
      )}
    </>
  );
};

export default Blog;
