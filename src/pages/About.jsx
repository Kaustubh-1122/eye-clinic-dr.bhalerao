import { Link } from 'react-router-dom'
import { clinic } from '../data/clinic.js'

export default function About() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-14 sm:px-5 sm:py-20">
      <h1 className="text-4xl font-bold sm:text-5xl">About {clinic.name}</h1>
      <div className="mt-8 grid gap-10 md:grid-cols-[1fr_1.4fr]">
        <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-petal shadow-lg shadow-ink/10">
          <img
            src="/doctor-portrait.jpg"
            alt="A clinician in a white coat standing in a clinic"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="space-y-5 text-lg text-ink/85">
          <p>{clinic.name} is a neighbourhood eye clinic in New Sangavi, Pimpri-Chinchwad, trusted by {clinic.reviews} patients who rate it {clinic.rating} out of 5 on Google.</p>
          <p>We believe a good eye visit means being heard, being examined thoroughly and leaving with advice you understand.</p>
          {/* EDIT: add the doctor's name, qualifications and experience here. */}
          <Link to="/contact#book" className="btn btn-primary">Book appointment</Link>
        </div>
      </div>
    </section>
  )
}
