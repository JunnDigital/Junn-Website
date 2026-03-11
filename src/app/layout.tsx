import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Junn Digital Ltd | Engineering Digital Business Infrastructure',
  description: 'Junn Digital Ltd is a technology company based in Nigeria, building software products and AI-powered business systems.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col selection:bg-[#C7E160] selection:text-[#013B50]`}>
        
        {/* Navigation */}
        <header className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 transition-all">
          <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
              <Image src="/logo.png" alt="Junn Digital Ltd" width={140} height={48} className="h-10 w-auto object-contain" priority />
            </Link>
            <nav className="hidden md:flex gap-10 text-sm font-semibold tracking-wide text-[#013B50]">
              <Link href="/" className="hover:text-[#C7E160] transition-colors">HOME</Link>
              <Link href="/about" className="hover:text-[#C7E160] transition-colors">ABOUT</Link>
              <Link href="/services" className="hover:text-[#C7E160] transition-colors">SERVICES</Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow pt-20">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-[#013B50] text-white pt-20 pb-10 px-6 border-t-4 border-[#C7E160]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            
            <div className="md:col-span-5">
              <Image src="/logo.png" alt="Junn Digital Ltd" width={120} height={40} className="h-8 w-auto brightness-0 invert opacity-90 mb-6" />
              <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
                Engineering digital infrastructure, automation systems, and SaaS scaling solutions for modern businesses.
              </p>
            </div>

            <div className="md:col-span-4">
              <h4 className="text-[#C7E160] font-mono text-xs tracking-widest uppercase mb-6">Headquarters</h4>
              <address className="not-italic text-sm text-gray-300 leading-relaxed space-y-1">
                <p>321A Akin Ogunlewe Street</p>
                <p>Victoria Island Lagos, 101241</p>
                <p>Nigeria</p>
                <p className="pt-2">
                  <a href="mailto:info@junndigital.com" className="hover:text-white transition-colors">info@junndigital.com</a>
                </p>
              </address>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-[#C7E160] font-mono text-xs tracking-widest uppercase mb-6">Legal</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
            
          </div>
          <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <p>&copy; {new Date().getFullYear()} Junn Digital Ltd. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Registered in Nigeria.</p>
          </div>
        </footer>

      </body>
    </html>
  )
}
