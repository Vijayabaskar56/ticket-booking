import Link from 'next/link'
import Image from 'next/image'
import { Search } from '@/components/header/Search'
import { Heart, ShoppingBag, User } from 'lucide-react'
import { getServerAuthSession } from '@/server/auth'
import Account from './Account'

interface NavLink {
  name: string
  href: string
  collapsible?: boolean
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '/', collapsible: true },
  { name: 'About US', href: '/about-us', collapsible: true },
  { name: 'Menu', href: '/menu' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact Us', href: '/contact-us' },
]

const sideNavLinks = [
  { href: '/wishlist', icon: Heart },
  { href: '/cart', icon: ShoppingBag },
]

export async function Header() {
  const session = await getServerAuthSession();

  return (
    <header className="w-full">
      <div className="bg-black text-white py-2 px-4 text-center text-sm">
        Get 25% discount on a first purchase.
      </div>
      <div className="relative h-14 bg-white shadow-md shadow-gray-200">
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
            <button className="relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <Link href='/booking'>
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Book Now
                </span>
              </Link>
            </button>
            {sideNavLinks.map(({ href, icon: Icon }) => (
              <Link key={href} href={href} className="text-gray-700 hover:text-gray-900">
                <Icon className="h-5 w-5" />
              </Link>
            ))}
            <Account session={session} />
          </div>
        </div>
      </div>
    </header>
  )
}