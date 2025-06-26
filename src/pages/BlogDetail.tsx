
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';

const BlogDetail = () => {
  const { id } = useParams();

  // Mock data - in a real app this would come from an API
  const blogPosts = {
    "1": {
      id: 1,
      title: "Neural Network Architecture Fundamentals",
      content: `
        <p>Neural networks are the backbone of modern artificial intelligence systems. Understanding their architecture is crucial for anyone looking to dive deep into the world of AI and machine learning.</p>
        
        <h2>What are Neural Networks?</h2>
        <p>At their core, neural networks are computational models inspired by the human brain. They consist of interconnected nodes (neurons) that process and transmit information through weighted connections.</p>
        
        <h2>Basic Components</h2>
        <p>Every neural network consists of three main components:</p>
        <ul>
          <li><strong>Input Layer:</strong> Receives the initial data</li>
          <li><strong>Hidden Layers:</strong> Process the information through various transformations</li>
          <li><strong>Output Layer:</strong> Produces the final result</li>
        </ul>
        
        <h2>Types of Neural Networks</h2>
        <p>There are several types of neural networks, each designed for specific tasks:</p>
        <ul>
          <li>Feedforward Neural Networks</li>
          <li>Convolutional Neural Networks (CNNs)</li>
          <li>Recurrent Neural Networks (RNNs)</li>
          <li>Long Short-Term Memory Networks (LSTMs)</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Understanding neural network architecture is the first step towards building more sophisticated AI systems. As we continue to advance in this field, these fundamental concepts remain at the core of every breakthrough.</p>
      `,
      date: "2024-06-20",
      readTime: "8 minutes",
      category: "AI/ML",
      tags: ["Neural Networks", "Deep Learning", "AI"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop",
      author: "NeuroDudes Team"
    },
    "2": {
      id: 2,
      title: "Brain-Computer Interfaces: The Future is Now",
      content: `
        <p>Brain-Computer Interfaces (BCIs) represent one of the most exciting frontiers in neuroscience and technology. These systems enable direct communication between the brain and external devices, opening up possibilities that were once confined to science fiction.</p>
        
        <h2>How BCIs Work</h2>
        <p>BCIs capture neural signals from the brain, typically through electrodes placed on the scalp or implanted directly into brain tissue. These signals are then processed and translated into commands that can control external devices.</p>
        
        <h2>Current Applications</h2>
        <p>Today's BCIs are already making a real impact:</p>
        <ul>
          <li>Helping paralyzed patients control prosthetic limbs</li>
          <li>Enabling communication for people with severe speech disabilities</li>
          <li>Treating depression and other neurological conditions</li>
          <li>Enhancing cognitive abilities in healthy individuals</li>
        </ul>
        
        <h2>The Technology Behind BCIs</h2>
        <p>Modern BCIs rely on several key technologies:</p>
        <ul>
          <li>Advanced signal processing algorithms</li>
          <li>Machine learning for pattern recognition</li>
          <li>Miniaturized electronics</li>
          <li>Biocompatible materials</li>
        </ul>
        
        <h2>Future Possibilities</h2>
        <p>The future of BCIs is incredibly promising. We're moving towards a world where thought-controlled devices, enhanced memory, and direct brain-to-brain communication might become reality.</p>
      `,
      date: "2024-06-18",
      readTime: "12 minutes",
      category: "Neuroscience",
      tags: ["BCI", "Neuroscience", "Technology"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=600&fit=crop",
      author: "NeuroDudes Team"
    },
    "5": {
      id: 5,
      title: "The Ultimate Guide to Neuromorphic Computing",
      content: `
        <p>Neuromorphic computing represents a paradigm shift in how we approach computational problems. By mimicking the structure and function of biological neural networks, these systems promise to revolutionize artificial intelligence and machine learning.</p>
        
        <h2>What is Neuromorphic Computing?</h2>
        <p>Neuromorphic computing is an approach to computing that uses electronic circuits to mimic the neural structures and functions of the human brain. Unlike traditional digital computers that process information sequentially, neuromorphic systems process information in parallel, much like biological neural networks.</p>
        
        <h2>Key Advantages</h2>
        <p>Neuromorphic systems offer several advantages over traditional computing:</p>
        <ul>
          <li><strong>Energy Efficiency:</strong> Consume significantly less power than conventional processors</li>
          <li><strong>Real-time Processing:</strong> Can process and respond to inputs instantaneously</li>
          <li><strong>Adaptive Learning:</strong> Can learn and adapt without explicit programming</li>
          <li><strong>Fault Tolerance:</strong> Gracefully handle component failures</li>
        </ul>
        
        <h2>Current Applications</h2>
        <p>Neuromorphic computing is already finding applications in various fields:</p>
        <ul>
          <li>Autonomous vehicles for real-time decision making</li>
          <li>Robotics for sensorimotor control</li>
          <li>Edge computing devices</li>
          <li>Prosthetics and biomedical devices</li>
        </ul>
        
        <h2>Leading Research and Companies</h2>
        <p>Major tech companies and research institutions are investing heavily in neuromorphic computing:</p>
        <ul>
          <li>Intel's Loihi processor</li>
          <li>IBM's TrueNorth chip</li>
          <li>BrainChip's Akida processor</li>
          <li>Academic research at Stanford, MIT, and other institutions</li>
        </ul>
        
        <h2>The Future of Neuromorphic Computing</h2>
        <p>As we continue to understand the brain better and develop more sophisticated neuromorphic hardware, we can expect these systems to become more prevalent in everyday applications. The integration of neuromorphic computing with traditional AI systems will likely lead to more efficient, adaptive, and intelligent machines.</p>
        
        <h2>Challenges and Opportunities</h2>
        <p>While neuromorphic computing holds great promise, there are still challenges to overcome, including standardization of programming models, scaling manufacturing, and developing appropriate software tools. However, the potential benefits make this an exciting field for future development.</p>
      `,
      date: "2024-06-25",
      readTime: "15 minutes",
      category: "Featured",
      tags: ["Neuromorphic", "Computing", "AI", "Hardware"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&h=600&fit=crop",
      author: "NeuroDudes Team"
    }
  };

  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
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
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              <div className="text-slate-300">
                By {post.author}
              </div>
            </div>
            
            <button className="flex items-center text-green-400 hover:text-green-300 transition-colors duration-200">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </button>
          </div>
        </header>

        {/* Article content */}
        <div 
          className="prose prose-lg prose-invert max-w-none prose-headings:text-white prose-p:text-slate-300 prose-strong:text-white prose-ul:text-slate-300 prose-li:text-slate-300"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

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
