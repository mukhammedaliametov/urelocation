import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Hero from './components/Hero';
import Footer from './components/Footer';
import ImmigrationPage from "./components/ImmigrationPage";
import EligibilityPage from "./components/EligibilityPage";
import FAQ from "./components/FAQ";
import Relocation from './components/Relocation';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <ImmigrationPage />
      <Relocation />
      <EligibilityPage />
      <FAQ />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
