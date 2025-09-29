'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { SignInButton, UserButton, SignedIn, SignedOut } from '@clerk/nextjs';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const pathname = usePathname();
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#f5f7ff] shadow-md">
      <div className="flex items-center px-6 py-4 justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold text-[#6e543b]">LOGO</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-8 text-[#6e543b] font-medium">
          <Link href="/" className={`${pathname === '/' ? 'text-[#a38362]' : 'hover:text-[#a38362]'} transition-colors duration-300`}>
            Homepage
          </Link>
          <Link href="/products" className={`${pathname === '/products' ? 'text-[#a38362]' : 'hover:text-[#a38362]'} transition-colors duration-300`}>
            Products
          </Link>
          <Link href="/commitment" className={`${pathname === '/commitment' ? 'text-[#a38362]' : 'hover:text-[#a38362]'} transition-colors duration-300`}>
            Our Commitment
          </Link>
          <Link href="/stories" className={`${pathname === '/stories' ? 'text-[#a38362]' : 'hover:text-[#a38362]'} transition-colors duration-300`}>
            Our Stories
          </Link>
          <Link href="/impact" className={`${pathname === '/impact' ? 'text-[#a38362]' : 'hover:text-[#a38362]'} transition-colors duration-300`}>
            Our Impact
          </Link>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
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

          {/* Burger button (only mobile) */}
          <button className="md:hidden text-[#6e543b]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6 text-[#6e543b] font-medium bg-[#f5f7ff] shadow-md">
          <Link href="/" onClick={() => setIsOpen(false)} className={`${pathname === '/' ? 'text-[#a38362]' : ''}`}>
            Homepage
          </Link>
          <Link href="/products" onClick={() => setIsOpen(false)} className={`${pathname === '/products' ? 'text-[#a38362]' : ''}`}>
            Products
          </Link>
          <Link href="/commitment" onClick={() => setIsOpen(false)} className={`${pathname === '/commitment' ? 'text-[#a38362]' : ''}`}>
            Our Commitment
          </Link>
          <Link href="/stories" onClick={() => setIsOpen(false)} className={`${pathname === '/stories' ? 'text-[#a38362]' : ''}`}>
            Our Stories
          </Link>
          <Link href="/impact" onClick={() => setIsOpen(false)} className={`${pathname === '/impact' ? 'text-[#a38362]' : ''}`}>
            Our Impact
          </Link>
        </div>
      )}
    </nav>
  );
}
