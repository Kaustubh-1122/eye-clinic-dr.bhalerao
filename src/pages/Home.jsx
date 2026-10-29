import { Link } from 'react-router-dom'
import EyeArt from '../components/EyeArt.jsx'
import BookingForm from '../components/BookingForm.jsx'
import { clinic, services } from '../data/clinic.js'

const tones = ['bg-teal text-white', 'bg-petal', 'bg-mist', 'bg-mist', 'bg-petal', 'bg-white border-2 border-ink/10']
const steps = [
  ['Tell us what is bothering you', 'Blurry reading, headaches, itchy eyes or just a routine check. We listen first.'],
  ['A careful, unhurried examination', 'Vision, eye pressure and the back of the eye are checked one by one.'],
  ['A plan in plain language', 'You leave knowing what we found, what it means and what to do next.'],
]

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-mist">
        <div className="blob absolute -right-20 -top-20 h-72 w-72 bg-sun/70 sm:-right-24 sm:-top-24 sm:h-[480px] sm:w-[480px]" aria-hidden="true" />
        <div className="blob absolute -bottom-32 -left-20 h-72 w-72 bg-teal/15" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-5 sm:py-16 md:grid-cols-[1.1fr_1fr] md:py-24">
          <div>
            <p className="font-display text-xl text-teal-dark">नमस्कार, welcome</p>
            <h1 className="mt-3 max-w-2xl text-4xl leading-[1.05] sm:text-6xl lg:text-7xl">Your eyes deserve more than a quick glance.</h1>
            <p className="mt-5 max-w-md text-base text-ink/80 sm:mt-6 sm:text-lg">A friendly eye clinic in New Sangavi, Pimpri-Chinchwad. Thorough check-ups, honest advice and care for the whole family.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact#book" className="btn btn-primary">Book appointment</Link>
              <a href={`tel:${clinic.tel}`} className="btn btn-ghost">Call {clinic.phone}</a>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="w-full max-w-lg rounded-3xl bg-white p-4 shadow-2xl shadow-ink/10 sm:rounded-[2.5rem] sm:p-6"><EyeArt /></div>
            <div className="bob absolute -bottom-5 left-1 rounded-2xl bg-ink px-4 py-3 text-white shadow-xl sm:-bottom-6 sm:left-4 sm:px-5">
              <p className="font-display text-3xl leading-none">{clinic.rating} <span className="text-sun">★</span></p>
              <p className="mt-1 text-xs text-white/80">{clinic.reviews} Google reviews</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-5 sm:py-24">
        <h2 className="max-w-xl text-4xl sm:text-5xl">What we take care of</h2>
        <p className="mt-3 max-w-lg text-ink/75">From first glasses to sight-saving screening, everything starts with a proper examination.</p>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <li key={s.id} className={`rounded-3xl p-7 ${tones[i]} ${i === 0 ? 'lg:row-span-2 lg:flex lg:flex-col lg:justify-end lg:p-9' : ''}`}>
              <h3 className={i === 0 ? 'text-3xl' : 'text-2xl'}>{s.title}</h3>
              <p className={`mt-3 ${i === 0 ? 'text-white/85' : 'text-ink/75'}`}>{s.text}</p>
            </li>
          ))}
        </ul>
        <Link to="/services" className="mt-8 inline-block font-bold text-teal-dark underline decoration-2 underline-offset-4">See all services</Link>
      </section>

      <section className="bg-petal">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-5 sm:py-20">
          <h2 className="text-4xl sm:text-5xl">What happens at your visit</h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map(([t, d], i) => (
              <li key={t} className="rounded-3xl bg-white p-7 shadow-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink font-display text-lg text-white">{i + 1}</span>
                <h3 className="mt-5 text-2xl">{t}</h3>
                <p className="mt-2 text-ink/75">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink text-white">
        <span className="absolute -right-4 -top-10 select-none font-display text-[16rem] leading-none text-sun/20" aria-hidden="true">E</span>
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-5 sm:py-20">
          <h2 className="max-w-lg text-4xl sm:text-5xl">Can you read the letter on the right?</h2>
          <p className="mt-4 max-w-lg text-white/80">Take our two-minute eye test from your sofa. It is a handy first look, not a replacement for an eye examination.</p>
          <Link to="/eye-test" className="btn btn-sun mt-8">Start the eye test</Link>
        </div>
      </section>

      <section id="book" className="bg-mist">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-5 sm:py-24 md:grid-cols-2">
          <div>
            <h2 className="text-4xl sm:text-5xl">Book your visit</h2>
            <p className="mt-4 max-w-md text-ink/80">Tell us what you need and which day suits you. The clinic will call or message to confirm a time.</p>
            <p className="mt-8 rounded-2xl bg-white p-5 text-sm text-ink/80 shadow-sm"><strong className="block text-base text-ink">Find us</strong>{clinic.address}</p>
          </div>
          <BookingForm />
        </div>
      </section>
    </>
  )
}
