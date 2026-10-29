import { Link } from 'react-router-dom'
import { clinic } from '../data/clinic.js'

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold">{clinic.name}</p>
          <p className="mt-1 text-white/70">{clinic.nameMr}</p>
          <p className="mt-4 max-w-xs text-sm text-white/70">Careful eye examinations and clear advice for the whole family.</p>
        </div>
        <div>
          <p className="font-bold">Visit</p>
          <address className="mt-3 text-sm not-italic leading-relaxed text-white/80">{clinic.address}</address>
          <p className="mt-2 text-sm text-white/80">{clinic.hours}</p>
          <a className="mt-3 inline-block text-sm underline" href={clinic.mapsLink} target="_blank" rel="noreferrer">Open in Google Maps</a>
        </div>
        <div>
          <p className="font-bold">Call or message</p>
          <a className="mt-3 block text-lg underline" href={`tel:${clinic.tel}`}>{clinic.phone}</a>
          {clinic.email && <a className="mt-1 block text-sm underline" href={`mailto:${clinic.email}`}>{clinic.email}</a>}
          <ul className="mt-4 space-y-1 text-sm text-white/80">
            <li><Link className="hover:underline" to="/services">Services</Link></li>
            <li><Link className="hover:underline" to="/eye-test">Online eye test</Link></li>
            <li><Link className="hover:underline" to="/contact#book">Book an appointment</Link></li>
          </ul>
        </div>
      </div>
      <p className="border-t border-white/10 py-5 text-center text-xs text-white/60">© {new Date().getFullYear()} {clinic.name}. All rights reserved.</p>
    </footer>
  )
}
