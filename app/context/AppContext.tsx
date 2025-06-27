'use client';

import React, { createContext, useContext, useState } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  rating?: number;
  category: string;
  brand: string;
  description: string;
  quantity?: number;
}

interface AppContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  filters: {
    categories: string[];
    priceRange: number;
    brands: string[];
  };
  setFilters: (f: AppContextType['filters']) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    categories: [] as string[],
    priceRange: 5000,
    brands: [] as string[],
  });

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.id === product.id);

      if (existingIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingIndex].quantity = (updatedCart[existingIndex].quantity || 1) + (product.quantity || 1);
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity: product.quantity || 1 }];
      }
    });
  };

  return (
    <AppContext.Provider
      value={{ cart, addToCart, searchQuery, setSearchQuery, filters, setFilters }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useAppContext must be inside AppContextProvider');
  return ctx;
};
