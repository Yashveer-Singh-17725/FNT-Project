import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import LandingPage from './views/Landing Page/landingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <LandingPage />
    </>
  )
}

export default App
