import React, { createContext, useContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export type BlockType = 'paragraph' | 'heading' | 'image' | 'list';

export interface Block {
  id: string;
  type: BlockType;
  content: string;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  content: Block[];
  createdAt: string;
  published: boolean;
  category?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  client: string;
  excerpt: string;
  coverImage: string;
  content: Block[];
  createdAt: string;
  published: boolean;
  tags: string[];
}

interface ContentContextType {
  posts: Post[];
  cases: CaseStudy[];
  addPost: (post: Omit<Post, 'id' | 'createdAt'>) => void;
  updatePost: (id: string, post: Partial<Post>) => void;
  deletePost: (id: string) => void;
  addCase: (caseStudy: Omit<CaseStudy, 'id' | 'createdAt'>) => void;
  updateCase: (id: string, caseStudy: Partial<CaseStudy>) => void;
  deleteCase: (id: string) => void;
  getPostBySlug: (slug: string) => Post | undefined;
  getCaseBySlug: (slug: string) => CaseStudy | undefined;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [cases, setCases] = useState<CaseStudy[]>([]);

  useEffect(() => {
    const storedPosts = localStorage.getItem('jan_agencia_posts');
    const storedCases = localStorage.getItem('jan_agencia_cases');
    if (storedPosts) setPosts(JSON.parse(storedPosts));
    if (storedCases) setCases(JSON.parse(storedCases));
  }, []);

  useEffect(() => {
    localStorage.setItem('jan_agencia_posts', JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    localStorage.setItem('jan_agencia_cases', JSON.stringify(cases));
  }, [cases]);

  const addPost = (post: Omit<Post, 'id' | 'createdAt'>) => {
    const newPost: Post = {
      ...post,
      id: uuidv4(),
      createdAt: new Date().toISOString(),
    };
    setPosts((prev) => [newPost, ...prev]);
  };

  const updatePost = (id: string, updatedPost: Partial<Post>) => {
    setPosts((prev) => prev.map((post) => (post.id === id ? { ...post, ...updatedPost } : post)));
  };

  const deletePost = (id: string) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  const addCase = (caseStudy: Omit<CaseStudy, 'id' | 'createdAt'>) => {
    const newCase: CaseStudy = {
      ...caseStudy,
      id: uuidv4(),
      createdAt: new Date().toISOString(),
    };
    setCases((prev) => [newCase, ...prev]);
  };

  const updateCase = (id: string, updatedCase: Partial<CaseStudy>) => {
    setCases((prev) => prev.map((c) => (c.id === id ? { ...c, ...updatedCase } : c)));
  };

  const deleteCase = (id: string) => {
    setCases((prev) => prev.filter((c) => c.id !== id));
  };

  const getPostBySlug = (slug: string) => posts.find((p) => p.slug === slug);
  const getCaseBySlug = (slug: string) => cases.find((c) => c.slug === slug);

  return (
    <ContentContext.Provider
      value={{
        posts,
        cases,
        addPost,
        updatePost,
        deletePost,
        addCase,
        updateCase,
        deleteCase,
        getPostBySlug,
        getCaseBySlug,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};
