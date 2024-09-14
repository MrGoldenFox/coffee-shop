import "../src/styles.css";
import React from "react";
import Header from "./components/Header.jsx";
import MainPage from "./pages/MainPage.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <MainPage />
      <Footer />
    </>
  );
}
