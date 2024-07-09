import { useState } from "react";
import "./App.css";
import { Banner, FAQ, Footer, HowDo, Navbar, WhatAre,Support } from "./components";
function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <HowDo />
      <WhatAre />
      <FAQ />
      <Support />
      <Footer />
    </>
  );
}

export default App;
