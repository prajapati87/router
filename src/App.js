import React from "react";
import { Navbar } from "./componets/Navbar";
import Carousel from "./componets/Carousel";
import Template from "./componets/Template";
import Footer from "./componets/Footer";
import About from "./componets/About_us/About";
import Contact from "./componets/Contact_us/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="About" element={<About />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

const Home = () => {
  return (
    <div>
      <Carousel />
      <Template />
    </div>
  );
};

export default App;
