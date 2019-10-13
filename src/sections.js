import React from 'react';

// deklaracja top bar jest funkcją i {i wywołuje komponent}
// deklaracje
const TopBar =() => {
  return (<h1>TopBar</h1>)

}
const Attention = () => {
  return (<h1>Attention</h1>)
}
const Team = ()=> {
  return (<h1> Team</h1>)
}

const Offer = ()=> {
  return (<h1> Offer</h1>)
}

const Footer = ()=> {
  return (<h1>footer </h1>)
}


export {
  TopBar, Attention, Team, Offer,Footer
}





// nazwa sections wskazuje ,że plików jest wicej i nie da sie zrobić
// export deafault dlatego dla wielu PLIKÓW plan mówi wielu stosujemy export {co ś tam TopBar}