import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Junn Digital Ltd | Engineering Digital Business Infrastructure',
  description: 'Junn Digital Ltd is a technology company based in Nigeria, building software products and AI-powered business systems.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
        <header className="border-b border-gray-100 py-6 px-8 flex justify-between items-center max-w-7xl mx-auto w-full">
          <Link href="/">
            <Image src="/logo.png" alt="Junn Digital Ltd" width={40} height={50} className="h-10 w-auto" />
          </Link>
          <nav className="gap-8 flex font-medium text-[#013B50]">
            <Link href="/" className="hover:text-[#C7E160] transition-colors">Home</Link>
            <Link href="/about" className="hover:text-[#C7E160] transition-colors">About</Link>
            <Link href="/services" className="hover:text-[#C7E160] transition-colors">Services</Link>
          </nav>
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="bg-[#013B50] text-white py-16 px-8 mt-24">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-sm">
            <div>
              <h3 className="font-bold text-lg mb-4 text-[#C7E160]">Junn Digital Ltd</h3>
              <p>321A Akin Ogunlewe Street<br/>Victoria Island Lagos, 101241<br/>Nigeria</p>
              <p className="mt-4 text-gray-300">Email: info@junndigital.com</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-[#C7E160]">Legal</h3>
              <ul className="space-y-3 text-gray-300">
                <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-gray-400 md:mt-12">&copy; {new Date().getFullYear()} Junn Digital Ltd. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
