import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { IntroLoader } from './components/IntroLoader'
import { SiteHeader } from './components/SiteHeader'
import { EditorialHome } from './sections/EditorialHome'
import { FilmsAndContact } from './sections/FilmsAndContact'

function App() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), 1200)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <div className="min-h-dvh bg-white text-neutral-900">
      <AnimatePresence>{!ready ? <IntroLoader /> : null}</AnimatePresence>

      <SiteHeader />
      <EditorialHome />
      <FilmsAndContact />
    </div>
  )
}

export default App
