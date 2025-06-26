
import { Timestamp } from 'firebase/firestore';

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  slug: string;
  published: Timestamp;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  readingTime: number;
  draft: boolean;
  lang: string;
}

export interface BlogPostDisplay {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
}
