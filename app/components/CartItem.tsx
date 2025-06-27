'use client';

import Image from 'next/image';
import React from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const CartItem = ({ product }: { product: Product }) => {
  return (
    <div className="flex gap-4 p-4 bg-white rounded-md shadow-sm">
      <Image
        src={product.image}
        alt={product.title}
        width={100}
        height={80}
        className="rounded-md object-cover w-32 h-24"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p className="text-red-600 font-medium">₹{product.price}</p>
      </div>
    </div>
  );
};

export default CartItem;
