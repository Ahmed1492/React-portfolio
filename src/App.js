import React from 'react';
import { Navbar } from './component/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from './pages/about/About';
import { Home } from './pages/home/Home';
import { Contact } from './pages/contact/Contact';
import { Project } from './pages/project/Project';
import "./index.css";
import { HomePage } from './pages/home/HomePage';

export default function App() {
  return (
    <div >
      <div >
        <BrowserRouter>

          {/* <Navbar /> */}


          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<About />} />
            <Route path='/project' element={<Project />} />
            <Route path='/contact' element={<Contact />} />

          </Routes>
        </BrowserRouter>

      </div>
    </div>
  );
}
