import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <section className="py-24 md:py-32 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#013B50] mb-8 leading-tight">
          Engineering Digital Business Infrastructure
        </h1>
        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
          Junn Digital Ltd is a technology company based in Nigeria. We build AI automation systems, software tools, and SaaS products designed to scale modern businesses.
        </p>
        <Link href="/services" className="inline-block bg-[#013B50] text-white px-8 py-4 rounded font-medium hover:bg-opacity-90 transition-colors shadow-sm">
          View Our Solutions
        </Link>
      </section>

      <section className="py-24 border-t border-gray-100">
        <h2 className="text-3xl font-bold text-[#013B50] mb-16 tracking-tight">Ecosystem &amp; Platforms</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-10 border border-gray-100 bg-gray-50 bg-opacity-50 rounded-lg">
            <h3 className="text-2xl font-bold text-[#013B50] mb-4 flex items-center gap-3">
              <span className="w-3 h-3 bg-[#C7E160] rounded-full inline-block"></span>
              Junn AI
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Intelligent AI agents designed to help businesses answer inquiries, qualify leads, book appointments, and automate front-line customer support securely and efficiently.
            </p>
          </div>
          <div className="p-10 border border-gray-100 bg-gray-50 bg-opacity-50 rounded-lg">
            <h3 className="text-2xl font-bold text-[#013B50] mb-4 flex items-center gap-3">
              <span className="w-3 h-3 bg-[#C7E160] rounded-full inline-block"></span>
              Vaendora
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Digital commerce tools for African merchants. Vaendora provides business websites, robust payments, AI customer support, omnichannel messaging, and targeted email marketing.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-[#013B50] mb-6">Built for Scale and Reliability</h2>
        <p className="text-gray-600">
          As a registered Nigerian technology company, Junn Digital Ltd operates at the intersection of business automation and digital architecture. We deploy code into real-world operations.
        </p>
      </section>
    </div>
  )
}
