import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Correct imports from React Router v6
import NavBar from './NavBar'; // Import the NavBar component
import Home from './Home';
import About from './About';
import Events from './Events';
import Contact from './Contact';
import Gallery from './Gallery'
import './App.css';
import Footer from './Footer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <BrowserRouter> {/* Wrap your app with BrowserRouter */}
      <NavBar /> {/* Place the NavBar outside of Routes to make it persist across pages */}
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<Home />} /> {/* Define the routes with element prop */}
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
      
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
