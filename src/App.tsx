import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateAccount from "./component/CreateAccount";
import Singup from "./component/Singup";
import Header from "./component/Header";
import CreateProfile from "./component/CreateProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/header" element={<Header/>} />
        <Route path="/createaccount" element={<CreateAccount/>} />
        <Route path="/signup" element={<Singup/>} />
        <Route path="/createprofile" element={<CreateProfile/>} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
