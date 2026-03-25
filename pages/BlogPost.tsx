import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useContent } from '../context/ContentContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { getPostBySlug } = useContent();
  const post = getPostBySlug(slug || '');

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post não encontrado</h1>
          <Link to="/blog" className="text-blue-600 hover:underline">Voltar para o Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <article className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" /> Voltar para o Blog
          </Link>
          
          <header className="mb-12 text-center">
            {post.category && (
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                {post.category}
              </span>
            )}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-gray-500">
              <span className="flex items-center gap-2">
                <Calendar size={18} />
                {new Date(post.createdAt).toLocaleDateString('pt-BR')}
              </span>
            </div>
          </header>

          {post.coverImage && (
            <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
              <img src={post.coverImage} alt={post.title} className="w-full h-auto" />
            </div>
          )}

          <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-img:rounded-xl">
            {post.content.map((block) => {
              switch (block.type) {
                case 'heading':
                  return <h2 key={block.id} className="text-3xl mt-12 mb-6">{block.content}</h2>;
                case 'paragraph':
                  return <p key={block.id} className="mb-6 leading-relaxed">{block.content}</p>;
                case 'image':
                  return (
                    <figure key={block.id} className="my-10">
                      <img src={block.content} alt="" className="w-full rounded-xl shadow-md" />
                    </figure>
                  );
                case 'list':
                   return (
                    <ul key={block.id} className="list-disc pl-6 mb-6 space-y-2">
                      {block.content.split('\n').map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                   );
                default:
                  return null;
              }
            })}
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default BlogPost;
