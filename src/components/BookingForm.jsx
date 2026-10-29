import { useState } from 'react'
import { clinic, services } from '../data/clinic.js'

// No backend needed: the form opens WhatsApp with a ready-to-send message.
export default function BookingForm() {
  const [f, setF] = useState({ name: '', phone: '', service: services[0].title, date: '', note: '' })
  const [sent, setSent] = useState(false)
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    const msg = `Hello, I would like to book an appointment.\nName: ${f.name}\nPhone: ${f.phone}\nFor: ${f.service}\nPreferred date: ${f.date || 'Any'}\n${f.note ? 'Note: ' + f.note : ''}`
    window.open(`https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener')
    setSent(true)
  }
  return (
    <form onSubmit={submit} className="grid gap-4 rounded-2xl bg-white p-4 text-ink shadow-xl sm:rounded-3xl sm:p-8">
      <label className="grid gap-1 text-sm font-medium">Your name
        <input required className="field" value={f.name} onChange={set('name')} autoComplete="name" />
      </label>
      <label className="grid gap-1 text-sm font-medium">Mobile number
        <input required type="tel" pattern="[0-9+ ]{10,14}" title="Enter a valid mobile number" className="field" value={f.phone} onChange={set('phone')} autoComplete="tel" />
      </label>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-1 text-sm font-medium">Reason for visit
          <select className="field" value={f.service} onChange={set('service')}>{services.map((s) => <option key={s.id}>{s.title}</option>)}</select>
        </label>
        <label className="grid gap-1 text-sm font-medium">Preferred date
          <input type="date" min={new Date().toISOString().split('T')[0]} className="field" value={f.date} onChange={set('date')} />
        </label>
      </div>
      <label className="grid gap-1 text-sm font-medium">Anything we should know? (optional)
        <textarea rows="3" className="field" value={f.note} onChange={set('note')} />
      </label>
      <button className="btn btn-primary">Send request on WhatsApp</button>
      <p className="text-sm text-ink/70" role="status">{sent ? 'WhatsApp opened. Send the message and the clinic will confirm your slot.' : `Prefer a call? Dial ${clinic.phone}.`}</p>
    </form>
  )
}
