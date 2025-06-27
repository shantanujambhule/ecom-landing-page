'use client';

import { useAppContext } from '../context/AppContext';
import { ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const { cart, searchQuery, setSearchQuery } = useAppContext();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/');
  };

  const handleCartClick = () => {
    router.push('/cart');
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow px-6 md:px-10 lg:px-40 py-4 flex justify-between items-center">
      <div
        className="text-3xl font-bold cursor-pointer"
        onClick={() => router.push('/')}
      >
        <span className="text-red-500">Q</span>uickShop
      </div>

      {/* Search Form */}
      <form onSubmit={handleSubmit} className="flex items-center space-x-2 w-1/2">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border rounded-md w-full"
          placeholder="Search products..."
        />
        <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded-md">
          Search
        </button>
      </form>

      {/* Cart Button */}
      <button
        onClick={handleCartClick}
        className="relative bg-red-500 text-white px-4 py-2 rounded-full flex items-center gap-2"
      >
        <ShoppingCart size={24} />
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-white text-red-600 font-bold text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {cart.length}
          </span>
        )}
      </button>
    </div>
  );
};

export default Navbar;
