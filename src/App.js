import React from "react";
import { Routes, Route, } from "react-router-dom";


import Counter from "./components/Counter";
import Main from "./components/Main";
import Memo from "./components/Memo";
import Users from "./components/Users";


function App() {
  return ( 
    
    <Routes>
      <Route path="/" element={<Main/>}></Route>
      <Route path="/counter" element={<Counter/>}></Route>
      <Route path="/memo" element={<Memo/>}></Route>
      <Route path="/Users" element={<Users/>}></Route>
    </Routes>
    
  );
}

export default App;
