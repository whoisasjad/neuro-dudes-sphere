
import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface FeaturedPostProps {
  post: {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    tags: string[];
    image: string;
  };
}

export const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  return (
    <article className="relative group cursor-pointer">
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-green-400/30 transition-all duration-300 hover:shadow-2xl hover:shadow-green-400/10">
        <div className="relative">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
          
          {/* Featured badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Featured
            </span>
          </div>
          
          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-slate-700/80 text-green-300 px-2 py-1 rounded text-xs font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
            
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors duration-300">
              {post.title}
            </h2>
            
            <p className="text-slate-300 text-base lg:text-lg mb-6 line-clamp-2">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-slate-400 text-sm">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <div className="flex items-center text-green-400 font-medium group-hover:text-green-300 transition-colors duration-300">
                <span className="mr-2">Read More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
