
import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { BlogPost } from '../components/BlogPost';
import { FeaturedPost } from '../components/FeaturedPost';
import { useBlogPosts } from '../hooks/useBlogPosts';

const Index = () => {
  const { posts, featuredPost, loading, error } = useBlogPosts();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#161F1C] to-slate-900">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="text-white text-xl">Loading blog posts...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#161F1C] to-slate-900">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="text-red-400 text-xl">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#161F1C] to-slate-900">
      {/* Neural network background pattern */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(22, 31, 28, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(22, 31, 28, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 40% 80%, rgba(22, 31, 28, 0.3) 0%, transparent 50%)`
        }}></div>
      </div>
      
      <div className="relative z-10">
        <Header />
        
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main content */}
            <main className="flex-1">
              {/* Featured post */}
              {featuredPost && (
                <section className="mb-12">
                  <Link to={`/blog/${featuredPost.id}`}>
                    <FeaturedPost post={featuredPost} />
                  </Link>
                </section>
              )}
              
              {/* Blog posts grid */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                  <div className="w-1 h-6 bg-green-400 mr-3"></div>
                  Latest Posts
                </h2>
                {posts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {posts.map((post) => (
                      <Link key={post.id} to={`/blog/${post.id}`}>
                        <BlogPost post={post} />
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="text-slate-400 text-center py-8">
                    No blog posts found.
                  </div>
                )}
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
