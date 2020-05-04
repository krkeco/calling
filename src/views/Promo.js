import React from 'react';
import '../App.css';

import BR from './BR.js';

import logo from '../logo.svg';
import splash from '../imgs/splash.png';

import saul from '../imgs/saul.png';
import abigail from '../imgs/abigail.png';
import david from '../imgs/david.png';
import joab from '../imgs/joab.png';
import samuel from '../imgs/samuel.png';
import agag from '../imgs/agag.png';
import esther from '../imgs/babylon/esther.png';

function App(props) {
  return (
    <div>
      <div
        style={{
          fontFamily: 'Luminari',
          fontSize: '64px',
          fontWeight: 200,
          position: 'absolute',
          top: 150,
          textAlign: 'center',
          width: '100%',
        }}
      >
        THE CALLING
      </div>
      <img style={{ width: '100%', margin: 0, padding: 0 }} src={splash} />

      {/**  <p className="blockText">
        The Calling is a deck building game based around the Bible.
        It is not a retelling but a fun ‘reliving’ of Bible characters and their stories.
        Characters will interact with each other in a world of callings and banes- 
        trying to achieve their calling, garner the most influence, or be the last character to succumb to their bane.
        It is definitely a game that focuses on the core ideas in a story and not the nitty gritty details
        (though we do try to keep it Bible accurate)
      </p>

      <BR />

      <div className="title">big box full contents</div>

      <BR />

      <div className="title">Stories</div>

      <div className="flexRow center">
        <div className="flexCol clickable" onClick={()=>props.scrollToRef(props.divRef.paul)}>
          <img style={{ width: 'auto', maxHeight: '300px' }} src={saul} />
          <p className="textMedium">Paul</p>
        </div>
        <div className="flexCol clickable" onClick={()=>props.scrollToRef(props.divRef.esther)}>
          <img style={{ width: 'auto', maxHeight: '300px' }} src={esther} />
          <p className="textMedium">Esther</p>
        </div>
        <div className="flexCol clickable" onClick={()=>props.scrollToRef(props.divRef.joshua)}>
          <img style={{ width: 'auto', maxHeight: '300px' }} src={david} />
          <p className="textMedium">Joshua</p>
        </div>
        <div className="flexCol clickable" onClick={()=>props.scrollToRef(props.divRef.jonah)}>
          <img style={{ width: 'auto', maxHeight: '300px' }} src={samuel} />
          <p className="textMedium">Jonah</p>
        </div>
      </div>
      <BR />
      <div className="title">rules</div>
      <BR />
      <div className="title">video</div>
      <BR />
      <div>different game box sizes (duel set, 4 player, big set)</div>
    **/}
    </div>
  );
}

export default App;
