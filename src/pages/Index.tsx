
import React from 'react';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { BlogPost } from '../components/BlogPost';
import { FeaturedPost } from '../components/FeaturedPost';

const Index = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Neural Network Architecture Fundamentals",
      excerpt: "Deep dive into the building blocks of modern AI systems and how they process information.",
      date: "2024-06-20",
      readTime: "8 minutes",
      category: "AI/ML",
      tags: ["Neural Networks", "Deep Learning", "AI"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Brain-Computer Interfaces: The Future is Now",
      excerpt: "Exploring the latest developments in BCIs and their potential to revolutionize human-computer interaction.",
      date: "2024-06-18",
      readTime: "12 minutes",
      category: "Neuroscience",
      tags: ["BCI", "Neuroscience", "Technology"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Advanced JavaScript Patterns for Neural Computing",
      excerpt: "How modern JavaScript frameworks can be optimized for AI computations and neural network implementations.",
      date: "2024-06-15",
      readTime: "6 minutes",
      category: "Programming",
      tags: ["JavaScript", "Programming", "AI"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Quantum Computing Meets Neural Networks",
      excerpt: "Investigating the intersection of quantum computing and artificial neural networks for next-gen processing.",
      date: "2024-06-12",
      readTime: "10 minutes",
      category: "Quantum",
      tags: ["Quantum Computing", "Neural Networks", "Research"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop"
    }
  ];

  const featuredPost = {
    id: 5,
    title: "The Ultimate Guide to Neuromorphic Computing",
    excerpt: "Understanding how brain-inspired computing architectures are reshaping the future of AI and machine learning.",
    date: "2024-06-25",
    readTime: "15 minutes",
    category: "Featured",
    tags: ["Neuromorphic", "Computing", "AI", "Hardware"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&h=600&fit=crop"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Neural network background pattern */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 40% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)`
        }}></div>
      </div>
      
      <div className="relative z-10">
        <Header />
        
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main content */}
            <main className="flex-1">
              {/* Featured post */}
              <section className="mb-12">
                <FeaturedPost post={featuredPost} />
              </section>
              
              {/* Blog posts grid */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                  <div className="w-1 h-6 bg-cyan-400 mr-3"></div>
                  Latest Posts
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {blogPosts.map((post) => (
                    <BlogPost key={post.id} post={post} />
                  ))}
                </div>
              </section>
            </main>
            
            {/* Sidebar */}
            <aside className="lg:w-80">
              <Sidebar />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
