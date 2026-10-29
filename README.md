# Dr. Bhalerao Eye Care website

React 18 + Vite + Tailwind CSS 3 + React Router.

## Run
    npm install
    npm run dev      # http://localhost:5173
    npm run build    # production build in /dist

## Edit content
- `src/data/clinic.js` - phone, address, hours, email, services (lines marked EDIT)
- `src/pages/About.jsx` - add doctor name, qualifications, photo
- Colors/fonts: `tailwind.config.js`

## Booking form
Opens WhatsApp with the patient's details prefilled (no server needed).

## Deploy
Upload `/dist` to Netlify, Vercel or any static host. For Netlify add `public/_redirects` with `/* /index.html 200`.
