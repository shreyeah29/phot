import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EnquiryPage from '../app/enquiry/page.tsx'
import { IntroLoader } from './components/IntroLoader'
import { SiteHeader } from './components/SiteHeader'
import { EditorialHome } from './sections/EditorialHome'
import { ContactSection } from './sections/ContactSection'

function HomePage() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), 1200)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <>
      <AnimatePresence>{!ready ? <IntroLoader /> : null}</AnimatePresence>
      <SiteHeader />
      <EditorialHome />
      <ContactSection />
    </>
  )
}

function App() {
  return (
    <div className="min-h-dvh bg-sand-50 text-noir-900">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/enquiry" element={<EnquiryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
