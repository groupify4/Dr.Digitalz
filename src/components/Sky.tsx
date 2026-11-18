import { useEffect, useRef } from 'react'

interface Star { x: number; y: number; r: number; base: number; speed: number; phase: number }
interface Dust { x: number; y: number; vx: number; vy: number; r: number; a: number }

// Midnight sky: CSS gradients/nebula + one lightweight canvas for twinkling stars and drifting dust.
export default function Sky() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current!
    const ctx = canvas.getContext('2d')!
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    let w = 0, h = 0, raf = 0, stars: Star[] = [], dust: Dust[] = []
    const rnd = (a: number, b: number) => a + Math.random() * (b - a)

    const build = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth; h = window.innerHeight
      canvas.width = w * dpr; canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const n = Math.max(60, Math.min(220, Math.round((w * h) / 9000)))
      stars = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, r: rnd(0.35, 1.25), base: rnd(0.3, 0.9), speed: rnd(0.4, 1.6), phase: rnd(0, 6.28) }))
      dust = Array.from({ length: w < 640 ? 18 : 32 }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: rnd(-0.06, 0.06), vy: rnd(-0.14, -0.03), r: rnd(0.8, 1.8), a: rnd(0.08, 0.22) }))
    }

    const draw = (t: number, move: boolean) => {
      ctx.clearRect(0, 0, w, h)
      for (const s of stars) {
        const a = s.base * (0.55 + 0.45 * Math.sin(t * 0.001 * s.speed + s.phase))
        ctx.fillStyle = `rgba(205,228,255,${a})`
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 6.283); ctx.fill()
        if (s.r > 0.95) { ctx.fillStyle = `rgba(120,180,255,${a * 0.14})`; ctx.beginPath(); ctx.arc(s.x, s.y, s.r * 3.2, 0, 6.283); ctx.fill() }
      }
      for (const d of dust) {
        if (move) { d.x += d.vx; d.y += d.vy; if (d.y < -4) { d.y = h + 4; d.x = Math.random() * w } if (d.x < -4) d.x = w + 4; if (d.x > w + 4) d.x = -4 }
        ctx.fillStyle = `rgba(130,200,255,${d.a})`
        ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, 6.283); ctx.fill()
      }
    }

    const loop = (t: number) => { draw(t, true); raf = requestAnimationFrame(loop) }
    const start = () => { cancelAnimationFrame(raf); if (mq.matches) draw(0, false); else if (!document.hidden) raf = requestAnimationFrame(loop) }
    const onResize = () => { build(); start() }

    build(); start()
    window.addEventListener('resize', onResize)
    document.addEventListener('visibilitychange', start)
    mq.addEventListener('change', start)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); document.removeEventListener('visibilitychange', start); mq.removeEventListener('change', start) }
  }, [])

  return (
    <div className="sky" aria-hidden="true">
      <div className="sky-nebula" />
      <div className="sky-glow" />
      <canvas ref={ref} className="sky-canvas" />
      <div className="sky-vignette" />
    </div>
  )
}
