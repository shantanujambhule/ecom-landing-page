'use client';

import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: number;
  title: string;
  price: number;
  image?: string; // image is now optional
  rating?: number;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (productId: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
const imageSrc =
  typeof product.image === 'string' && product.image.trim() !== ''
    ? product.image
    : '/placeholder.png';

  const altText = product.title || 'Product Image';

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-md transition p-4 flex flex-col">
      {/* ✅ Wrap Image + Title with Link */}
      <Link href={`/product/${product.id}`} className="block">
        <Image
          src={imageSrc}
          alt={altText}
          width={500}
          height={300}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
      </Link>

      <div className="flex justify-between items-center mb-2">
        <span className="text-red-600 font-bold text-md">₹{product.price}</span>

        {typeof product.rating === 'number' && (
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                fill={i < product.rating ? '#facc15' : 'none'}
                stroke="#facc15"
              />
            ))}
          </div>
        )}
      </div>

      <button
        onClick={() => onAddToCart(product.id)}
        className="mt-auto bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 flex items-center gap-2 justify-center"
      >
        <ShoppingCart size={18} />
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
