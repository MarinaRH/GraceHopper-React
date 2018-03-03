import React, { Component } from 'react';
import wiki from './wiki.png';
import './Aside.css';
// import Nav from './Nav';

class Aside extends Component {
  render() {
    return (
      <div className="Aside">
        <p>holaaa</p>
        <img src={wiki} className="Aside-wiki" alt="wiki" />
      </div>
     
    );
  }
}

export default Aside;