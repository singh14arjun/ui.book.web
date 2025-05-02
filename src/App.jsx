import { useState } from 'react'
import './App.css'
import Header from './elements/Header'
import Footer from './elements/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <Footer></Footer>
     </>
  )
}

export default App
