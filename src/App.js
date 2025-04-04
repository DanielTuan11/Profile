import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; // ⛔ Đừng import HashRouter ở đây
import axios from 'axios';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import ContactCard from './pages/ContactCard';
import EditContact from './pages/EditContact';
import NotFound from './pages/NotFound';

// Styles
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarWrapper = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const isContactCardPage = location.pathname.includes('/contact');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile && isContactCardPage) return null;
  return <Navbar />;
};

const App = () => {
  return (
    <div className="app-container d-flex flex-column min-vh-100">
      <NavbarWrapper />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<ContactCard />} />
          <Route path="/contact/:username" element={<ContactCard />} />
          <Route path="/edit" element={<EditContact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
