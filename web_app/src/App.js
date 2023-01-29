import React from 'react';
import { Footer, Blog, Whatmorphic, Header, Map } from './containers';
import { Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Whatmorphic />
    <Map />
    <Blog />
    <Footer />
  </div>
);

export default App;
