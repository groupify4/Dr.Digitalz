import { motion, type MotionStyle } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { LinkItem } from '../config/site'
import Icon from './Icon'

export const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function LinkCard({ data, showHandle }: { data: LinkItem; showHandle?: boolean }) {
  const handle = showHandle ? data.url.split('instagram.com/')[1]?.replace(/\/$/, '') : undefined
  return (
    <motion.a
      variants={item}
      href={data.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card glass flex min-h-[76px] items-center gap-4 rounded-3xl p-3 pr-4"
      style={{ '--accent': data.accent } as unknown as MotionStyle}
    >
      {data.logo ? (
        <span className={`grid h-16 w-16 shrink-0 place-items-center overflow-hidden bg-white ${data.photo ? 'rounded-full' : 'rounded-2xl'}`}>
          <img src={data.logo} alt="" width={64} height={64} loading="lazy" className={`h-full w-full object-contain ${data.photo ? '' : 'scale-[1.35]'}`} />
        </span>
      ) : (
        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-white" style={{ background: `${data.accent}33`, color: data.accent }}>
          {data.icon && <Icon name={data.icon} />}
        </span>
      )}
      <span className="min-w-0 flex-1">
        <span className="block font-display text-base font-semibold leading-tight">{data.label}</span>
        <span className="block truncate text-sm text-white/60">{handle ? `@${handle}` : data.description}</span>
      </span>
      <ArrowUpRight size={20} className="shrink-0 text-white/50" aria-hidden="true" />
    </motion.a>
  )
}
