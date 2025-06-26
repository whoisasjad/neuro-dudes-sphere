
import { useState, useEffect } from 'react';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { BlogPost, BlogPostDisplay } from '../types/blog';

export const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPostDisplay[]>([]);
  const [featuredPost, setFeaturedPost] = useState<BlogPostDisplay | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const formatPostForDisplay = (post: BlogPost): BlogPostDisplay => {
    return {
      id: post.id,
      title: post.title,
      excerpt: post.description,
      date: post.published.toDate().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      readTime: `${post.readingTime} minutes`,
      category: post.category,
      tags: post.tags,
      image: post.image
    };
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        
        // Simplified query - just order by published date
        const postsQuery = query(
          collection(db, 'posts'),
          orderBy('published', 'desc')
        );
        
        const querySnapshot = await getDocs(postsQuery);
        const fetchedPosts: BlogPost[] = [];
        
        querySnapshot.forEach((doc) => {
          const postData = { id: doc.id, ...doc.data() } as BlogPost;
          // Filter out draft posts in JavaScript instead of Firestore query
          if (!postData.draft) {
            fetchedPosts.push(postData);
          }
        });

        const displayPosts = fetchedPosts.map(formatPostForDisplay);
        
        // Set featured post (first post) and regular posts
        if (displayPosts.length > 0) {
          setFeaturedPost(displayPosts[0]);
          setPosts(displayPosts.slice(1));
        }
        
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to fetch blog posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, featuredPost, loading, error };
};
