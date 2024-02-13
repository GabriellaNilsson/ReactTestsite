import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './Components/menu';
import Footer from './Components/Footer';
import About from './Pages/About';
import Pictures from './Pages/Pictures';
import Home from './Pages/Home';
import Contact from './Pages/Contact';

export default function App() {
  return(
     <div classname="site-container">
        <header classname="site-header">
          <Menu/>
        </header>
        <main classname="site-content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/pictures" element={<Pictures/>}/>
          </Routes>
        </main>
        <Footer classname="site-footer">
          <Footer/>
        </Footer>
     </div>
  );
}

