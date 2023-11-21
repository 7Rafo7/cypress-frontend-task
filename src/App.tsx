import React from 'react';
import Header from "./Components/Header/Header";
import Presentation from "./Components/Presentation/Presentation";
import About from "./Components/About/About";
import Gallery from "./Components/Gallery/Gallery";
import Footer from "./Components/Footer/Footer";

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Presentation />
      <About />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
