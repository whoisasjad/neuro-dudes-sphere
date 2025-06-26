
import React, { useState } from 'react';
import { Search, Menu, X, Brain } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Brain className="w-8 h-8 text-green-400" />
              <div className="absolute inset-0 w-8 h-8 bg-green-400/20 rounded-full blur-md"></div>
            </div>
            <h1 className="text-2xl font-bold text-white">
              Neuro<span className="text-green-400">Dudes</span>
            </h1>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-green-400 transition-colors duration-200 font-medium">
              Home
            </a>
            <a href="#" className="text-slate-300 hover:text-green-400 transition-colors duration-200 font-medium">
              Archive
            </a>
            <a href="#" className="text-slate-300 hover:text-green-400 transition-colors duration-200 font-medium">
              About
            </a>
            <a href="#" className="text-slate-300 hover:text-green-400 transition-colors duration-200 font-medium">
              Research
            </a>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search..."
                className="bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-2 pl-10 text-white placeholder-slate-400 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-colors duration-200"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-green-400 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700/50">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-white hover:text-green-400 transition-colors duration-200 font-medium">
                Home
              </a>
              <a href="#" className="text-slate-300 hover:text-green-400 transition-colors duration-200 font-medium">
                Archive
              </a>
              <a href="#" className="text-slate-300 hover:text-green-400 transition-colors duration-200 font-medium">
                About
              </a>
              <a href="#" className="text-slate-300 hover:text-green-400 transition-colors duration-200 font-medium">
                Research
              </a>
              {/* Mobile search */}
              <div className="relative pt-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-2 pl-10 text-white placeholder-slate-400 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-colors duration-200"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
