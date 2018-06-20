import React from 'react';

class Menu extends React.Component{
  render(){
    return (
      <div classname="container">
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">Logo1</a>
            <ul id="nav-mobile" className="right">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
          </div>
        </nav>
        </div>
    );
  }
}

export default Menu;
