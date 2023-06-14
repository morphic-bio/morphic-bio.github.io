import React from 'react';
import { Footer, Blog, Whatmorphic, Header, Map, About, Events } from './containers';
import { Navbar } from './components';

import './App.css';
import { Route, Routes } from 'react-router-dom';

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />}></Route>
    <Route path="about-us" element={<AboutUs />}></Route>
    <Route path="events" element={<Event />}></Route>
  </Routes>
);

const HomePage = () => (
  <div className="App">
    <header className="gradient__bg">
      <Navbar />
      <Header />
    </header>
    <main>
      <Whatmorphic />
      <Map />
      <Blog />
    </main>
    <Footer />
  </div>
);

const AboutUs = () => (
  <div className="App">
    <header className="gradient__bg">
      <Navbar />
      <About />
    </header>
    <Footer />
  </div>
);

const Event = () => (
  <div className="App">
    <header className="gradient__bg">
      <Navbar />
      <Events />
    </header>
    <Footer />
  </div>
);

export default App;
