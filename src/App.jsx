import { useState } from 'react'
// import './App.css'
import Topribbon from './components/topribben'
import Header from './components/header'
import Slider from './components/slider'
import Services from './components/services'
import About from './components/about'
import KnowTheNaure from './components/knowthenature'
import Sitemap from './components/sitemap'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Topribbon />
      <Header/>
      <Slider/>
      <Services/>
      <About/>
      <KnowTheNaure/>
      <Sitemap/>
      <Footer/>
    </>
  )
}

export default App
