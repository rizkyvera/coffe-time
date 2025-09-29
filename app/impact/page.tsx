import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

const Impact = () => {
  return (
    <main>
      <Navbar />
      <div className="pt-24">
        <section className="mt-10 px-10 text-[#6e543b] bg-[#f5f7ff]">
          <div className="text-3xl font-bold text-[#6e543b] text-center">
            <h1>Brewing Impact Together</h1>
          </div>
        </section>

        <section className="px-10 py-10 bg-gray-50 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-2xl shadow-md p-6 border-t-4 border-[#6e543b]">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-base font-semibold text-[#2b2b2b]">Dampak Sosial</h3>
              <p className="text-sm mt-2 text-gray-600">Memberdayakan komunitas petani kopi di Uganda dan Indonesia.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 border-t-4 border-[#6e543b]">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-base font-semibold text-[#2b2b2b]">Dampak Ekonomi</h3>
              <p className="text-sm mt-2 text-gray-600">Membuka peluang kerja, serta mendukung ekonomi lokal dengan membeli langsung dari petani.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 border-t-4 border-[#6e543b]">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-base font-semibold text-[#2b2b2b]">Dampak Lingkungan</h3>
              <p className="text-sm mt-2 text-gray-600">Program penanaman pohon, zero waste, dan eco-friendly packaging.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 border-t-4 border-[#6e543b]">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-base font-semibold text-[#2b2b2b]">Customer Contribution</h3>
              <p className="text-sm mt-2 text-gray-600">Setiap cangkir kopi yang kamu beli ikut membantu keberlangsungan hidup para petani kopi.</p>
            </div>
          </div>
          <div className="relative w-full h-[600px] mt-6 rounded-lg overflow-hidden shadow-lg">
            <Image src="/master1.jpg" alt="Industrial architecture" fill className="object-cover" />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
};

export default Impact;
