
import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogPostProps {
  post: {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    tags: string[];
    image: string;
  };
}

export const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <article className="group cursor-pointer">
      <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg overflow-hidden border border-slate-700/30 hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/5 h-full">
        <div className="relative">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3">
            <span className="bg-slate-900/80 text-green-300 px-2 py-1 rounded text-xs font-medium">
              {post.category}
            </span>
          </div>
        </div>
        
        <div className="p-5">
          <div className="flex flex-wrap gap-1 mb-3">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-green-400 text-xs"
              >
                #{tag}
              </span>
            ))}
          </div>
          
          <h3 className="text-lg font-bold text-white mb-3 group-hover:text-green-300 transition-colors duration-300 line-clamp-2">
            {post.title}
          </h3>
          
          <p className="text-slate-400 text-sm mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between pt-3 border-t border-slate-700/30">
            <div className="flex items-center space-x-3 text-slate-500 text-xs">
              <div className="flex items-center space-x-1">
                <Calendar className="w-3 h-3" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-3 h-3" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <div className="flex items-center text-green-400 text-sm font-medium group-hover:text-green-300 transition-colors duration-300">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
