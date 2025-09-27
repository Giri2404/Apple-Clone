import Nav from './Components/Nav'
import Hero from './Components/Hero'
import Section from './Components/Section'
import Footer from './Components/Footer'

import one from "./assets/images/i3.jpg"
import two from "./assets/images/i2.png"
import three from "./assets/images/i1.jpg"


function App() {
  return (
    <div className="bg-neutral-900 text-white font-sans">
      <Nav />
      <Hero />
      <Section 
        title="All out Pro."
        description="The thinnest iPhone ever. With the power of pro inside."
        image={one}
        buttonText="Learn More"
      />
      <Section 
        title="Magichromatic."
        description="The world’s best in-ear Active Noise Cancellation."
        image={two}
        buttonText="Buy"
      />
      <Section 
        title="Personal beast."
        description="Upgrade and save. It’s that easy."
        image={three}
        buttonText="Shop"
      />
      <Footer />
    </div>
  )
}

export default App
