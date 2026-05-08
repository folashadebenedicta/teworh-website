'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from '@/components/ui/sheet'
import Image from 'next/image'

const navLinks = [
  { label: 'About us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Success stories', href: '/success-stories' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => pathname.startsWith(href)

  const linkClass = (href: string, base: string) =>
    `${base} font-medium transition-colors duration-200 ${
      isActive(href) ? 'text-[#009606]' : 'text-primary hover:text-primary/80'
    }`

  return (
    <header className="border-border sticky top-0 z-50 w-full border-b bg-white shadow-[0_4px_16px_0_rgba(0,0,0,0.06)]">
      <div className="mx-auto flex h-16 max-w-360 items-center justify-between gap-8 px-4 sm:px-6 md:h-18">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <Image
            src="/images/logo.png"
            alt="Tree coin"
            width={66}
            height={66}
            className="h-10 w-auto object-contain sm:h-12 md:h-16.5"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={linkClass(link.href, 'text-lg')}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden shrink-0 md:block">
          <Button asChild variant="accent" size="pill">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5 text-[#1d1e20]" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="flex w-72 flex-col px-6 pt-10">
            <SheetTitle className="sr-only">Navigation menu</SheetTitle>
            <SheetDescription className="sr-only">
              Main navigation links
            </SheetDescription>

            {/* Mobile logo */}
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="mb-8 flex items-center gap-2.5"
            >
              <Image
                src="/images/logo.png"
                alt="Tree coin"
                width={66}
                height={66}
                className="h-10 w-auto object-contain"
              />
            </Link>

            {/* Mobile nav links */}
            <nav className="flex flex-col gap-5">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={linkClass(link.href, 'text-base')}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile CTA — pinned to bottom */}
            <div className="py-4">
              <Button asChild variant="accent" size="pill" className="w-full">
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  Contact Us
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
