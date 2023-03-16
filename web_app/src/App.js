import React from 'react';
import { Footer, Blog, Whatmorphic, Header, Map } from './containers';
import { Navbar } from './components';

import './App.css';

const App = () => (
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

export default App;
