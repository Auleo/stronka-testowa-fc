import React from 'react';
import Landing from './sections/Landing'
import Nav from './sections/Nav'
import Offer from './sections/Offer'
import Footer from './sections/Footer'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="app">
      <Nav />
      <Attention />
      <Landing/>
      <Offer/>
      <Footer/>
    </div>
  );
}

export default App;













// export deafaut stosowany kiedy jeden element jest wykożystywany