import { clinic } from '../data/clinic.js'

export default function FloatingActions() {
  return (
    <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 flex flex-col gap-3 sm:right-5">
      <a href={`https://wa.me/${clinic.whatsapp}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
         className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] shadow-xl transition hover:scale-105 sm:h-14 sm:w-14">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff"><path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm5.2 14.1c-.2.6-1.300 1.200-1.800 1.200-.5.1-1 .2-3.300-.7-2.800-1.200-4.600-4-4.700-4.200-.1-.2-1.100-1.500-1.100-2.800s.7-2 1-2.300c.2-.3.500-.3.700-.3h.5c.2 0 .4 0 .6.500l.8 2c.1.200.1.400 0 .5l-.4.600-.4.500c-.1.100-.3.300-.1.600.2.300.8 1.300 1.700 2.100 1.100 1 2.100 1.300 2.400 1.400.3.100.5.100.7-.1l.9-1.100c.2-.3.400-.2.700-.1l1.900.9c.3.100.5.200.5.300.1.200.1.800-.1 1.400z"/></svg>
      </a>
      <a href={`tel:${clinic.tel}`} aria-label="Call the clinic"
         className="flex h-12 w-12 items-center justify-center rounded-full bg-sun shadow-xl transition hover:scale-105 sm:h-14 sm:w-14">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0A2E2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 01-2.200 2 19.800 19.800 0 01-8.600-3.100 19.500 19.500 0 01-6-6A19.800 19.800 0 012.100 4.200 2 2 0 014.100 2h3a2 2 0 012 1.700c.1 1 .4 1.900.7 2.800a2 2 0 01-.5 2.100L8.100 9.900a16 16 0 006 6l1.300-1.300a2 2 0 012.100-.4c.9.300 1.800.6 2.800.7a2 2 0 011.700 2z"/></svg>
      </a>
    </div>
  )
}
