'use client';

import React, { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';

interface SidebarProps {
  onFilterChange: (filters: {
    categories: string[];
    priceRange: number;
    brands: string[];
  }) => void;
}

const categories = ['Electronics', 'Clothing', 'Home', 'Sports', 'Beauty'];
const brands = ['Apple', 'Nike', 'Dell', 'Sony', 'Adidas'];

const Sidebar: React.FC<SidebarProps> = ({ onFilterChange }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState(1000);

  const [hasInteracted, setHasInteracted] = useState(false); // 👈

  const { setFilters } = useAppContext();

  const toggleItem = (
    value: string,
    list: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setHasInteracted(true); // 👈 user interacted
    if (list.includes(value)) {
      setList(list.filter((item) => item !== value));
    } else {
      setList([...list, value]);
    }
  };

  const handlePriceChange = (value: number) => {
    setHasInteracted(true); // 👈 user interacted
    setPriceRange(value);
  };

  useEffect(() => {
    if (!hasInteracted) return;

    const filterData = {
      categories: selectedCategories,
      priceRange,
      brands: selectedBrands,
    };

    onFilterChange(filterData);
    setFilters(filterData);
  }, [selectedCategories, selectedBrands, priceRange, hasInteracted]);

  return (
    <aside className="w-full sm:w-64 p-4 bg-white shadow-xl rounded-md space-y-6">
      {/* Category Filter */}
      <div>
        <h3 className="font-semibold mb-2">Category</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => toggleItem(cat, selectedCategories, setSelectedCategories)}
              className={`px-3 py-1 rounded-full border ${
                selectedCategories.includes(cat)
                  ? 'bg-red-500 text-white border-red-500'
                  : 'bg-gray-100 text-gray-800'
              } hover:bg-red-100 transition`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range Slider */}
      <div>
        <h3 className="font-semibold mb-2">Price Range (Up to ₹{priceRange})</h3>
        <input
          type="range"
          placeholder='Price Range'
          min={100}
          max={5000}
          step={100}
          value={priceRange}
          onChange={(e) => handlePriceChange(Number(e.target.value))}
          className="w-full"
        />
      </div>

      {/* Brand Filter */}
      <div>
        <h3 className="font-semibold mb-2">Brands</h3>
        <div className="space-y-2">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => toggleItem(brand, selectedBrands, setSelectedBrands)}
              />
              {brand}
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
