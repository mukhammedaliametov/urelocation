import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Hero from './components/Hero';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
    </BrowserRouter>
  );
};

export default App;
