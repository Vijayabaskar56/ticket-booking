import Link from 'next/link';
import Image from 'next/image';

import { getServerAuthSession } from '@/server/auth';
import Account from './Account';
import { Button } from '@/components/ui/button';

interface NavLink {
 name: string;
 href: string;
 collapsible?: boolean;
}

const navLinks: NavLink[] = [
 { name: 'Home', href: '/', collapsible: true },
 { name: 'About Us', href: '/about-us', collapsible: true },
 { name: 'Menu', href: '/menu' },
 { name: 'Gallery', href: '/gallery' },
 { name: 'Contact Us', href: '/contact-us' },
];


export async function Header() {
 const session = await getServerAuthSession();
 return (
  <header className="w-full">
   <div className="bg-black text-white py-2 px-4 text-center text-sm">
    Get 25% discount on a first purchase.
   </div>
   <div className="relative h-14 bg-zinc-100 border-b mb-[0.3] border-primary">
    <div className="container mx-auto flex h-full items-center justify-between px-4">
     <div className="flex items-center space-x-11">
      <Link href="/">
       <Image src='/logo.png'
        alt="KARA logo" width={100} height={35} />
      </Link>
      <nav className="hidden md:block">
       <ul className="flex space-x-11">
        {navLinks.map((link) => (
         <li key={link.name}>
          <Link
           href={link.href}
           className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
           {link.name}
          </Link>
         </li>
        ))}
       </ul>
      </nav>
     </div>
     <div className="flex items-center space-x-4">
      <Button type='button' className='bg-primary-gradient'>
       <Link href='/booking'>
        Book Now
       </Link>
      </Button>
      <Account session={session} />
     </div>
    </div>
   </div>
  </header>
 );
}
