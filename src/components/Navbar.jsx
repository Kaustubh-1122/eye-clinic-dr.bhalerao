import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo.jsx'
import { clinic } from '../data/clinic.js'

const links = [['/', 'Home'], ['/services', 'Services'], ['/eye-test', 'Eye test'], ['/about', 'About'], ['/contact', 'Contact']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const cls = ({ isActive }) => `py-2 ${isActive ? 'text-teal-dark font-bold' : 'hover:text-teal-dark'}`
  return (
    <header className="sticky top-0 z-30 border-b border-ink/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-5">
        <Link to="/" className="group flex min-w-0 items-center gap-2 sm:gap-3" onClick={() => setOpen(false)}>
          <Logo className="h-10 w-10 shrink-0 sm:h-11 sm:w-11" />
          <span className="leading-tight transition group-hover:text-teal-dark">
            <span className="block font-display text-[1.08rem] font-bold tracking-[-0.02em]">Dr. Bhalerao</span>
            <span className="block text-[0.65rem] font-bold uppercase tracking-[0.19em] text-teal-dark">Eye Care</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {links.map(([to, label]) => <NavLink key={to} to={to} className={cls} end>{label}</NavLink>)}
          <Link to="/contact#book" className="btn btn-primary !py-2">Book appointment</Link>
        </nav>
        <button className="ml-3 rounded-lg p-3 md:hidden" aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-ink/10 px-4 pb-5 pt-2 sm:px-5 md:hidden" aria-label="Mobile">
          {links.map(([to, label]) => <NavLink key={to} to={to} className={cls} end onClick={() => setOpen(false)}>{label}</NavLink>)}
          <Link to="/contact#book" className="btn btn-primary mt-2" onClick={() => setOpen(false)}>Book appointment</Link>
        </nav>
      )}
    </header>
  )
}
