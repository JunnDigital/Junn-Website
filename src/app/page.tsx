import Link from 'next/link'

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative px-6 py-32 md:py-48 bg-gray-50 overflow-hidden">
        {/* Subtle background grid pattern for tech feel */}
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#013B50 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <div className="inline-block px-3 py-1 mb-8 border border-[#013B50]/20 rounded-full text-xs font-mono font-semibold text-[#013B50] tracking-widest uppercase bg-white/50 backdrop-blur-sm">
              Technology Architecture
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#013B50] mb-8 leading-[1.1]">
              Engineering Digital <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#013B50] to-gray-500">Business Infrastructure.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl leading-relaxed font-light">
              Junn Digital Ltd is a Nigerian technology company building AI automation systems, software tools, and resilient SaaS products for the modern enterprise.
            </p>
            <Link href="/services" className="inline-flex items-center justify-center bg-[#013B50] text-white px-8 py-4 text-sm font-semibold tracking-wide hover:bg-[#012a3a] transition-all shadow-lg hover:shadow-xl rounded-sm">
              EXPLORE OUR SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* Trust/Identity Banner */}
      <section className="border-y border-gray-200 bg-white px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-mono text-sm tracking-wide text-gray-500 uppercase">Registered Nigerian Entity</p>
          <p className="font-mono text-sm tracking-wide text-gray-500 uppercase">Deploying at Scale</p>
          <p className="font-mono text-sm tracking-wide text-gray-500 uppercase">Enterprise Architecture</p>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="px-6 py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 max-w-2xl">
            <h2 className="text-4xl font-bold text-[#013B50] tracking-tight mb-6">Our Ecosystem</h2>
            <p className="text-lg text-gray-600">
              We operate distinct business units focusing on artificial intelligence and digital commerce infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Junn AI Card */}
            <div className="group relative p-12 bg-gray-50 border border-gray-100 hover:border-[#C7E160] transition-colors duration-300 rounded-sm">
              <div className="w-12 h-12 bg-[#013B50] text-[#C7E160] flex items-center justify-center mb-8 rounded-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-3xl font-bold text-[#013B50] mb-4">Junn AI</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Intelligent AI agents designed to process inquiries, qualify leads, book appointments, and automate front-line customer support autonomously.
              </p>
              <div className="w-full h-[1px] bg-gray-200 group-hover:bg-[#C7E160] transition-colors"></div>
            </div>

            {/* Vaendora Card */}
            <div className="group relative p-12 bg-gray-50 border border-gray-100 hover:border-[#C7E160] transition-colors duration-300 rounded-sm">
              <div className="w-12 h-12 bg-[#013B50] text-[#C7E160] flex items-center justify-center mb-8 rounded-sm">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
              </div>
              <h3 className="text-3xl font-bold text-[#013B50] mb-4">Vaendora</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Digital commerce tools for African merchants. Providing business websites, robust payments, omnichannel messaging, and targeted email marketing infrastructure.
              </p>
              <div className="w-full h-[1px] bg-gray-200 group-hover:bg-[#C7E160] transition-colors"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-32 bg-[#013B50] relative overflow-hidden">
        {/* Abstract shape */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full border-[40px] border-white/5 opacity-50"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Systematic Digital Growth.</h2>
          <p className="text-xl text-gray-300 mb-12 font-light">
            We don&apos;t do marketing hype. We write code, build systems, and deploy software that solves operational bottlenecks.
          </p>
          <a href="mailto:info@junndigital.com" className="inline-flex items-center justify-center bg-[#C7E160] text-[#013B50] px-8 py-4 text-sm font-bold tracking-wide hover:bg-white transition-colors rounded-sm">
            CONTACT US
          </a>
        </div>
      </section>
    </div>
  )
}
// minor tweak: add header note
// Trigger update
