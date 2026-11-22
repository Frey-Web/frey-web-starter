import { Route, Routes } from 'react-router-dom'
import { SeoManager } from '@/components/SeoManager'
import Home from '@/pages/Home'

export default function App() {
  return (
    <>
      <SeoManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}
