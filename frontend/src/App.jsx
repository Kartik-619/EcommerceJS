import gsap from "gsap/gsap-core";
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import ProductViewer from "./components/ProductViewer"
import {ScrollTrigger} from "gsap/all";
import Performance from "./components/Performance";
import Showcase from "./components/Showcase";
gsap.registerPlugin(ScrollTrigger);
const  App= ()=>{
 return(
    <main>
      <NavBar/>
      <Hero/>
      <ProductViewer/>
      <Showcase/>
      <Performance/>
    </main>
 )
}
export default App
