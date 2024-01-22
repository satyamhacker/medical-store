import React from "react";
import Add_items from "./Add_show_items/Add_items";
import Show_items from "./Add_show_items/Show_items";
import Login from "./signup_login/Login";
import Signup from "./signup_login/Signup";
import { BrowserRouter , Routes, Route } from 'react-router-dom';


function App() {

  return (
    
     <BrowserRouter>
      <Routes>
        
       
        <Route path="/login"  element={<Login />} />
        <Route path="/additems"  element={<Add_items />} />
        <Route path="/showitems"  element={<Show_items />} />
        <Route path="/"  element={<Signup />}/>
          
      </Routes>
    </BrowserRouter>


  )
}

export default App
