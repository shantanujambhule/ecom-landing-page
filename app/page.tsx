'use client';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProductGrid from './components/ProductGrid';
import mockProducts from './data/mockProducts'; // ✅ Correct path

export default function Home() {
  const [products] = useState(mockProducts);
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);

  const handleSearch = (query: string) => {
    const lowerQuery = query.toLowerCase();
    const results = products.filter(product =>
      product.title.toLowerCase().includes(lowerQuery)
    );
    setFilteredProducts(results);
  };

  const handleFilterChange = (filters: {
    categories: string[];
    priceRange: number;
    brands: string[];
  }) => {
    const results = products.filter((product) => {
      const categoryMatch =
        filters.categories.length === 0 ||
        filters.categories.includes(product.category);
      const brandMatch =
        filters.brands.length === 0 ||
        filters.brands.some(brand =>
          product.title.toLowerCase().includes(brand.toLowerCase())
        );
      const priceMatch = product.price <= filters.priceRange;

      return categoryMatch && brandMatch && priceMatch;
    });

    setFilteredProducts(results);
  };

  return (
    <div className="pt-28 px-4 md:px-10 lg:px-40">
      <Navbar onSearch={handleSearch} />
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        <Sidebar onFilterChange={handleFilterChange} />
        <main className="flex-1">
          <ProductGrid products={filteredProducts} onAddToCart={(id) => console.log('Add to Cart:', id)} />
        </main>
      </div>
    </div>
  );
}
