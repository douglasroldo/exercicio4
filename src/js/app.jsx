import ReactDOM from 'react-dom';
import React from 'react';
import Titulo from './titulo/titulo';
import Menu from './menu/menu';

let App = (
  <div className="container">
      <Titulo titulo="UNOESC - React com Gulp2"/>
      <Menu/>

  </div>
);


ReactDOM.render(App, document.getElementById('app'));
