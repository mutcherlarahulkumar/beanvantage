import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Services from './components/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Hero />
      <Services />
    </div>
  )
}

export default App
