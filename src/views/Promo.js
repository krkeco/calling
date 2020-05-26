import React from 'react';
import '../App.css';

import BR from './BR.js';

import logo from '../logo.svg';
import splash from '../imgs/hero.png';

import saul from '../imgs/saul.png';
import abigail from '../imgs/abigail.png';
import david from '../imgs/david.png';
import joab from '../imgs/joab.png';
import samuel from '../imgs/samuel.png';
import agag from '../imgs/agag.png';
import esther from '../imgs/babylon/esther.png';

function App(props) {
  // <div className="promoTitle textShadow">
  //   THE CALLING
  // </div>
  return (
    <div>
      <img style={{ width: '100vw', padding: 0, margin: 0 }} src={splash} />
    </div>
  );
}

export default App;
