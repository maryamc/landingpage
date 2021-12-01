import React from "react";
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Logo from "./components/logo/logo";
// import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home";
import About from "./pages/about"
import Footer from "./components/footer/Footer"
import Jumbotron from "./components/jumbotron/jumbotron"
import Contact from "./pages/contact";



function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <div>
          <Logo />
          <Jumbotron />
          {/* <NavBar /> */}
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact patch="/About" element={<About />} />
            <Route exact path="/Contact" element={<Contact />}/>
          </Routes>
          <Footer />
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
