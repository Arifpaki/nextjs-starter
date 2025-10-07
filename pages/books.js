import { useEffect, useMemo, useState } from 'react';
import fs from 'fs';
import path from 'path';
import Header from '../components/Header';

export default function BooksPage({ library }) {
  const [pathStack, setPathStack] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(t);
  }, []);

  const currentNode = useMemo(() => {
    return pathStack.reduce((acc, key) => {
      if (acc && typeof acc === 'object' && key in acc) {
        return acc[key];
      }
      return acc;
    }, library);
  }, [library, pathStack]);

  const isLeaf = Array.isArray(currentNode);

  const items = useMemo(() => {
    if (isLeaf) {
      return currentNode;
    }
    if (currentNode && typeof currentNode === 'object') {
      return Object.keys(currentNode);
    }
    return [];
  }, [currentNode, isLeaf]);

  const handleClick = (item) => {
    if (!isLeaf) {
      setPathStack((prev) => [...prev, item]);
    }
  };

  const handleBack = () => {
    setPathStack((prev) => prev.slice(0, -1));
  };

  const title = pathStack.length === 0 ? 'Categories' : pathStack.join(' / ');

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-teal-300 via-fuchsia-400 to-teal-300 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>
          <button
            onClick={handleBack}
            disabled={pathStack.length === 0}
            className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold border transition-all ${
              pathStack.length === 0
                ? 'border-gray-700 bg-gray-800/50 text-gray-500 cursor-not-allowed'
                : 'border-teal-500/40 bg-gray-800/50 text-white hover:border-fuchsia-400 hover:shadow-[0_0_25px_rgba(217,70,239,0.35)]'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-teal-300" viewBox="0 0 20 20" fill="currentColor">
              <path d="M17 10a1 1 0 01-1 1H7.414l2.293 2.293a1 1 0 11-1.414 1.414L3.05 10.464a1 1 0 010-1.414l5.243-5.243a1 1 0 111.414 1.414L7.414 9H16a1 1 0 011 1z" />
            </svg>
            Back
          </button>
        </div>

        <p className="text-gray-300 mb-8">
          {isLeaf
            ? 'Books'
            : pathStack.length === 0
            ? 'Select a category to drill down.'
            : 'Select a sub-category or book list.'}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item}
              className={`rounded-xl border border-teal-500/30 bg-gray-900/60 p-5 shadow-[0_0_30px_rgba(45,212,191,0.15)] transform transition-all ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">
                  <span className="text-white">{item}</span>
                </h3>
                {!isLeaf && (
                  <button
                    onClick={() => handleClick(item)}
                    className="inline-flex items-center gap-2 rounded-md border border-fuchsia-500/40 bg-gray-800/50 px-3 py-1.5 text-xs font-semibold text-white shadow-[0_0_20px_rgba(217,70,239,0.25)] transition-all hover:bg-gray-800 hover:border-teal-400 hover:shadow-[0_0_25px_rgba(45,212,191,0.35)]"
                  >
                    View
                    <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 shadow-[0_0_10px_rgba(217,70,239,0.8)]" />
                  </button>
                )}
              </div>

              {isLeaf && (
                <ul className="mt-4 space-y-2">
                  <li className="text-xs text-gray-400">Titles:</li>
                  {currentNode.map((book) => (
                    <li
                      key={book}
                      className="rounded-md bg-gray-800/50 px-3 py-2 text-sm text-gray-200 border border-gray-700/50"
                    >
                      {book}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {items.length === 0 && (
          <div className="mt-12 text-center text-gray-400">
            No items found in this section.
          </div>
        )}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const dataPath = path.join(process.cwd(), 'data', 'books.json');
  const raw = fs.readFileSync(dataPath, 'utf-8');
  const library = JSON.parse(raw);

  return {
    props: {
      library,
    },
  };
}