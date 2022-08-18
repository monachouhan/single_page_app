import React from "react";
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import { Routes } from "react-router-dom";
function Main(){
   return(
     <BrowserRouter>
     <div>
       <h1>Single Page Application</h1>
       <ul className="header">
        <li><NavLink to="/" >Home</NavLink></li>
        <li><NavLink to="/stuff">Stuff</NavLink></li>
        <li><NavLink to="/contact" >Contact</NavLink></li>
       </ul>
       <div className="content">
         <Routes>
       <Route exact path="/" element={<Home />}/>
            <Route path="/stuff" element={<Stuff />}/>
            <Route path="/contact" element={<Contact />}/>
            </Routes>
       </div>
     </div>
     </BrowserRouter>
   )
}
export default Main