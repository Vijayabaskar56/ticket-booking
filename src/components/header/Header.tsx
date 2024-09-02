import Link from 'next/link'
import Image from 'next/image'
import { Search } from '@/components/header/Search'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Heart, ShoppingBag, User } from 'lucide-react'

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
  { href: '/signin', icon: User },
]

export function Header() {
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
            <Search />
            {sideNavLinks.map(({ href, icon: Icon }) => (
              <Link key={href} href={href} className="text-gray-700 hover:text-gray-900">
                <Icon className="h-5 w-5" />
              </Link>
            ))}
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  )
}