
import React from 'react';
import { Brain, Lightbulb, Monitor } from 'lucide-react';

export const Sidebar = () => {
  const categories = [
    { name: "AI/ML", count: 12, color: "bg-green-400" },
    { name: "Neuroscience", count: 8, color: "bg-emerald-400" },
    { name: "Programming", count: 15, color: "bg-teal-400" },
    { name: "Quantum", count: 5, color: "bg-lime-400" },
    { name: "Research", count: 7, color: "bg-green-300" }
  ];

  const tags = [
    "Neural Networks", "Deep Learning", "JavaScript", "Python", 
    "BCI", "Quantum Computing", "AI Ethics", "Machine Learning",
    "Neuromorphic", "Algorithms", "Data Science", "Robotics"
  ];

  return (
    <div className="space-y-6">
      {/* Author Card */}
      <div className="bg-slate-800/40 backdrop-blur-sm rounded-lg p-6 border border-slate-700/30">
        <div className="text-center">
          <div className="relative inline-block mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div className="absolute inset-0 w-16 h-16 bg-green-400/20 rounded-full blur-md"></div>
          </div>
          <h3 className="text-lg font-bold text-white mb-2">NeuroDudes</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Exploring the intersection of neuroscience, AI, and cutting-edge technology.
          </p>
          <div className="flex justify-center space-x-3 mt-4">
            <a href="#" className="text-slate-400 hover:text-green-400 transition-colors duration-200">
              <Monitor className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-green-400 transition-colors duration-200">
              <Brain className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-green-400 transition-colors duration-200">
              <Lightbulb className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-slate-800/40 backdrop-blur-sm rounded-lg p-6 border border-slate-700/30">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
          <div className="w-1 h-5 bg-green-400 mr-3"></div>
          Categories
        </h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex items-center justify-between p-2 rounded hover:bg-slate-700/30 transition-colors duration-200 cursor-pointer group"
            >
              <div className="flex items-center space-x-3">
                <div className={`w-2 h-2 rounded-full ${category.color}`}></div>
                <span className="text-slate-300 group-hover:text-white transition-colors duration-200">
                  {category.name}
                </span>
              </div>
              <span className="text-slate-500 text-sm bg-slate-700/50 px-2 py-1 rounded-full">
                {category.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="bg-slate-800/40 backdrop-blur-sm rounded-lg p-6 border border-slate-700/30">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
          <div className="w-1 h-5 bg-green-400 mr-3"></div>
          Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-slate-700/50 text-green-300 px-3 py-1 rounded-full text-sm hover:bg-slate-600/50 hover:text-green-200 transition-colors duration-200 cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-slate-800/40 backdrop-blur-sm rounded-lg p-6 border border-slate-700/30">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
          <div className="w-1 h-5 bg-green-400 mr-3"></div>
          Recent Activity
        </h3>
        <div className="space-y-4">
          <div className="text-sm">
            <div className="text-slate-300 mb-1">New post published</div>
            <div className="text-slate-500 text-xs">2 hours ago</div>
          </div>
          <div className="text-sm">
            <div className="text-slate-300 mb-1">Updated AI/ML category</div>
            <div className="text-slate-500 text-xs">1 day ago</div>
          </div>
          <div className="text-sm">
            <div className="text-slate-300 mb-1">Added quantum computing series</div>
            <div className="text-slate-500 text-xs">3 days ago</div>
          </div>
        </div>
      </div>
    </div>
  );
};
