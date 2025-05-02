import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimatedShinyText } from '../components/magicui/animated-shiny-text.tsx';
import ExpandableCodeCard from '../components/basic-components/ExpandableCodeCard';
import SearchBar from '../components/basic-components/SearchBar';
import CategoryFilter from '../components/basic-components/CategoryFilter';
import FeaturedCard from '../components/basic-components/FeaturedCard';
import { scriptDetails } from '../lib/const';

function Blog() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const goToHome = () => {
    navigate('/');
  };

  // Use scriptDetails as array
  const allSnippets = Object.values(scriptDetails);

  const filteredSnippets = useMemo(() => {
    return allSnippets.filter(snippet => {
      const matchesSearch =
        snippet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        snippet.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'all' || snippet.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory, allSnippets]);

  const featuredSnippets = filteredSnippets.filter(snippet => snippet.isFeatured);
  const regularSnippets = filteredSnippets.filter(snippet => !snippet.isFeatured);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <header className="py-8 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Code Snippets
          </h1>
          <button
            onClick={goToHome}
            className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            <AnimatedShinyText>Back to Home</AnimatedShinyText>
          </button>
        </div>
      </header>

      <main className="flex-1 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SearchBar onSearch={setSearchTerm} />
            <CategoryFilter 
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />

            {featuredSnippets.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">Featured Snippets</h2>
                {featuredSnippets.map(snippet => (
                  <FeaturedCard
                    key={snippet.id}
                    title={snippet.title}
                    description={snippet.titleDescription}
                  >
                    <ExpandableCodeCard
                      title={snippet.title}
                      icon={snippet.icon}
                      code={snippet.code}
                      language={snippet.language}
                      description={snippet.description}
                    />
                  </FeaturedCard>
                ))}
              </div>
            )}

            {regularSnippets.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">All Snippets</h2>
                {regularSnippets.map(snippet => (
                  <ExpandableCodeCard
                    key={snippet.id}
                    title={snippet.title}
                    icon={snippet.icon}
                    code={snippet.code}
                    language={snippet.language}
                    description={snippet.description}
                  />
                ))}
              </div>
            )}

            {filteredSnippets.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl text-gray-400">No code snippets found</h3>
                <p className="text-gray-500">Try adjusting your search or category filter</p>
              </div>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default Blog;