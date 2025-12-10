import Btns from "./componnts/Btns"
import Cards from "./componnts/Cards"
import FooterBottom from "./componnts/FooterBottom"
import FooterSection from "./componnts/FooterSec"
import Navbar from "./componnts/Navbar"
import Section from "./componnts/Section"





const App = () => {
  return (
    <div>
      <Navbar />
      <Section/>
      <Btns/>
        <Cards/>
<FooterSection/>
<FooterBottom/>
    </div>
  )
}

export default App
