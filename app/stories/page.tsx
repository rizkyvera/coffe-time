import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

type Article = {
  id: number;
  image: string;
  category: string;
  title: string;
  description: string;
  date: string;
};

const articles: Article[] = [
  {
    id: 1,
    image: '/kopi3.jpg',
    category: 'Our Writings',
    title: 'Why Ugandan mountain coffee is among the best in the world',
    description: 'Uganda, known as the “pearl of Africa”, is one of the richest biodiversity regions and among the most suitable...',
    date: 'Tuesday, March 18, 2025',
  },
  {
    id: 2,
    image: '/kopi4.jpg',
    category: 'Our Writings',
    title: 'Sustainable agriculture in Africa: strategies and impact in Uganda',
    description: 'The adoption of environmentally sustainable models in agriculture is a key strategy to ensure both economic and ecological...',
    date: 'Monday, March 10, 2025',
  },
  {
    id: 3,
    image: '/kopi.jpeg',
    category: 'Radio24',
    title: 'The economy in pink: stories of coffee and cocoa women',
    description: 'The impact of women in the coffee and cocoa economy is remarkable, from farming to leadership in the global market...',
    date: 'Saturday, March 8, 2025',
  },
];

const Stories = () => {
  return (
    <main>
      <Navbar />
      <div className="pt-24">
        <section className="mt-10 px-10 text-[#6e543b] bg-[#f5f7ff]">
          <div className="text-3xl font-bold text-[#6e543b] text-center">
            <h1>Stories Brewed with Passion</h1>
          </div>
        </section>

        <section className="px-10 py-12 bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link key={article.id} href={`/stories/${article.id}`} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <Image src={article.image} alt={article.title} width={500} height={300} className="w-full h-56 object-cover" />
                <div className="p-6 text-left">
                  <span className="bg-[#6e543b]/10 text-[#6e543b] text-xs font-semibold px-3 py-1 rounded-md">{article.category}</span>
                  <h3 className="text-lg font-semibold mt-3 text-[#2b2b2b]">{article.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{article.description}</p>
                  <div className="flex items-center gap-2 text-gray-500 text-xs mt-4">
                    <span>📅</span>
                    <span>{article.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
};

export default Stories;
