import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateAccount from "./component/CreateAccount";
import Singup from "./component/Singup";
import Header from "./component/Header";
import CreateProfile from "./component/CreateProfile";
import Footer from "./component/Footer";
import HeaderMain from "./component/HeaderMain";
import Heropanel from "./component/Heropanel";
import FighterSliderpage from "./component/FighterSliderpage";
import Searchpages from "./component/Searchpages";
import FighterSliderpagesec from "./component/FighterSliderpagesec";
import Reels from "./component/Reels";
import Forum from "./component/Forum";
import Commentpage from "./component/Commentpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/header" element={<Header/>} />
        <Route path="/createaccount" element={<CreateAccount/>} />
        <Route path="/signup" element={<Singup/>} />
        <Route path="/" element={<CreateProfile/>} />
        <Route path="/footer" element={<Footer/>} />
        <Route path="/mainheader" element={<HeaderMain/>} />
        <Route path="/heropanel" element={<Heropanel/>} />
        <Route path="/fightersliderpage" element={<FighterSliderpage/>} />
        <Route path="/searchpage" element={<Searchpages/>} />
        <Route path="/fightersliderpagesec" element={<FighterSliderpagesec/>} />
        <Route path="/reels" element={<Reels/>} />
        <Route path="/forum" element={<Forum/>} />
        <Route path="/commentpage" element={<Commentpage/>} />








        





      </Routes>
    </BrowserRouter>
  );
}

export default App;
