import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useContent } from '../context/ContentContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';

const CaseStudy: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { getCaseBySlug } = useContent();
  const caseStudy = getCaseBySlug(slug || '');

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Case não encontrado</h1>
          <Link to="/cases" className="text-blue-600 hover:underline">Voltar para Cases</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <article className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/cases" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" /> Voltar para Cases
          </Link>
          
          <header className="mb-12">
            <p className="text-blue-600 font-medium mb-4 uppercase tracking-wider">{caseStudy.client}</p>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              {caseStudy.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              {caseStudy.excerpt}
            </p>
          </header>

          {caseStudy.coverImage && (
            <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl">
              <img src={caseStudy.coverImage} alt={caseStudy.title} className="w-full h-auto" />
            </div>
          )}

          <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-img:rounded-xl">
            {caseStudy.content.map((block) => {
              switch (block.type) {
                case 'heading':
                  return <h2 key={block.id} className="text-3xl mt-16 mb-8">{block.content}</h2>;
                case 'paragraph':
                  return <p key={block.id} className="mb-6 leading-relaxed text-lg">{block.content}</p>;
                case 'image':
                  return (
                    <figure key={block.id} className="my-12">
                      <img src={block.content} alt="" className="w-full rounded-xl shadow-lg" />
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

export default CaseStudy;
