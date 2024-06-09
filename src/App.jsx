import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
        <Navbar/>
        <Home/>
        <About/>
    </div>
  )
}

export default App
