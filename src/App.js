import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Componentes/Navbar";
import Header from "./Componentes/Header";
import Products from "./Componentes/Products";
import About from "./Componentes/About";
import Contact from "./Componentes/Contact";
import Loading from "./Componentes/Loading";
import Footer from "./Componentes/Footer";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <>
          <Navbar />
          <Header />
          <Products />
          <About />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
