import React from 'react';
import { FiArrowLeft, FiCalendar, FiClock, FiUser } from 'react-icons/fi';
import { blogsData } from '../data/blogsData';
import { useLanguage } from '../context/LanguageContext';

const BlogDetail = ({ blog, onBack }) => {
  const { t } = useLanguage();
  // Get recent posts excluding the current one
  const recentPosts = blogsData.filter(b => b.id !== blog.id).slice(0, 3);
  
  // Unique categories
  const categories = [...new Set(blogsData.map(b => b.category))];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0a0a0a] text-gray-300 font-sans">
      {/* Header/Nav */}
      <div className="sticky top-0 z-10 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors cursor-pointer"
        >
          <FiArrowLeft /> {t('blogBack') || 'Back to Blogs'}
        </button>
        <div className="text-xl font-bold text-white tracking-widest flex items-center gap-2">
          <span>WEB SPHERE</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content (Left Column) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Main Image */}
            <div className="w-full h-[400px] md:h-[500px] bg-gray-800 rounded-2xl overflow-hidden shadow-2xl relative group border border-white/5">
               {/* Using placeholder or actual image */}
               <img 
                 src={blog.image} 
                 alt={blog.title} 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 onError={(e) => { e.target.src = '/blogs.jpg' }}
               />
               <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                 {blog.category}
               </div>
            </div>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 font-medium">
              <div className="flex items-center gap-2">
                <FiUser className="text-primary" />
                <span className="text-white">{t('writtenBy') || 'Written by:'} <span className="font-bold">Admin</span></span>
              </div>
              <div className="w-1 h-1 rounded-full bg-gray-600"></div>
              <div className="flex items-center gap-2">
                <FiCalendar className="text-primary" />
                <span>{blog.date}</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-gray-600"></div>
              <div className="flex items-center gap-2">
                <FiClock className="text-primary" />
                <span>{blog.readTime}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {blog.tPrefix ? t(blog.tPrefix + 'title') || blog.title : blog.title}
            </h1>

            {/* Content Body */}
            <div 
              className="prose prose-invert prose-lg max-w-none text-gray-400 leading-relaxed 
                         prose-headings:text-white prose-a:text-primary prose-strong:text-white"
              dangerouslySetInnerHTML={{ __html: blog.tPrefix ? t(blog.tPrefix + 'content') || blog.content : blog.content }}
            />
          </div>

          {/* Sidebar (Right Column) */}
          <div className="space-y-12">
            
            {/* Categories */}
            <div className="bg-[#101424] p-8 rounded-2xl border border-white/5">
              <h3 className="text-xl font-bold text-white mb-6 pb-4 border-b border-white/10">
                {t('categories') || 'Categories'}
              </h3>
              <ul className="space-y-3">
                {categories.map((cat, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors cursor-pointer">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    {cat}
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-[#101424] p-8 rounded-2xl border border-white/5">
              <h3 className="text-xl font-bold text-white mb-6 pb-4 border-b border-white/10">
                {t('recentPosts') || 'Recent Posts'}
              </h3>
              <div className="space-y-6">
                {recentPosts.map(post => (
                  <div key={post.id} className="flex gap-4 group cursor-pointer border-b border-white/5 pb-4 last:border-0 last:pb-0">
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gray-800">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => { e.target.src = '/blogs.jpg' }}
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-xs text-primary font-bold mb-1">{post.date}</span>
                      <h4 className="text-white text-sm font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2">
                        {post.tPrefix ? t(post.tPrefix + 'title') || post.title : post.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
