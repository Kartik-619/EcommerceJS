import gsap from "gsap/gsap-core";
import NavBar from "./components/NavBar"
import {ScrollTrigger} from "gsap/all";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Iphone from "./components/iphone/iPhone";
import Mac from "./components/mac/Mac";
gsap.registerPlugin(ScrollTrigger);
const  App= ()=>{
 return(

    <main><BrowserRouter>
        <NavBar/>
        
        <Routes>      
          <Route path="/"  element={<Mac/>}/>
          <Route path="/iphone"  element={<Iphone/>}/>
    </Routes>
  
 </BrowserRouter>   
    </main>
    
 )
}
export default App
