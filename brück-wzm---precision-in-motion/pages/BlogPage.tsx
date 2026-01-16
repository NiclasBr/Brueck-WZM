
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { BLOG_POSTS } from '../constants';
import { ScrollReveal } from '../components/ScrollReveal';

export const BlogPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-48 pb-24 min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-500">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 uppercase tracking-tight dark:text-white">
              {t.blog.title}
            </h1>
            <p className="text-xl text-gray-500 dark:text-gray-400">
              {t.blog.subtitle}
            </p>
          </ScrollReveal>
        </div>

        {/* Featured Post (First one) */}
        {BLOG_POSTS.length > 0 && (
          <ScrollReveal className="mb-20">
            <Link to={`/blog/${BLOG_POSTS[0].slug}`} className="group relative block rounded-3xl overflow-hidden h-[500px] shadow-2xl shadow-slate-900/20 dark:shadow-none">
              <div className="absolute inset-0">
                <img 
                  src={BLOG_POSTS[0].coverImage} 
                  alt={BLOG_POSTS[0].title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:w-3/4">
                <div className="flex items-center gap-4 text-white/80 text-sm font-bold uppercase tracking-widest mb-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full">{BLOG_POSTS[0].tags[0]}</span>
                  <span>{BLOG_POSTS[0].date}</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors">
                  {BLOG_POSTS[0].title}
                </h2>
                <p className="text-lg text-gray-300 line-clamp-2 max-w-2xl mb-6">
                  {BLOG_POSTS[0].excerpt}
                </p>
                <div className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-sm">
                  {t.blog.readMore} <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          </ScrollReveal>
        )}

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BLOG_POSTS.slice(1).map((post, index) => (
            <ScrollReveal key={post.id} delay={index * 100} className="h-full">
              <Link to={`/blog/${post.slug}`} className="group flex flex-col h-full bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-slate-800 shadow-lg shadow-slate-200/60 dark:shadow-none hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={post.coverImage} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 dark:bg-slate-900/90 backdrop-blur text-slate-900 dark:text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-widest">
                      {post.tags[0]}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4 font-mono uppercase tracking-widest">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-red-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="pt-6 border-t border-gray-100 dark:border-slate-800 flex items-center gap-2 text-red-600 text-xs font-bold uppercase tracking-widest">
                    {t.blog.readMore} <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </div>
  );
};
