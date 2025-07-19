import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

import * as Sentry from '@sentry/react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const Home = () => (
  <main className="bg-black">
    <Navbar />
    <Hero />
    <Highlights />
    <Model />
    <Features />
    <HowItWorks />
    <Footer />
  </main>
);

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect '/' to '/mohammedafreedhi' */}
        <Route path="/" element={<Navigate to="/mohammedafreedhi" replace />} />
        
        {/* Route for /mohammedafreedhi */}
        <Route path="/mohammedafreedhi" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default Sentry.withProfiler(App);
