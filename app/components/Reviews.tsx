'use client';

import { Star } from 'lucide-react';

const Reviews = ({ rating }: { rating: number }) => {
  return (
    <div className="mt-6">
      <h2 className="font-semibold mb-2">Rating</h2>
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            fill={i < rating ? '#facc15' : 'none'}
            stroke="#facc15"
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
