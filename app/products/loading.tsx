import Navbar from '../components/Navbar';

export default function Loading() {
  return (
    <main>
      <Navbar />
      <div className="h-screen flex flex-col justify-center items-center bg-[#f5f7ff] text-center">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-[#6e543b] border-t-transparent rounded-full animate-spin mb-6"></div>

        <h2 className="text-2xl font-semibold text-[#6e543b]">Loading Our Coffee Product...</h2>
        <p className="text-gray-600 mt-2">Tunggu sebentar ya gais ☕</p>
      </div>
    </main>
  );
}
