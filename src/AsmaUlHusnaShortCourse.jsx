const schedule = [
  ['Class day', 'Every Friday'],
  ['Class time', '6:30 PM – 7:15 PM PKT'],
  ['Starting', '25 September, 2026'],
]

const features = [
  'Small learning groups to support a steady journey.',
  'Regular assignments to help put learning into practice.',
  'Recordings are regularly shared for missed classes.',
]

const AsmaUlHusnaShortCourse = () => (
  <main className="min-h-screen bg-[#101827] px-4 py-8 font-sans text-[#f8f2e5] sm:px-8 sm:py-12">
    <article className="mx-auto max-w-[840px] overflow-hidden border border-[#bd963f] bg-[#172237] shadow-[0_20px_60px_rgba(0,0,0,.35)]">
      <header className="relative overflow-hidden border-b border-[#bd963f] px-7 py-9 text-center sm:px-12 sm:py-12">
        <div className="absolute -right-20 -top-24 size-64 rounded-full border-[26px] border-[#dfbd68]/15" aria-hidden="true" />
        <div className="relative flex items-center justify-between gap-3 pr-14 font-mono text-[.58rem] font-medium uppercase tracking-[.14em] text-[#dfbd68] sm:text-[.62rem]">
          <span>Al Khair presents</span><span>Online learning · 2026</span>
        </div>
        <img className="absolute right-7 top-8 size-12 rounded-2xl object-cover object-center sm:top-10" src="/logo1.jpeg" alt="Al Khair logo" />

        <div className="relative mx-auto mt-14 max-w-xl">
          <p className="font-mono text-[.65rem] font-medium uppercase tracking-[.2em] text-[#dfbd68]">Three-month Islamic learning programme</p>
          <p className="mt-5 font-serif text-2xl text-[#eccd79]" lang="ar" dir="rtl">حُسْنُ الْأَخْلَاق</p>
          <h1 className="mt-1 font-display text-[clamp(3.2rem,9vw,6rem)] leading-[.8] font-bold tracking-[-.07em] text-[#fffaf0]">Husn e<br /><i className="font-medium text-[#eccd79]">Akhlaq</i></h1>
          <p className="mx-auto mt-7 max-w-[510px] text-[1rem] leading-relaxed text-[#cbd4df]">A three-month Islamic learning programme designed for serious students of knowledge.</p>
        </div>
      </header>

      <section className="grid grid-cols-3 border-b border-[#bd963f] bg-[#223149] max-sm:grid-cols-1">
        {schedule.map(([label, value], index) => (
          <div className={`px-5 py-5 text-center sm:px-7 ${index ? 'border-l border-[#536174] max-sm:border-l-0 max-sm:border-t' : ''}`} key={label}>
            <p className="font-mono text-[.58rem] font-medium uppercase tracking-[.15em] text-[#dfbd68]">{label}</p>
            <p className="mt-2 font-display text-[1rem] font-bold leading-tight text-[#fffaf0]">{value}</p>
          </div>
        ))}
      </section>

      <div className="grid gap-10 px-7 py-10 sm:px-12 md:grid-cols-2">
        <section>
          <p className="font-mono text-[.62rem] font-medium uppercase tracking-[.16em] text-[#dfbd68]">A journey of character</p>
          <h2 className="mt-3 font-display text-[clamp(1.8rem,4vw,2.7rem)] leading-[.96] font-bold tracking-[-.045em] text-[#fffaf0]">Learn the prophetic way.<br />Live it beautifully.</h2>
          <p className="mt-6 text-[.92rem] leading-relaxed text-[#cbd4df]">A thoughtful study circle for nurturing beautiful character through Islamic learning, reflection, and practice.</p>
          <div className="mt-7 border-l-2 border-[#dfbd68] pl-4 text-[.8rem] leading-relaxed text-[#aebdcd]">Class timings will be adjusted accordingly as the Maghrib prayer time changes.</div>
        </section>

        <section className="border-l border-[#536174] pl-8 max-md:border-l-0 max-md:border-t max-md:pl-0 max-md:pt-8">
          <p className="font-mono text-[.62rem] font-medium uppercase tracking-[.16em] text-[#dfbd68]">Academic features</p>
          <div className="mt-5 space-y-4">
            {features.map(feature => <p className="flex gap-3 text-[.87rem] leading-relaxed text-[#cbd4df]" key={feature}><span className="text-[#dfbd68]">✦</span>{feature}</p>)}
          </div>
          <div className="mt-7 border border-[#bd963f] px-5 py-4 text-[#fffaf0]">
            <p className="text-[.86rem] font-bold">Live online classes</p>
            <p className="mt-1 font-mono text-[.66rem] uppercase tracking-[.1em] text-[#f2cf78]">via WhatsApp call</p>
          </div>
        </section>
      </div>

      <footer className="flex flex-col gap-5 border-t border-[#bd963f] bg-[#223149] px-7 py-7 text-[#fffaf0] sm:px-12 md:flex-row md:items-center md:justify-between">
        <div><p className="font-mono text-[.6rem] font-medium uppercase tracking-[.14em]">Begin with intention</p><p className="mt-1 font-display text-[1.35rem] font-bold">Join the learning circle</p></div>
        <div className="flex flex-wrap items-center gap-3">
          <a className="bg-[#dfbd68] px-5 py-3 text-center text-[.75rem] font-bold uppercase tracking-[.1em] text-[#172237] transition-colors hover:bg-[#fffaf0]" href="#join">Reserve your seat →</a>
          <p className="border border-[#dfbd68]/70 bg-[#172237] px-3 py-2 font-mono text-[.72rem] font-bold tracking-[.08em] text-[#dfbd68] shadow-[inset_3px_0_0_#dfbd68]">CALL · 0326 3926009</p>
        </div>
      </footer>
    </article>
  </main>
)

export default AsmaUlHusnaShortCourse
