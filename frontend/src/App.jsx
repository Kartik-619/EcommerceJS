import gsap from "gsap/gsap-core";
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import ProductViewer from "./components/ProductViewer"
import {ScrollTrigger} from "gsap/all";
import Performance from "./components/Performance";
import Showcase from "./components/Showcase";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Highlights from "./components/Highlights";
gsap.registerPlugin(ScrollTrigger);
const  App= ()=>{
 return(
    <main>
      <NavBar/>
      <Hero/>
      <ProductViewer/>
      <Showcase/>
      <Performance/>
      <Features/>
      <Highlights/>
      <Footer/>
    </main>
 )
}
export default App
