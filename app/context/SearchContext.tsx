// contexts/SearchContext.tsx
import React, { createContext, useState, useContext } from 'react';

type SearchContextType = {
  history: string[];
  addHistory: (query: string) => void;
  clearHistory: () => void;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [history, setHistory] = useState<string[]>([]);

  const addHistory = (query: string) => {
    setHistory((prev) => {
      const filtered = prev.filter(item => item !== query);
      return [query, ...filtered].slice(0, 5); // Keep latest 5 only
    });
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <SearchContext.Provider value={{ history, addHistory, clearHistory }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) throw new Error('useSearch must be used within a SearchProvider');
  return context;
};
