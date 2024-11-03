import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

function Header() {
  return (
    <div>
      <div className='flex items-center justify-between p-5 shadow-sm'>
        <Image
          src='logo.svg'
          alt='logo'
          width={100}
          height={100}
          className='w-[150px] md:w-[200px]'
        />
        <ul className='hidden text-lg font-medium md:flex gap-14'>
          <li className='transition-all duration-300 cursor-pointer hover:text-primary'>
            Product
          </li>
          <li className='transition-all duration-300 cursor-pointer hover:text-primary'>
            Pricing
          </li>
          <li className='transition-all duration-300 cursor-pointer hover:text-primary'>
            Contact Us
          </li>
          <li className='transition-all duration-300 cursor-pointer hover:text-primary'>
            About Us
          </li>
        </ul>
        <div className='flex gap-5'>
          <Button variant='ghost'>Login</Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
