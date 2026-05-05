'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Send } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Success Stories', href: '/success-stories' },
]

const legalLinks = [
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Contact', href: '/contact' },
  { label: 'Partner with Us', href: '/partner' },
]

const socialLinks = [
  {
    src: '/icons/facebook.svg',
    href: 'https://facebook.com',
    label: 'Facebook',
  },
  {
    src: '/icons/instagram.svg',
    href: 'https://instagram.com',
    label: 'Instagram',
  },
  {
    src: '/icons/linkedin.svg',
    href: 'https://www.linkedin.com/company/teworh-sports-skills-centre/',
    label: 'LinkedIn',
  },
  { src: '/icons/x.svg', href: 'https://twitter.com', label: 'Twitter' },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden py-16">
      {/* Watermark */}
      <span
        aria-hidden="true"
        className="font-redrose pointer-events-none absolute inset-0 flex items-center justify-center text-[20.5vw] font-bold text-[#F4FFF6] uppercase select-none"
      >
        TEWORH
      </span>

      <div className="relative mx-auto max-w-360 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1 — Brand + newsletter */}
          <div className="flex flex-col gap-6 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex shrink-0 items-center gap-2.5">
              <Image
                src="/images/logo.png"
                alt="Tree coin"
                width={66}
                height={66}
                className="h-10 w-auto object-contain sm:h-12 md:h-16.5"
              />
            </Link>

            <p className="text-foreground max-w-xs text-sm leading-relaxed font-medium">
              We build, design and manage world-class sports infrastructure and
              develop athlete skills.
            </p>

            <div className="flex flex-col gap-3">
              <p className="text-primary-footer text-lg font-black tracking-wide uppercase">
                Join Our Newsletter
              </p>
              <div className="flex items-center gap-2">
                <Input
                  type="email"
                  placeholder="Email"
                  className="border-border h-10 rounded-md bg-white text-sm focus-visible:ring-[#1a5c2a]/30"
                />
                <Button
                  size="icon"
                  className="bg-accent hover:bg-accent/90 h-10 w-10 shrink-0 cursor-pointer rounded-md"
                  aria-label="Subscribe"
                >
                  <Send className="h-4 w-4 text-white" />
                </Button>
              </div>
            </div>
          </div>

          {/* Col 2 — Company */}
          <div className="flex flex-col gap-4">
            <h3 className="text-primary-footer text-lg font-black tracking-wide uppercase">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {companyLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground hover:text-primary-footer text-lg font-medium transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Legal */}
          <div className="flex flex-col gap-4">
            <h3 className="text-primary-footer text-lg font-black tracking-wide uppercase">
              Legal
            </h3>
            <ul className="flex flex-col gap-3">
              {legalLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground hover:text-primary-footer text-lg font-medium transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-primary-footer text-lg font-black tracking-wide uppercase">
              Contact
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:teworhsportsandskills@gmail.com"
                  className="text-foreground hover:text-primary-footer text-lg font-medium transition-colors duration-200"
                >
                  teworhsportsandskills@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+2349012397998"
                  className="text-foreground hover:text-primary-footer text-lg font-medium transition-colors duration-200"
                >
                  09012397998
                </a>
              </li>
            </ul>

            {/* Socials */}
            <div className="flex items-center gap-3 pt-1">
              <span className="text-foreground hover:text-primary-footer text-base font-medium transition-colors duration-200">
                Follow Us
              </span>
              <div className="flex items-center gap-2">
                {socialLinks.map(({ src, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-6 w-6 items-center justify-center transition-colors duration-200"
                  >
                    <Image src={src} alt={label} width={24} height={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-[#EBEBEB] pt-6 text-center">
          <p className="text-foreground hover:text-primary-footer text-lg font-normal transition-colors duration-200">
            © Teworh 2026
          </p>
        </div>
      </div>
    </footer>
  )
}
