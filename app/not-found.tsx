import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#f5f7ff] text-center">
      <h1 className="text-5xl font-bold text-[#6e543b] mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-6">Oops! Halaman yang kamu cari belum dibuat hehehe.</p>
      <div className="flex gap-4">
        <Link href="/" className="px-4 py-3 bg-[#6e543b] text-white rounded-full hover:bg-[#4e3b2a] transition">
          Kembali ke Homepage
        </Link>
      </div>
    </div>
  );
}
