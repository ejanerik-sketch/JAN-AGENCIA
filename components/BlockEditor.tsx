import React, { useState, useEffect } from 'react';
import { Block, BlockType } from '../context/ContentContext';
import { Plus, Trash2, Image as ImageIcon, Type, Heading, List } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

interface BlockEditorProps {
  initialBlocks?: Block[];
  onChange: (blocks: Block[]) => void;
}

const BlockEditor: React.FC<BlockEditorProps> = ({ initialBlocks = [], onChange }) => {
  const [blocks, setBlocks] = useState<Block[]>(initialBlocks);

  useEffect(() => {
    if (initialBlocks.length > 0 && blocks.length === 0) {
       setBlocks(initialBlocks);
    }
  }, [initialBlocks]);

  const addBlock = (type: BlockType) => {
    const newBlock: Block = {
      id: uuidv4(),
      type,
      content: '',
    };
    const newBlocks = [...blocks, newBlock];
    setBlocks(newBlocks);
    onChange(newBlocks);
  };

  const updateBlock = (id: string, content: string) => {
    const newBlocks = blocks.map((block) =>
      block.id === id ? { ...block, content } : block
    );
    setBlocks(newBlocks);
    onChange(newBlocks);
  };

  const removeBlock = (id: string) => {
    const newBlocks = blocks.filter((block) => block.id !== id);
    setBlocks(newBlocks);
    onChange(newBlocks);
  };

  const moveBlock = (index: number, direction: 'up' | 'down') => {
    if (
      (direction === 'up' && index === 0) ||
      (direction === 'down' && index === blocks.length - 1)
    ) {
      return;
    }

    const newBlocks = [...blocks];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    [newBlocks[index], newBlocks[targetIndex]] = [newBlocks[targetIndex], newBlocks[index]];
    setBlocks(newBlocks);
    onChange(newBlocks);
  };

  return (
    <div className="space-y-4">
      <div className="flex space-x-2 p-2 bg-gray-100 rounded-lg sticky top-0 z-10">
        <button
          type="button"
          onClick={() => addBlock('heading')}
          className="p-2 hover:bg-white rounded flex items-center space-x-1 text-sm font-medium"
        >
          <Heading size={16} />
          <span>Título</span>
        </button>
        <button
          type="button"
          onClick={() => addBlock('paragraph')}
          className="p-2 hover:bg-white rounded flex items-center space-x-1 text-sm font-medium"
        >
          <Type size={16} />
          <span>Texto</span>
        </button>
        <button
          type="button"
          onClick={() => addBlock('image')}
          className="p-2 hover:bg-white rounded flex items-center space-x-1 text-sm font-medium"
        >
          <ImageIcon size={16} />
          <span>Imagem</span>
        </button>
         <button
          type="button"
          onClick={() => addBlock('list')}
          className="p-2 hover:bg-white rounded flex items-center space-x-1 text-sm font-medium"
        >
          <List size={16} />
          <span>Lista</span>
        </button>
      </div>

      <div className="space-y-4 min-h-[300px] border p-4 rounded-lg bg-white">
        {blocks.length === 0 && (
          <div className="text-center text-gray-400 py-10">
            Adicione blocos para começar a escrever...
          </div>
        )}
        {blocks.map((block, index) => (
          <div key={block.id} className="group relative border border-transparent hover:border-gray-200 rounded p-2 transition-colors">
            <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 flex space-x-1 bg-white shadow-sm rounded border">
              <button
                type="button"
                onClick={() => moveBlock(index, 'up')}
                disabled={index === 0}
                className="p-1 hover:bg-gray-100 text-gray-500 disabled:opacity-30"
              >
                ↑
              </button>
              <button
                type="button"
                onClick={() => moveBlock(index, 'down')}
                disabled={index === blocks.length - 1}
                className="p-1 hover:bg-gray-100 text-gray-500 disabled:opacity-30"
              >
                ↓
              </button>
              <button
                type="button"
                onClick={() => removeBlock(block.id)}
                className="p-1 hover:bg-red-50 text-red-500"
              >
                <Trash2 size={14} />
              </button>
            </div>

            {block.type === 'heading' && (
              <input
                type="text"
                value={block.content}
                onChange={(e) => updateBlock(block.id, e.target.value)}
                placeholder="Título da seção..."
                className="w-full text-2xl font-bold border-none focus:ring-0 p-0 placeholder-gray-300"
              />
            )}

            {block.type === 'paragraph' && (
              <textarea
                value={block.content}
                onChange={(e) => updateBlock(block.id, e.target.value)}
                placeholder="Escreva seu texto..."
                className="w-full min-h-[100px] resize-y border-none focus:ring-0 p-0 text-gray-700 leading-relaxed placeholder-gray-300"
              />
            )}

            {block.type === 'image' && (
              <div className="space-y-2">
                <input
                  type="text"
                  value={block.content}
                  onChange={(e) => updateBlock(block.id, e.target.value)}
                  placeholder="Cole a URL da imagem aqui..."
                  className="w-full p-2 border rounded text-sm bg-gray-50"
                />
                {block.content && (
                  <img
                    src={block.content}
                    alt="Preview"
                    className="max-h-64 rounded object-cover"
                    onError={(e) => (e.currentTarget.style.display = 'none')}
                  />
                )}
              </div>
            )}

             {block.type === 'list' && (
              <textarea
                value={block.content}
                onChange={(e) => updateBlock(block.id, e.target.value)}
                placeholder="Item 1&#10;Item 2&#10;Item 3"
                className="w-full min-h-[100px] resize-y border-none focus:ring-0 p-0 text-gray-700 leading-relaxed placeholder-gray-300 font-mono text-sm bg-gray-50/50"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlockEditor;
