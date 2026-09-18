const schedule = [
  ['Class days', 'Monday – Thursday'],
  ['Class time', '6:15 PM – 7:00 PM PKT'],
  ['Starting', '5 October, 2026'],
]

const subjects = [
  'Tarjuma & detailed study of Surah Al Baqarah',
  'Basic Arabic grammar',
]

const features = [
  'Learning groups for memorising the tarjuma',
  'Regular assignments and exams',
  'Recordings provided for missed classes',
]

const SurahAlBaqarahFlyer = () => (
  <main className="min-h-screen bg-[#101827] px-4 py-8 font-sans text-[#f6f0df] sm:px-8 sm:py-12">
    <article className="mx-auto max-w-[840px] overflow-hidden border border-[#bd963f] bg-[#172237] shadow-[0_20px_60px_rgba(0,0,0,.35)]">
      <header className="relative border-b border-[#bd963f] px-7 py-9 text-center sm:px-12 sm:py-12">
        <div className="flex items-center justify-between pr-12 font-mono text-[.62rem] font-medium uppercase tracking-[.16em] text-[#dfbd68]">
          <span>Online Islamic learning</span><span>Open enrolment · 2026</span>
        </div>
        <img className="absolute right-7 inline w-12 h-12 rounded-2xl  object-cover object-center top-10 bottom-2 " src="/logo1.jpeg" alt="Al Noor logo" />
        <div className="mx-auto mt-14 max-w-xl">
          <p className="font-mono text-[.65rem] font-medium uppercase tracking-[.2em] text-[#dfbd68]">Four-month learning programme</p>
          <p className="mt-5 font-serif text-2xl text-[#eccd79]" lang="ar" dir="rtl">سُورَةُ البَقَرَة</p>
          <h1 className="mt-1 font-display text-[clamp(3.8rem,10vw,6.5rem)] leading-[.76] font-bold tracking-[-.08em] text-[#fffaf0]">Surah<br /><i className="font-medium text-[#eccd79]">Al Baqarah</i></h1>
          <p className="mx-auto mt-7 max-w-[490px] text-[1rem] leading-relaxed text-[#cbd4df]">A four-month Islamic learning programme designed for serious students of knowledge.</p>
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
          <p className="font-mono text-[.62rem] font-medium uppercase tracking-[.16em] text-[#dfbd68]">Core subjects</p>
          <h2 className="mt-3 font-display text-[clamp(1.8rem,4vw,2.7rem)] leading-[.96] font-bold tracking-[-.045em] text-[#fffaf0]">Learn the words.<br />Live their meaning.</h2>
          <div className="mt-6 space-y-3">
            {subjects.map((subject, index) => <p className="flex gap-3 text-[.92rem] leading-relaxed text-[#cbd4df]" key={subject}><span className="font-mono text-[.7rem] font-medium text-[#dfbd68]">0{index + 1}</span>{subject}</p>)}
          </div>
          <div className="mt-7 border-l-2 border-[#dfbd68] pl-4 text-[.8rem] leading-relaxed text-[#aebdcd]">Class timings will be adjusted as Maghrib prayer times change.</div>
        </section>

        <section className="border-l border-[#536174] pl-8 max-md:border-l-0 max-md:border-t max-md:pl-0 max-md:pt-8">
          <p className="font-mono text-[.62rem] font-medium uppercase tracking-[.16em] text-[#dfbd68]">Academic experience</p>
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
      
        <div className="flex items-center gap-2" >
            <a className="bg-[#dfbd68] px-5 py-3 text-center text-[.75rem] font-bold uppercase tracking-[.1em] text-[#172237] transition-colors hover:bg-[#fffaf0]" href="#join">Reserve your seat →</a>
            <div className="text-sm flex flex-col items-center justify-center">
               <h5>0316 4086558</h5>
          <h5>0322 4603720</h5>
            </div>
         
 <a href=""></a>
        </div>
       
      </footer>
    </article>
  </main>
)

export default SurahAlBaqarahFlyer
