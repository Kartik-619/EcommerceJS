import gsap from "gsap/gsap-core";
import NavBar from "./components/NavBar"
import {ScrollTrigger} from "gsap/all";
import ProductPage from "./components/storePage/ProductPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Iphone from "./components/iphone/iPhone";
import Mac from "./components/mac/Mac";
import Store from "./components/storePage/Store";
import Login from "./components/Register/login"
import Register from "./components/Register/register";
gsap.registerPlugin(ScrollTrigger);
const  App= ()=>{
 return(

    <main><BrowserRouter>
        <NavBar/>
        
        <Routes>      
          <Route path="/"  element={<Mac/>}/>
          <Route path="/iphone"  element={<Iphone/>}/>
          <Route path="/store" element={<Store/>} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
    </Routes>
  
 </BrowserRouter>   
    </main>
    
 )
}
export default App
