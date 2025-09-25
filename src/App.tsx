import React, { useEffect, useState } from "react";
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
import Marketplace from "./component/Marketplace";
import Productpage from "./component/Productpage";
import Storecreate from "./component/Storecreate";
import Addproduct from "./component/Addproduct";
import Forgotpassword from "./component/Forgotpassword";
import Verify from "./component/Verify";
import Viewstore from "./component/Viewstore";
import Skeleton from "./component/Skeleton";

function App() {
    const [loading, setLoading] = useState(true);

      useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <BrowserRouter>
     <Skeleton loading={loading}>
      <Routes>
        {/* <Route path="/header" element={<Header/>} /> */}
        <Route path="/createaccount" element={<CreateAccount/>} />
        <Route path="/signup" element={<Singup/>} />
        <Route path="/createprofile" element={<CreateProfile/>} />
        <Route path="/footer" element={<Footer/>} />
        <Route path="/mainheader" element={<HeaderMain/>} />
        <Route path="/" element={<Heropanel/>} />
        <Route path="/fightersliderpage" element={<FighterSliderpage/>} />
        <Route path="/searchpage" element={<Searchpages/>} />
        <Route path="/fightersliderpagesec" element={<FighterSliderpagesec/>} />
        <Route path="/reels" element={<Reels/>} />
        <Route path="/forum" element={<Forum/>} />
        <Route path="/commentpage" element={<Commentpage/>} />
        <Route path="/marketplace" element={<Marketplace/>} />
        <Route path="/productpage" element={<Productpage/>} />
        <Route path="/storecreate" element={<Storecreate/>} />
        <Route path="/addproduct" element={<Addproduct/>} />
        <Route path="/forgotpassword" element={<Forgotpassword/>} />
        <Route path="/verify" element={<Verify/>} />
        <Route path="/viewstore" element={<Viewstore/>} />
      </Routes>
      </Skeleton>
    </BrowserRouter>
  );
}

export default App;
