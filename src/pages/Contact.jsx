import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import BookingForm from '../components/BookingForm.jsx'
import { clinic } from '../data/clinic.js'

export default function Contact() {
  const { hash } = useLocation()
  useEffect(() => { if (hash) document.querySelector(hash)?.scrollIntoView() }, [hash])
  const embed = `https://www.google.com/maps?q=${encodeURIComponent(clinic.address)}&output=embed`
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-5 sm:py-20">
        <h1 className="text-4xl font-bold sm:text-5xl">Contact and directions</h1>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div className="space-y-6 text-lg">
            <div><p className="font-bold">Address</p><p className="text-ink/80">{clinic.address}</p></div>
            <div><p className="font-bold">Phone</p><a className="text-teal-dark underline" href={`tel:${clinic.tel}`}>{clinic.phone}</a></div>
            <div><p className="font-bold">Hours</p><p className="text-ink/80">{clinic.hours}</p></div>
            <a className="btn btn-ghost" href={clinic.mapsLink} target="_blank" rel="noreferrer">Get directions</a>
          </div>
          <iframe title="Clinic location on Google Maps" src={embed} loading="lazy" className="h-64 w-full rounded-2xl border-0 sm:h-80 sm:rounded-3xl" />
        </div>
      </section>
      <section id="book" className="bg-mist">
        <div className="mx-auto max-w-2xl px-4 py-14 sm:px-5 sm:py-16">
          <h2 className="mb-6 text-3xl font-bold">Book an appointment</h2>
          <BookingForm />
        </div>
      </section>
    </>
  )
}
