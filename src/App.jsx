import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import CleaningPage from "./pages/CleaningPage.jsx";
import GroutingPage from "./pages/GroutingPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import TilesPage from "./pages/TilesPage.jsx";

const pageTitles = {
  "/": "MK Tiles | Tile Installation & Floor Care",
  "/tiles": "Tile Installation | MK Tiles",
  "/grouting": "Grouting & Epoxy | MK Tiles",
  "/cleaning": "Tile Cleaning | MK Tiles",
  "/about": "About Us | MK Tiles",
};

function RouteEffects() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    document.title = pageTitles[pathname] || "Page Not Found | MK Tiles";
    if (hash) {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [pathname, hash]);

  return null;
}

function SiteLayout() {
  return (
    <>
      <RouteEffects />
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tiles" element={<TilesPage />} />
          <Route path="/grouting" element={<GroutingPage />} />
          <Route path="/cleaning" element={<CleaningPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <SiteLayout />
    </BrowserRouter>
  );
}
