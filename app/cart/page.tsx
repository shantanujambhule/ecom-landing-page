'use client';

import { useAppContext } from '../context/AppContext';
import CartItem from '../components/CartItem';



export default function CartPage() {
  const { cart } = useAppContext();
 

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="pt-32 px-4 md:px-10 lg:px-40 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item, index) => (
              <CartItem key={index} product={item} />
            ))}
          </div>

          {/* Billing Summary */}
          <div className="mt-10 bg-gray-100 p-6 rounded-md">
            <h2 className="text-xl font-semibold mb-4">Billing Summary</h2>
            <div className="flex justify-between items-center text-lg font-medium">
              <span>Total:</span>
              <span>₹{totalPrice.toLocaleString()}</span>
            </div>

            <button
              onClick={() => alert('Checkout not implemented yet')}
              className="mt-6 w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
