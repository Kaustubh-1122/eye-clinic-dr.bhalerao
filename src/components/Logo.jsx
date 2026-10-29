export default function Logo({ className = 'h-11 w-11' }) {
  return (
    <svg viewBox="0 0 72 72" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="logo-bg" x1="10" y1="8" x2="63" y2="67" gradientUnits="userSpaceOnUse">
          <stop stopColor="#14806E" />
          <stop offset="1" stopColor="#0A2E2A" />
        </linearGradient>
        <linearGradient id="logo-iris" x1="27" y1="25" x2="46" y2="47" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFE6A3" />
          <stop offset="1" stopColor="#FFB020" />
        </linearGradient>
      </defs>
      <rect width="72" height="72" rx="21" fill="url(#logo-bg)" />
      <path d="M13 36c6.9-10.1 14.6-15.2 23-15.2S52.1 25.9 59 36c-6.9 10.1-14.6 15.2-23 15.2S19.9 46.1 13 36Z" fill="white" />
      <path d="M13 36c6.9-10.1 14.6-15.2 23-15.2S52.1 25.9 59 36" fill="none" stroke="#BDE7DC" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="36" cy="36" r="11.8" fill="url(#logo-iris)" />
      <circle cx="36" cy="36" r="6" fill="#0A2E2A" />
      <circle cx="39.2" cy="32.7" r="2.1" fill="white" fillOpacity=".9" />
      <path d="M24.5 54.5h23" stroke="#FFB020" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
