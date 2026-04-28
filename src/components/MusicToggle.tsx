import { useEffect, useMemo, useRef, useState } from 'react'
import { FiMusic } from 'react-icons/fi'
import { cn } from '../lib/utils'

export function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [enabled, setEnabled] = useState(false)

  const src = useMemo(
    () =>
      // Public domain / Creative Commons-friendly placeholder
      'https://cdn.pixabay.com/download/audio/2022/03/15/audio_1f3cc7e08e.mp3?filename=romantic-piano-112191.mp3',
    [],
  )

  useEffect(() => {
    audioRef.current = new Audio(src)
    audioRef.current.loop = true
    audioRef.current.volume = 0.35
    return () => {
      audioRef.current?.pause()
      audioRef.current = null
    }
  }, [src])

  useEffect(() => {
    const a = audioRef.current
    if (!a) return
    if (!enabled) {
      a.pause()
      return
    }
    void a.play().catch(() => {
      // Autoplay may be blocked until user interacts; toggle is user action.
      setEnabled(false)
    })
  }, [enabled])

  return (
    <button
      type="button"
      onClick={() => setEnabled((v) => !v)}
      className={cn(
        'fixed bottom-5 left-5 z-40 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm backdrop-blur transition',
        enabled
          ? 'border-gold-100/60 bg-ink-900 text-cream-50 shadow-soft'
          : 'border-ink-100/70 bg-cream-50/60 text-ink-900',
      )}
      aria-pressed={enabled}
      aria-label={enabled ? 'Mute music' : 'Play music'}
      title={enabled ? 'Music: on' : 'Music: off'}
    >
      <FiMusic />
      <span className="hidden sm:inline">{enabled ? 'Music on' : 'Music off'}</span>
    </button>
  )
}

