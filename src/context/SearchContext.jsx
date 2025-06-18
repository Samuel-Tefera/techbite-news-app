import { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [query, setQuery] = useState(null);
  return <SearchContext value={{ query, setQuery }}>{children}</SearchContext>;
}

export const useSearch = () => useContext(SearchContext);
