import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const quickLinks = [
 { name: 'Home', href: '/' },
 { name: 'About Us', href: '/about-us' },
 { name: 'Menu', href: '/menu' },
];

const usefulLinks = [
 { name: 'Terms & Condition', href: '/terms-and-conditions' },
 { name: 'Refund Policy', href: '/refund-policy' },
 { name: 'Privacy Policy', href: '/privacy-policy' },
];

export function Footer() {
 return (
  <footer className=" text-black">
   <div className="container mx-auto px-4 py-8 md:py-12">
    <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
     <div>
      <Image
       src="/logo.png"
       alt="Smokehub Barbeque"
       width={150}
       height={150}
       className="mb-4"
      />
      <p className="text-sm">
       NO 3, 1st Floor, 80 Feet Road, 6th Block, Koramangala, Bangalore - 560095
      </p>
     </div>
     <div>
      <h3 className="mb-4 text-lg font-semibold uppercase">About Us</h3>
      <p className="text-sm">
       Unlike any other barbeques in town, we serve fully customized dishes as per customer requirements. We pride ourselves in being the first barbeque that also offers delightful Chinese starters.
      </p>
     </div>
     <div>
      <h3 className="mb-4 text-lg font-semibold uppercase">Quick Links</h3>
      <ul className="space-y-2">
       {quickLinks.map((link) => (
        <li key={link.name}>
         <Link href={link.href} className="text-sm hover:underline">
          <span className='text-primary-gradient mr-2'>
           ▶
          </span>
          {link.name}
         </Link>
        </li>
       ))}
      </ul>
     </div>
     <div>
      <h3 className="mb-4 text-lg font-semibold uppercase">Useful Links</h3>
      <ul className="space-y-2">
       {usefulLinks.map((link) => (
        <li key={link.name}>
         <Link href={link.href} className="text-sm hover:underline">
          <span className='text-primary-gradient mr-2'>
           ▶
          </span>
          {link.name}
         </Link>
        </li>
       ))}
      </ul>
     </div>
    </div>
   </div>

   <div className="border-t border-primary bg-zinc-100 py-4 text-center text-sm">
    <p>Copyright 2023 © Puff and plug. All rights reserved.</p>
   </div>
  </footer>
 );
}
