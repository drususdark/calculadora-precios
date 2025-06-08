import { Header } from './components/Header'
import { Calculator } from './components/Calculator'
import { Footer } from './components/Footer'
import './App.css'
import { Analytics } from '@vercel/analytics/react' // <-- Agregado
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 py-8">
        <Calculator />
      </main>
      <Footer />
      <Analytics /> {/* <-- Agregado aquí */}
    </div>
  )
}

export default App