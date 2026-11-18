import { MotionConfig, motion } from 'framer-motion'
import { Globe, Mail, MapPin, MessageCircle } from 'lucide-react'
import Sky from './components/Sky'
import LinkCard from './components/LinkCard'
import { brands, featured, links, site } from './config/site'

const list = { hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.35 } } }
const active = <T extends { url: string }>(a: T[]) => a.filter((x) => x.url.trim())

function Contact() {
  const { whatsapp, email, website, location } = site.contact
  const btns = [
    whatsapp && { href: `https://wa.me/${whatsapp.replace(/\D/g, '')}`, label: 'WhatsApp', I: MessageCircle },
    email && { href: `mailto:${email}`, label: 'Email', I: Mail },
    website && { href: website, label: 'Website', I: Globe },
  ].filter(Boolean) as { href: string; label: string; I: typeof Mail }[]
  if (!btns.length && !location) return null
  return (
    <section aria-labelledby="contact" className="mt-14">
      <h2 id="contact" className="mb-4 font-display text-xl font-semibold">Contact</h2>
      <div className="flex flex-wrap gap-3">
        {btns.map(({ href, label, I }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer"
             className="glass inline-flex min-h-[48px] items-center gap-2 rounded-full px-5 font-semibold transition hover:bg-white/15">
            <I size={18} aria-hidden="true" /> {label}
          </a>
        ))}
        {location && <span className="inline-flex min-h-[48px] items-center gap-2 px-2 text-white/70"><MapPin size={18} aria-hidden="true" /> {location}</span>}
      </div>
    </section>
  )
}

export default function App() {
  const f = active(featured)
  const b = active(brands)
  const o = active(links)
  return (
    <MotionConfig reducedMotion="user">
      <Sky />
      <main className="mx-auto w-full max-w-xl px-5 pb-10 pt-12 sm:pt-20">
        <header>
          {/* Five brand marks overlapping in a row: the one memorable moment on the page */}
          <motion.div className="mb-8 flex" initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}>
            {brands.map((x, i) => (
              <motion.span key={x.id} variants={{ hidden: { opacity: 0, x: -14 }, show: { opacity: 1, x: 0 } }}
                className="-ml-3 first:ml-0 h-14 w-14 overflow-hidden rounded-full border-2 border-[#050b1f] bg-white sm:h-16 sm:w-16" style={{ zIndex: 5 - i }}>
                <img src={x.logo} alt="" className="h-full w-full scale-[1.7] object-contain" width={64} height={64} />
              </motion.span>
            ))}
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
            {site.brand}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="mt-2 font-display text-lg text-white/80">{site.tagline}</motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }} className="mt-4 max-w-md text-white/65">{site.description}</motion.p>
        </header>

        {f.length > 0 && (
          <motion.section aria-label="Get in touch" className="mt-10" variants={list} initial="hidden" animate="show">
            <div className="grid grid-cols-1 gap-3">{f.map((x) => <LinkCard key={x.id} data={x} showHandle />)}</div>
          </motion.section>
        )}

        <motion.section aria-labelledby="brands" className="mt-3" variants={list} initial="hidden" animate="show">
          <h2 id="brands" className="sr-only">Our brands</h2>
          <div className="grid grid-cols-1 gap-3">{b.map((x) => <LinkCard key={x.id} data={x} showHandle />)}</div>
        </motion.section>

        {o.length > 0 && (
          <motion.section aria-labelledby="more" className="mt-12" variants={list} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}>
            <h2 id="more" className="mb-4 font-display text-xl font-semibold">More places to find us</h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">{o.map((x) => <LinkCard key={x.id} data={x} />)}</div>
          </motion.section>
        )}

        <Contact />

        <footer className="mt-16 border-t border-white/10 pt-6 text-sm text-white/50">
          <p>© {new Date().getFullYear()} <a href={site.footer.url} target="_blank" rel="noopener noreferrer" className="underline decoration-white/30 underline-offset-4 transition hover:text-white">{site.footer.owner}</a>. All rights reserved.</p>
        </footer>
      </main>
    </MotionConfig>
  )
}
