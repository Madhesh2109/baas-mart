import Header from './components/Header'
import Opening from './components/Opening'
import Origin from './components/Origin'
import Process from './components/Process'
import Principles from './components/Principles'
import ProductReveal from './components/ProductReveal'
import HumanClose from './components/HumanClose'
import Order from './components/Order'
import Footer from './components/Footer'


function App() {
  return (
    <div className="app-layout">
      <Header />

      <main className='story'>
        <Opening />
        <Origin />
        <Process />
        <Principles />
        <ProductReveal />
        <HumanClose />
        <Order />
      </main>

      <Footer />
    </div>
  )
}

export default App