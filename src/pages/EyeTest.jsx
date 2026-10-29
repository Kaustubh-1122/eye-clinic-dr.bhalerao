import { useState } from 'react'
import { Link } from 'react-router-dom'

const lines = [['E', 150], ['F P', 110], ['T O Z', 80], ['L P E D', 58], ['P E C F D', 40], ['E D F C Z P', 28], ['F E L O P Z D', 20]]

export default function EyeTest() {
  const [step, setStep] = useState(0)
  const [done, setDone] = useState(false)
  const next = () => {
    if (step + 1 < lines.length) {
      setStep(step + 1)
    } else {
      setStep(step + 1)
      setDone(true)
    }
  }
  const reset = () => { setStep(0); setDone(false) }
  const result = step >= 5 ? 'You read most of the lines. Your distance vision looks good, but a regular check-up still matters.' : step >= 3 ? 'You found some lines hard. A full eye examination is a good idea.' : 'You struggled early. Please book an eye examination soon.'
  return (
    <section className="mx-auto max-w-3xl px-4 py-14 sm:px-5 sm:py-20">
      <h1 className="text-4xl font-bold sm:text-5xl">Online eye test</h1>
      <p className="mt-4 text-lg text-ink/80">Sit about 1 metre from the screen, cover one eye and keep your glasses on if you wear them. Use full-size browser zoom (100%).</p>

      <div className="mt-8 overflow-hidden rounded-2xl border border-ink/15 p-4 text-center sm:mt-10 sm:rounded-3xl sm:p-10">
        {!done ? (
          <>
            <p className="text-sm text-ink/60">Line {step + 1} of {lines.length}</p>
            <p className="my-8 flex min-h-36 items-center justify-center break-all font-sans font-bold tracking-[0.2em] sm:my-10 sm:min-h-[180px] sm:tracking-[0.3em]" style={{ fontSize: `min(${lines[step][1] * 0.6}px, 17vw)` }} aria-label="Test letters">{lines[step][0]}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <button className="btn btn-primary" onClick={next}>I can read this</button>
              <button className="btn btn-ghost" onClick={() => setDone(true)}>I can't read it clearly</button>
            </div>
          </>
        ) : (
          <div role="status">
            <p className="font-display text-2xl font-bold">You read {step} of {lines.length} lines clearly</p>
            <p className="mx-auto mt-3 max-w-md text-ink/80">{result}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link to="/contact#book" className="btn btn-primary">Book appointment</Link>
              <button className="btn btn-ghost" onClick={reset}>Test again</button>
            </div>
          </div>
        )}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold">Near vision</h2>
        <p className="mt-2 text-ink/80">Hold your phone about 40 cm away. Which size is the smallest you can read comfortably?</p>
        <div className="mt-4 space-y-3 rounded-3xl bg-mist p-6">
          {[22, 18, 15, 12, 10].map((px) => <p key={px} style={{ fontSize: px }}>The quick brown fox jumps over the lazy dog.</p>)}
        </div>
      </div>
      <p className="mt-8 text-sm text-ink/60">This screening is not a medical diagnosis. Sudden vision loss, flashes or a dark curtain need urgent attention: call the clinic or go to the nearest hospital.</p>
    </section>
  )
}
