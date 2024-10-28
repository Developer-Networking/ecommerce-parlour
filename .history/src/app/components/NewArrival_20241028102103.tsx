import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaTimes, FaShoppingCart } from 'react-icons/fa'; 
import Link from 'next/link';
import { useAppSelector } from '@/redux/hooks';

const Navbar = ({ setShowCart }: any) => {
  const cartCount = useAppSelector((state) => state.cartReducer.length);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  return (
    <div className="bg-white py-4 sticky top-0 z-10">
      <div className="container flex justify-between items-center">
        <RxHamburgerMenu 
          className="sm:hidden text-[26px] cursor-pointer" 
          onClick={() => setIsMenuOpen(true)} 
        />
        
        <Link href="/" className="text-4xl font-bold hover:text-rose-800">GlamAura</Link>
        
        <ul className="hidden sm:flex gap-6 font-bold">
          <li>
            <Link href="/" className='navLink'>Home</Link>
          </li>
          <li>
            <Link href="/shop" className='navLink'>Shop</Link>
          </li>
          <li>
            <Link href="/about" className='navLink'>About</Link>
          </li>
          <li>
            <Link href="/contact" className='navLink'>Contact</Link>
          </li>
        </ul>        
        <div className="flex gap-4 px-14 text-[26px]">
          <div className="relative cursor-pointer" onClick={() => setShowCart(true)}>
            <FaShoppingCart />
            <div className="absolute top-[-20px] right-[-15px] bg-red-600 w-[25px] h-[25px] rounded-full text-white text-[14px] grid place-items-center ">
              {cartCount}
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden bg-white shadow-lg">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-bold">Menu</h2>
            <FaTimes 
              className="text-[26px] cursor-pointer" 
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
          <ul className="flex flex-col p-4 items-center">
            <li className="py-2 font-bold">
              <Link href="/" className='navLink ' onClick={() => setIsMenuOpen(false)}>Home</Link>
            </li>
            <li className="py-2 font-bold">
              <Link href="/shop" className='navLink' onClick={() => setIsMenuOpen(false)}>Shop</Link>
            </li>
            <li className="py-2 font-bold">
              <Link href="/about" className='navLink' onClick={() => setIsMenuOpen(false)}>About</Link>
            </li>
            <li className="py-2 font-bold">
              <Link href="/contact" className='navLink' onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;