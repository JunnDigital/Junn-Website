export default function Services() {
  return (
    <div className="w-full">
      <section className="px-6 py-24 md:py-32 bg-[#013B50] text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">Capabilities.</h1>
          <p className="text-xl text-gray-300 max-w-2xl font-light">Specialized technology solutions for modern business infrastructure.</p>
        </div>
      </section>

      <section className="px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto space-y-24">
          
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4 sticky top-32">
              <span className="text-6xl font-bold text-gray-100 absolute -top-10 -left-6 -z-10">01</span>
              <h2 className="text-3xl font-bold text-[#013B50]">Infrastructure</h2>
              <div className="w-12 h-1 bg-[#C7E160] mt-6"></div>
            </div>
            <div className="md:col-span-8">
              <h3 className="text-2xl font-bold text-[#013B50] mb-4">Digital Business Architecture</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We design, build, and maintain the underlying software required for modern businesses to operate. This encompasses scalable web applications, secure databases, and enterprise-grade API architectures that power operations on the internet. We ensure your data is structured, secure, and accessible exactly when your systems need it.
              </p>
            </div>
          </div>

          <div className="w-full h-px bg-gray-100"></div>

          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4 sticky top-32">
              <span className="text-6xl font-bold text-gray-100 absolute -top-10 -left-6 -z-10">02</span>
              <h2 className="text-3xl font-bold text-[#013B50]">Automation</h2>
              <div className="w-12 h-1 bg-[#C7E160] mt-6"></div>
            </div>
            <div className="md:col-span-8">
              <h3 className="text-2xl font-bold text-[#013B50] mb-4">AI Automation Systems</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We deploy practical artificial intelligence into normal business workflows. Through our Junn AI division, we develop intelligent agents capable of managing customer inquiries, processing appointments, qualifying lead traffic, and automating tier-1 customer support. We reduce manual overhead by converting repetitive human tasks into reliable software functions.
              </p>
            </div>
          </div>

          <div className="w-full h-px bg-gray-100"></div>

          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4 sticky top-32">
              <span className="text-6xl font-bold text-gray-100 absolute -top-10 -left-6 -z-10">03</span>
              <h2 className="text-3xl font-bold text-[#013B50]">SaaS</h2>
              <div className="w-12 h-1 bg-[#C7E160] mt-6"></div>
            </div>
            <div className="md:col-span-8">
              <h3 className="text-2xl font-bold text-[#013B50] mb-4">Product Development</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We develop and operate proprietary Software-as-a-Service tools. Our platforms, such as Vaendora, empower independent merchants and African businesses to control their entire digital commerce ecosystem without relying on fragmented third-party software. From payments to inventory, we build self-contained platforms.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
