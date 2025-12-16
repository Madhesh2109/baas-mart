import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/About'
import WhyChooseUs from './components/WhyChooseUs'
import ProductCategories from './components/ProductCategories'
import LocationTimings from './components/LocationTimings'

function App() {
  return (
    <div className='app-layout'>
      <Header />

      <main className='content'>
        <Hero />
        <About/>
        <WhyChooseUs />
        <ProductCategories />
        <LocationTimings />
      </main>
      
      <Footer />
    </div>
  )
}

export default App