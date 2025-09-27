'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import { useCart } from '../context/CartContext';
import { SignedIn, SignedOut } from '@clerk/nextjs';

export default function Products() {
  const { addToCart } = useCart();

  const products = [
    { id: 1, name: 'ICED Espresso – bustina', price: 200000, image: '/master1.jpg' },
    { id: 2, name: 'AMAANYI, 100% Arabica beans', price: 250000, image: '/kopi3.jpg' },
    { id: 3, name: 'AMAANYI, Arabica ground coffee', price: 300000, image: '/kopi4.jpg' },
    { id: 4, name: 'Roastery Special Blend', price: 200000, image: '/kopi2.jpg' },
  ];

  const formatRupiah = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <main>
      <Navbar />

      <div className="pt-24">
        <div className="mt-10 text-3xl font-bold text-[#6e543b] text-center">
          <h1>Our Coffee Selection</h1>
        </div>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-8 px-10 py-10">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg shadow-sm overflow-hidden bg-white hover:shadow-lg transition">
              <div className="h-48 relative">
                <Image src={product.image} alt={product.name} fill className="object-cover" />
              </div>
              <div className="p-4 text-center">
                <h2 className="text-[#6e543b] font-semibold text-base">{product.name}</h2>
                <p className="text-gray-600 text-sm mt-2">{formatRupiah(product.price)}</p>

                <SignedIn>
                  <button onClick={() => addToCart(product)} className="mt-3 px-4 py-2 bg-[#6e543b] text-white rounded-full hover:bg-[#4e3b2a] transition">
                    Add to Cart
                  </button>
                </SignedIn>

                <SignedOut>
                  <button disabled className="mt-3 px-4 py-2 bg-gray-300 text-white rounded-full cursor-not-allowed">
                    Sign in to Add
                  </button>
                </SignedOut>
              </div>
            </div>
          ))}
        </section>
      </div>

      <Footer />
    </main>
  );
}
