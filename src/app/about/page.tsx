export default function About() {
  return (
    <div className="w-full">
      <section className="px-6 py-24 md:py-32 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#013B50] tracking-tight mb-6">About Us.</h1>
          <p className="text-xl text-gray-600 max-w-2xl font-light">The technology entity behind scalable automation and SaaS.</p>
        </div>
      </section>

      <section className="px-6 py-24 bg-white">
        <div className="max-w-4xl mx-auto prose prose-lg prose-blue">
          <p className="text-2xl text-[#013B50] font-light leading-relaxed mb-12">
            Junn Digital Ltd is a registered technology company operating out of Lagos, Nigeria. Our core focus is on building digital environments and automated software systems that enable businesses to operate highly efficiently on the internet.
          </p>

          <div className="grid md:grid-cols-2 gap-12 my-16">
            <div>
              <h3 className="text-sm font-mono tracking-widest text-[#C7E160] uppercase mb-4">Operations</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                Unlike traditional agencies, we are pure technologists. We engineer SaaS products, deploy AI automation systems, and develop the underlying business infrastructure that solves tangible operational bottlenecks.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-mono tracking-widest text-[#C7E160] uppercase mb-4">Philosophy</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                Technology must act as a utility. We value clean architecture, modern best practices, and provable utility. We do not chase hype; we engineer solutions that work reliably in production.
              </p>
            </div>
          </div>

          <hr className="border-gray-200 my-16"/>

          <h2 className="text-3xl font-bold text-[#013B50] mb-6">Our Standard</h2>
          <p className="text-gray-600 leading-relaxed">
            Whether it is our proprietary SaaS platforms like Vaendora, or our custom AI agents deployed through Junn AI, we design systems that integrate quietly into the background. A successful deployment is one that functions seamlessly day after day without requiring constant human intervention.
          </p>
        </div>
      </section>
    </div>
  )
}
