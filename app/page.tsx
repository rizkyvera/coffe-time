import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <section className="px-10 py-10 text-[#6e543b] bg-[#f5f7ff]">
          <h1 className="text-5xl font-bold">
            Coffee <span className="text-[#6e543b]">Time</span>
          </h1>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 items-start gap-8">
            <p className="text-lg">Coffee Time, More Than Just Coffee</p>
            <p className="max-w-md">Nikmati kopi terbaik dari petani lokal Uganda dan berbagai daerah lain di dunia. Dibuat dengan cinta, disajikan dengan penuh kehangatan.</p>
            <div className="flex md:justify-end">
              <Link href="/products">
                <button
                  className="bg-[#6e543b] text-white px-6 py-3 rounded-3xl
                   hover:bg-gray-200 hover:text-black transition-colors duration-300"
                >
                  Explore Our Products
                </button>
              </Link>
            </div>
          </div>
          <div className="relative w-full h-[600px] mt-6 rounded-lg overflow-hidden shadow-lg">
            <Image src="/kopi.jpeg" alt="Industrial architecture" fill className="object-cover" />
          </div>
        </section>

        <div className="mt-10 px-10 text-[#6e543b] text-center">
          <h1 className="text-3xl font-bold">Discover the authentic taste of Africa</h1>
          <p className="mt-4 px-6 md:px-20">Discover all the flavours of Africa with our premium coffees, teas and cocoa. </p>
          <p className="mt-4 px-6 md:px-20">
            Each product is selected for its unique flavor, respecting local traditions and ensuring a fair and sustainable supply chain. We work directly with producers to offer an unmistakable taste experience, which enhances the richness
            and variety of African soils.
          </p>
          <div className=" relative w-full h-[600px] mt-6 rounded-lg overflow-hidden shadow-lg">
            <Image src="/petani4.jpg" alt="Industrial architecture" fill className="object-cover" />
          </div>
          <section className="px-10 py-10 bg-gray-50 text-center">
            <h2 className="text-3xl font-bold text-[#6e543b] mb-8">Quality, Ethics, Sustainability</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl shadow-md p-6">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-semibold text-[#2b2b2b]">Superior Quality</h3>
                <p className="mt-2 text-gray-600">Artisanal cultivation and traditional methods for an unmistakable taste that respects biodiversity and the environment.</p>
                <Link href="#" className="mt-4 inline-block text-[#6e543b] font-medium hover:underline">
                  Read more
                </Link>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-6">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-[#2b2b2b]">Support for Communities</h3>
                <p className="mt-2 text-gray-600">Fair and direct payments to farmers to ensure dignity and development for East African communities.</p>
                <Link href="#" className="mt-4 inline-block text-[#6e543b] font-medium hover:underline">
                  Read more
                </Link>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-6">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold text-[#2b2b2b]">Respect for the Environment</h3>
                <p className="mt-2 text-gray-600">Respect for ecosystems, biodiversity and local traditions by supporting sustainable agriculture and small producers.</p>
                <Link href="#" className="mt-4 inline-block text-[#6e543b] font-medium hover:underline">
                  Read more
                </Link>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </main>
  );
}
