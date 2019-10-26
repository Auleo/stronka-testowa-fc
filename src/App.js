import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Landing from './sections/Landing'
import Attention from './sections/Attentions';
import Footer from './sections/Footer'
import {Jumbotron, Button } from 'reactstrap';
import './App.css';

class App extends Comment {

  clicky = ( e ) => {
        
    render {
      return (
    <div className="App">
      <Jumbotron>
        <h1 className="display-3">Firma</h1>
                <p className="lead"><h1>Nasza firma oferuje najwyższej jakosci produkty.
        </h1>
        </p>

        <hr className="my-2" />
        <p>Nie wierz nam na słowo - sprawdź</p>

        <p className="lead">

      <Button color="primary" >Oferta</Button>
        </p>
      </Jumbotron>
    </div>
  );
      }
  }
}
export default App;
















// export deafaut stosowany kiedy jeden element jest wykożystywany