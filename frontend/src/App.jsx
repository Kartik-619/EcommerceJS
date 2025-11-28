import gsap from "gsap/gsap-core";
import NavBar from "./components/NavBar"
import {ScrollTrigger} from "gsap/all";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Iphone from "./components/iphone/iPhone";
import Mac from "./components/mac/Mac";
import Store from "./components/storePage/Store";
gsap.registerPlugin(ScrollTrigger);
const  App= ()=>{
 return(

    <main><BrowserRouter>
        <NavBar/>
        
        <Routes>      
          <Route path="/"  element={<Mac/>}/>
          <Route path="/iphone"  element={<Iphone/>}/>
          <Route path="/store" element={<Store/>} />
    </Routes>
  
 </BrowserRouter>   
    </main>
    
 )
}
export default App
