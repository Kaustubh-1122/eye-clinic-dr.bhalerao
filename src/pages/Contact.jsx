import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import BookingForm from '../components/BookingForm.jsx'
import { clinic } from '../data/clinic.js'

export default function Contact() {
  const { hash } = useLocation()
  useEffect(() => {
    if (hash) {
      document.querySelector(hash)?.scrollIntoView()
    }
  }, [hash])
  const embed = `https://www.google.com/maps?q=${encodeURIComponent(clinic.address)}&output=embed`

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-5 sm:py-20">
        <h1 className="text-4xl font-bold sm:text-5xl">Contact and directions</h1>
        <p className="mt-3 text-lg text-ink/75">
          We look forward to welcoming you to {clinic.name}.
        </p>
        <div className="mt-10 grid gap-10 md:grid-cols-2 items-start">
          <div className="space-y-6 text-lg">
            <div className="overflow-hidden rounded-3xl border border-ink/10 shadow-sm">
              <img
                src="/clinic-interior.jpg"
                alt={`${clinic.name} interior`}
                className="h-56 w-full object-cover"
              />
            </div>
            <div>
              <p className="font-bold">Clinic</p>
              <p className="text-ink/80">{clinic.name}</p>
            </div>
            <div>
              <p className="font-bold">Address</p>
              <p className="text-ink/80">{clinic.address}</p>
              {clinic.plusCode && (
                <p className="mt-1 text-sm font-medium text-teal-dark">Plus Code: {clinic.plusCode}</p>
              )}
            </div>
            <div>
              <p className="font-bold">Phone</p>
              <a className="text-teal-dark font-medium underline" href={`tel:${clinic.tel}`}>
                {clinic.phone}
              </a>
            </div>
            <div>
              <p className="font-bold">Hours</p>
              <p className="text-ink/80">{clinic.hours}</p>
            </div>
            <div>
              <a className="btn btn-ghost" href={clinic.mapsLink} target="_blank" rel="noreferrer">
                Get directions on Google Maps
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <iframe
              title="Clinic location on Google Maps"
              src={embed}
              loading="lazy"
              className="h-80 w-full rounded-3xl border border-ink/10 shadow-sm sm:h-96"
            />
            <div className="rounded-2xl bg-petal p-4 text-sm text-ink/80">
              <p className="font-medium text-ink">📍 Landmarks & Access:</p>
              <p className="mt-1">
                Located at Shrinivas Apartment, Sai Chowk, Samarth Nagar, New Sangavi, Pimpri-Chinchwad.
              </p>
            </div>
          </div>
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
