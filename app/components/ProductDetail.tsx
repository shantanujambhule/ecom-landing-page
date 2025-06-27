'use client';

import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import Reviews from './Reviews';
import Image from 'next/image';
import { useAppContext } from '@/app/context/AppContext';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  rating?: number;
}

const ProductDetail = ({ product }: { product: Product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useAppContext();

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  const validImage = product.image?.trim() || '/placeholder.png';

  return (
    <div className="flex flex-col lg:flex-row gap-10">
      {/* Image */}
      <div className="w-full lg:w-1/2">
        <Image
          src={validImage}
          alt={product.title}
          width={600}
          height={400}
          className="rounded-md w-full object-cover max-h-[500px]"
        />
      </div>

      {/* Details */}
      <div className="w-full lg:w-1/2 space-y-4">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-red-600 text-xl font-semibold">₹{product.price}</p>
        <p className="text-gray-600">{product.description}</p>

        <p className="text-sm text-gray-500">
          <span className="font-semibold">Category:</span> {product.category}
        </p>

        {/* Quantity Selector */}
        <div className="flex items-center gap-2 mt-4">
          <label htmlFor="quantity" className="font-medium">Quantity:</label>
          <input
            type="number"
            id="quantity"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-20 px-2 py-1 border rounded"
          />
        </div>

        <button
          onClick={handleAddToCart}
          className="bg-red-600 text-white px-6 py-3 rounded-md mt-4 hover:bg-red-700 flex items-center gap-2"
        >
          <ShoppingCart size={20} />
          Add to Cart
        </button>

        {/* Reviews */}
        <Reviews rating={product.rating ?? 0} />
      </div>
    </div>
  );
};

export default ProductDetail;
