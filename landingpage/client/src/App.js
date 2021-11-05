import React from "react";
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Home from "./pages/home";



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
        <div>
          <Routes>
            <Route exact path="/" component={Home}/>
          </Routes>
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
