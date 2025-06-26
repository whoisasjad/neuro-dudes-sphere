
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { useBlogPost } from '../hooks/useBlogPost';
import ReactMarkdown from 'react-markdown';

const BlogDetail = () => {
  const { id } = useParams();
  const { post, loading, error } = useBlogPost(id);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#161F1C] to-slate-900">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="text-white text-xl">Loading blog post...</div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#161F1C] to-slate-900">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <p className="text-slate-400 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/" className="text-green-400 hover:text-green-300 transition-colors duration-200">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const publishedDate = post.published.toDate().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#161F1C] to-slate-900">
      <Header />
      
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back button */}
        <Link 
          to="/" 
          className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors duration-200 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        {/* Hero image */}
        <div className="relative mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 lg:h-96 object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#161F1C]/60 to-transparent rounded-xl"></div>
        </div>

        {/* Article header */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-slate-700/50 text-green-300 px-3 py-1 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 p-6 bg-slate-800/40 backdrop-blur-sm rounded-lg border border-slate-700/30">
            <div className="flex items-center space-x-6 text-slate-400">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{publishedDate}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{post.readingTime} minutes</span>
              </div>
              <div className="text-slate-300">
                By NeuroDudes Team
              </div>
            </div>
            
            <button className="flex items-center text-green-400 hover:text-green-300 transition-colors duration-200">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </button>
          </div>
        </header>

        {/* Article content */}
        <div className="prose prose-lg prose-invert max-w-none prose-headings:text-white prose-p:text-slate-300 prose-strong:text-white prose-ul:text-slate-300 prose-li:text-slate-300">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        {/* Article footer */}
        <footer className="mt-12 pt-8 border-t border-slate-700/30">
          <div className="text-center">
            <p className="text-slate-400 mb-4">
              Enjoyed this article? Share it with others who might find it interesting.
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors duration-200"
            >
              ← Back to All Posts
            </Link>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default BlogDetail;
