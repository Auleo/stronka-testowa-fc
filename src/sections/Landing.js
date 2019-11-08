import React from 'react';

import { Button } from 'reactstrap';

const Landing = () => {
    return (
      <div className="attention valign-wrapper">
        <div className="container">
          <div className="row">
            <div className="col s8 no-p">
            <div className="card">
          <div className="card-content">
            <span className="card-title text-bold">
              Nasza firma oferuje najwyższej jakości produkty.
            </span>
  
            <p>Nie wierz nam na słowo - sprawdź</p>
          </div>
          <div className="card-action">
        <a href="#" className="waves-effect waves-light btn-large light-green" >
              Oferta
            </a>
          </div>
          </div>
            </div>
            <div className="col s4" />
          </div>
          <Button variant="outline-success">Oferta</Button>
  
        </div>
      </div>
    );
  };


export default Landing;