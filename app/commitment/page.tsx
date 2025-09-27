import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

const Commitment = () => {
  return (
    <main>
      <Navbar />
      <div className="pt-24">
        <section className="mt-10 px-10 text-[#6e543b] bg-[#f5f7ff]">
          <div className="text-3xl font-bold text-[#6e543b] text-center">
            <h1>Our Promise to You</h1>
          </div>
          <div className="relative w-full h-[600px] mt-6 rounded-lg overflow-hidden shadow-lg">
            <Image src="/kopi.jpeg" alt="Industrial architecture" fill className="object-cover" />
          </div>
        </section>

        <section className="px-10 py-10 bg-gray-50 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-2xl shadow-md p-6 border-t-4 border-[#6e543b]">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-base font-semibold text-[#2b2b2b]">Quality First</h3>
              <p className="text-sm mt-2 text-gray-600">Hanya menggunakan biji kopi terbaik yang dipilih secara selektif.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 border-t-4 border-[#6e543b]">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-base font-semibold text-[#2b2b2b]">Fair Trade</h3>
              <p className="text-sm mt-2 text-gray-600">Bekerja langsung dengan petani kopi Uganda & lokal untuk memastikan mereka mendapat harga yang adil.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 border-t-4 border-[#6e543b]">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-base font-semibold text-[#2b2b2b]">Sustainability</h3>
              <p className="text-sm mt-2 text-gray-600">Mengurangi plastik sekali pakai, menggunakan kemasan ramah lingkungan, dan mendukung program penghijauan.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 border-t-4 border-[#6e543b]">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-base font-semibold text-[#2b2b2b]">Community</h3>
              <p className="text-sm mt-2 text-gray-600">Coffee Time adalah ruang untuk berkumpul, berbagi cerita, dan membangun koneksi.</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
};

export default Commitment;
