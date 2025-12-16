import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className='app-layout'>
      <Header />
      <main className='content'>
        <h1 style={{ padding: "2rem" }}>Welcome to Baas Mart</h1>
      </main>
      <Footer />
    </div>
  )
}

export default App