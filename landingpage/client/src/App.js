import React from "react";
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import NavBar from "./components/navbar/NavBar";
import home from "./pages/home"
import about from "./pages/about";
import Footer from "./components/footer/Footer";



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
        <div>
          <NavBar />
          <Routes>
            <Route exact path="/" component={home}/>
            <Route exact path="/about" component={about}/>
          </Routes>
          <Footer />
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
