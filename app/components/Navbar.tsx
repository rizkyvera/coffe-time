'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SignInButton, UserButton, SignedIn, SignedOut } from '@clerk/nextjs';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const pathname = usePathname();
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#f5f7ff] shadow-md">
      <div className="flex items-center px-10 py-6 justify-between">
        <h1 className="text-xl font-bold text-[#6e543b]">LOGO</h1>

        <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-8 text-[#6e543b] font-medium">
          <Link href="/" className={`transition-colors duration-300 ${pathname === '/' ? 'text-[#a38362]' : 'hover:text-[#a38362]'}`}>
            Homepage
          </Link>
          <Link href="/products" className={`transition-colors duration-300 ${pathname === '/products' ? 'text-[#a38362]' : 'hover:text-[#a38362]'}`}>
            Products
          </Link>
          <Link href="/commitment" className={`transition-colors duration-300 ${pathname === '/commitment' ? 'text-[#a38362]' : 'hover:text-[#a38362]'}`}>
            Our Commitment
          </Link>
          <Link href="/stories" className={`transition-colors duration-300 ${pathname === '/stories' ? 'text-[#a38362]' : 'hover:text-[#a38362]'}`}>
            Our Stories
          </Link>
          <Link href="/impact" className={`transition-colors duration-300 ${pathname === '/impact' ? 'text-[#a38362]' : 'hover:text-[#a38362]'}`}>
            Our Impact
          </Link>
        </div>

        <div className="flex items-center ml-auto gap-4">
          <SignedIn>
            <Link href="/cart" className="relative text-gray-700 hover:text-gray-900">
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">{totalItems}</span>}
            </Link>
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-[#6e543b] px-4 py-2 text-sm text-white hover:bg-[#a38362] transition-colors duration-300 rounded-full">Sign In</button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
