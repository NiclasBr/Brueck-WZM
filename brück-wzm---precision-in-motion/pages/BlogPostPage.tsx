
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { BLOG_POSTS } from '../constants';
import { ScrollReveal } from '../components/ScrollReveal';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();

  // In a real Headless CMS setup, you would fetch data here based on the slug
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-500">
      
      {/* Hero Image */}
      <div className="h-[400px] md:h-[500px] w-full relative overflow-hidden">
         <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-full object-cover"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-gray-50 dark:from-slate-950 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 -mt-32 relative z-10">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-16 shadow-xl border border-gray-100 dark:border-slate-800">
            
            {/* Back Link */}
            <Link to="/blog" className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors mb-8 text-sm font-bold uppercase tracking-widest">
              <ArrowLeft className="w-4 h-4" /> {t.blog.backToBlog}
            </Link>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-6 font-mono uppercase tracking-widest">
               <span className="flex items-center gap-2">
                 <Calendar className="w-4 h-4" /> {post.date}
               </span>
               <span className="flex items-center gap-2">
                 <User className="w-4 h-4" /> {post.author}
               </span>
               {post.tags.map((tag, i) => (
                 <span key={i} className="bg-gray-100 dark:bg-slate-800 px-3 py-1 rounded-full text-xs text-slate-900 dark:text-white border border-gray-200 dark:border-slate-700">
                   #{tag}
                 </span>
               ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900 dark:text-white leading-tight">
              {post.title}
            </h1>

            {/* Content Body */}
            {/* Note: This dangerouslySetInnerHTML is where CMS rich text HTML would be injected */}
            <div 
              className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:uppercase prose-headings:tracking-tight prose-a:text-red-600 hover:prose-a:text-red-700 prose-img:rounded-2xl"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Footer / Share */}
            <div className="mt-16 pt-8 border-t border-gray-100 dark:border-slate-800 flex justify-between items-center">
               <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                  Share this article
               </div>
               <button className="w-10 h-10 rounded-full bg-gray-50 dark:bg-slate-800 flex items-center justify-center hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 transition-colors">
                  <Share2 className="w-5 h-5" />
               </button>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};
