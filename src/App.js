import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Card from "./components/Card";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact/:id" element={<Contact />} /> */}
          <Route path="/contact/" element={<Contact />} />
          <Route path='/card/:user' element={<Card />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
