import React, { useState } from 'react';
import { useContent, Post, CaseStudy } from '../context/ContentContext';
import BlockEditor from '../components/BlockEditor';
import { Plus, Trash, Edit, Save, X } from 'lucide-react';

const Admin: React.FC = () => {
  const { posts, cases, addPost, updatePost, deletePost, addCase, updateCase, deleteCase } = useContent();
  const [activeTab, setActiveTab] = useState<'posts' | 'cases'>('posts');
  const [editingItem, setEditingItem] = useState<Post | CaseStudy | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  // Form state
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [blocks, setBlocks] = useState<any[]>([]);
  const [category, setCategory] = useState('');
  const [client, setClient] = useState('');

  const resetForm = () => {
    setTitle('');
    setSlug('');
    setExcerpt('');
    setCoverImage('');
    setBlocks([]);
    setCategory('');
    setClient('');
    setEditingItem(null);
    setIsCreating(false);
  };

  const handleEdit = (item: Post | CaseStudy) => {
    setEditingItem(item);
    setIsCreating(false);
    setTitle(item.title);
    setSlug(item.slug);
    setExcerpt(item.excerpt);
    setCoverImage(item.coverImage);
    setBlocks(item.content);
    if ('category' in item) setCategory(item.category || '');
    if ('client' in item) setClient(item.client || '');
  };

  const handleCreate = () => {
    resetForm();
    setIsCreating(true);
  };

  const handleSave = () => {
    if (activeTab === 'posts') {
      const postData = {
        title,
        slug: slug || title.toLowerCase().replace(/ /g, '-'),
        excerpt,
        coverImage,
        content: blocks,
        published: true,
        category,
      };

      if (editingItem) {
        updatePost(editingItem.id, postData);
      } else {
        addPost(postData);
      }
    } else {
      const caseData = {
        title,
        slug: slug || title.toLowerCase().replace(/ /g, '-'),
        excerpt,
        coverImage,
        content: blocks,
        published: true,
        client,
        tags: [],
      };

      if (editingItem) {
        updateCase(editingItem.id, caseData);
      } else {
        addCase(caseData);
      }
    }
    resetForm();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Painel Administrativo</h1>
          <a href="/" className="text-blue-600 hover:underline">Voltar para o Site</a>
        </header>

        {!isCreating && !editingItem ? (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="flex border-b">
              <button
                className={`flex-1 py-4 text-center font-medium ${activeTab === 'posts' ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:bg-gray-50'}`}
                onClick={() => setActiveTab('posts')}
              >
                Blog Posts
              </button>
              <button
                className={`flex-1 py-4 text-center font-medium ${activeTab === 'cases' ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:bg-gray-50'}`}
                onClick={() => setActiveTab('cases')}
              >
                Cases de Sucesso
              </button>
            </div>

            <div className="p-6">
              <div className="flex justify-between mb-6">
                <h2 className="text-xl font-semibold">Gerenciar {activeTab === 'posts' ? 'Posts' : 'Cases'}</h2>
                <button
                  onClick={handleCreate}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
                >
                  <Plus size={18} /> Novo {activeTab === 'posts' ? 'Post' : 'Case'}
                </button>
              </div>

              <div className="space-y-4">
                {(activeTab === 'posts' ? posts : cases).length === 0 && (
                  <p className="text-center text-gray-500 py-8">Nenhum item encontrado.</p>
                )}
                {(activeTab === 'posts' ? posts : cases).map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                    <div className="flex items-center gap-4">
                      {item.coverImage && (
                        <img src={item.coverImage} alt={item.title} className="w-16 h-16 object-cover rounded" />
                      )}
                      <div>
                        <h3 className="font-medium text-lg">{item.title}</h3>
                        <p className="text-sm text-gray-500 truncate max-w-md">{item.excerpt}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleEdit(item)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded"
                      >
                        <Edit size={18} />
                      </button>
                      <button
                        onClick={() => activeTab === 'posts' ? deletePost(item.id) : deleteCase(item.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded"
                      >
                        <Trash size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                {editingItem ? 'Editar' : 'Novo'} {activeTab === 'posts' ? 'Post' : 'Case'}
              </h2>
              <button onClick={resetForm} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Título</label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Slug (URL)</label>
                    <input
                      type="text"
                      value={slug}
                      onChange={(e) => setSlug(e.target.value)}
                      className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Imagem de Capa (URL)</label>
                    <input
                      type="text"
                      value={coverImage}
                      onChange={(e) => setCoverImage(e.target.value)}
                      className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Resumo</label>
                    <textarea
                      value={excerpt}
                      onChange={(e) => setExcerpt(e.target.value)}
                      rows={4}
                      className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  {activeTab === 'posts' ? (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Categoria</label>
                      <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  ) : (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Cliente</label>
                      <input
                        type="text"
                        value={client}
                        onChange={(e) => setClient(e.target.value)}
                        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="border-t pt-6">
                <label className="block text-lg font-medium text-gray-900 mb-4">Conteúdo</label>
                <BlockEditor initialBlocks={blocks} onChange={setBlocks} />
              </div>

              <div className="flex justify-end gap-4 pt-6 border-t">
                <button
                  onClick={resetForm}
                  className="px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleSave}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 flex items-center gap-2"
                >
                  <Save size={18} />
                  Salvar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
