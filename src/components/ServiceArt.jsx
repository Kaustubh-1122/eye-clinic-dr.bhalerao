const Eye = ({ children }) => (
  <>
    <path d="M28 100C56 57 88 36 128 36s72 21 100 64c-28 43-60 64-100 64S56 143 28 100Z" fill="#fff" stroke="#0A2E2A" strokeWidth="5" />
    {children}
  </>
)

function Iris({ cloudy = false }) {
  return (
    <>
      <circle cx="128" cy="100" r="32" fill={cloudy ? '#A9C8D1' : '#148FA8'} />
      {cloudy && <circle cx="128" cy="100" r="27" fill="#D8E8EC" opacity=".82" />}
      <circle cx="128" cy="100" r="15" fill="#0A2E2A" />
      <circle cx="138" cy="90" r="7" fill="#fff" opacity=".85" />
    </>
  )
}

export default function ServiceArt({ type }) {
  let art
  if (type === 'checkup') {
    art = <><Eye><Iris /></Eye><path d="m190 148 11 12 27-36" fill="none" stroke="#148FA8" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" /></>
  } else if (type === 'cataract') {
    art = <Eye><Iris cloudy /><circle cx="128" cy="100" r="39" fill="none" stroke="#14806E" strokeWidth="3" strokeDasharray="6 6" /></Eye>
  } else if (type === 'glaucoma') {
    art = <><Eye><Iris /></Eye><path d="M204 57c17 14 23 31 23 43s-6 29-23 43" fill="none" stroke="#FFB020" strokeWidth="7" strokeLinecap="round" /><path d="M201 78c9 7 13 14 13 22s-4 15-13 22" fill="none" stroke="#FFE4A4" strokeWidth="4" strokeLinecap="round" /><circle cx="203" cy="100" r="5" fill="#FFB020" /></>
  } else if (type === 'paediatric') {
    art = <><Eye><Iris /></Eye><path d="M55 59 42 45m1 18 17-2M201 143l14 14m-1-20-18 2" stroke="#FFB020" strokeWidth="5" strokeLinecap="round" /><path d="M128 16v14M121 23h14" stroke="#14806E" strokeWidth="4" strokeLinecap="round" /></>
  } else if (type === 'dry') {
    art = <><Eye><Iris /></Eye><path d="M198 48c10 14 15 23 15 31a15 15 0 0 1-30 0c0-8 5-17 15-31Z" fill="#72C9DD" /><path d="M47 148c17 13 35 18 56 18" fill="none" stroke="#FFB020" strokeWidth="5" strokeLinecap="round" /></>
  } else {
    art = <><Eye><Iris /></Eye><path d="M45 77h43c10 0 14 10 14 23s-4 23-14 23H56c-10 0-15-10-15-23V77Zm122 0h43v23c0 13-5 23-15 23h-32c-10 0-14-10-14-23s4-23 14-23ZM102 94h47" fill="none" stroke="#FFB020" strokeWidth="5" strokeLinejoin="round" /></>
  }

  return (
    <svg viewBox="0 0 256 200" role="img" aria-label="Eye care service illustration" className="h-full w-full p-7">
      {art}
    </svg>
  )
}
