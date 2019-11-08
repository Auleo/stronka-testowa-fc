import React from 'react';
import Nav from './sections/Nav'
import Landing from './sections/Landing'
import About from './sections/About'
import Offer from './sections/Offer'
import Footer from './sections/Footer'


import './App.css';

function App() {
    return (
      <div className="app">
        { /*wywołanie komponentu */ }
        <Nav/>
        <Landing/>
        <About/>
        <Offer />
        <Footer />
      </div>
    );
}
export default App;
















// export deafaut stosowany kiedy jeden element jest wykożystywany