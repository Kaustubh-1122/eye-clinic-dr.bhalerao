import { Link } from 'react-router-dom'
import { services } from '../data/clinic.js'
import ServiceArt from '../components/ServiceArt.jsx'

export default function Services() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-5 sm:py-20">
      <h1 className="text-4xl font-bold sm:text-5xl">Our services</h1>
      <p className="mt-4 max-w-xl text-lg text-ink/80">Every visit starts with a full eye examination so we can recommend only what you need.</p>
      <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <article key={s.id} id={s.id} className="overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10">
            <div className="aspect-[1.35/1] bg-[#E8F3F7]">
              <ServiceArt type={s.id} />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold">{s.title}</h2>
              <p className="mt-3 leading-relaxed text-ink/80">{s.text}</p>
            </div>
          </article>
        ))}
      </div>
      <Link to="/contact#book" className="btn btn-primary mt-10">Book appointment</Link>
    </section>
  )
}
