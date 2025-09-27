'use client';
import React from 'react';
import { useCart } from '../context/CartContext';
import Image from 'next/image';
import Navbar from '../components/Navbar';

// Fungsi format Rupiah
const formatRupiah = (amount: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0, // tanpa desimal
  }).format(amount);
};

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  // Total price
  const totalPrice = cart.reduce((acc, item) => acc + Number(item.price) * item.quantity, 0);

  return (
    <main>
      <Navbar />
      <div className="pt-24 px-10">
        <h1 className="text-3xl font-bold text-[#6e543b] mb-6">Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center gap-4 border p-4 rounded-lg">
                <div className="w-24 h-24 relative">
                  <Image src={item.image} alt={item.name} fill className="object-cover rounded" />
                </div>
                <div className="flex-1">
                  <h2 className="font-semibold text-[#6e543b]">{item.name}</h2>
                  <p className="text-gray-600">
                    {formatRupiah(item.price)} x {item.quantity}
                  </p>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="px-3 py-1 bg-red-600 text-white rounded-full hover:bg-red-700 transition">
                  Remove
                </button>
              </div>
            ))}

            <div className="flex justify-between items-center mt-6">
              <p className="text-xl font-bold">Total: {formatRupiah(totalPrice)}</p>
              <button onClick={clearCart} className="px-4 py-2 bg-[#6e543b] text-white rounded-full hover:bg-[#4e3b2a] transition">
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
