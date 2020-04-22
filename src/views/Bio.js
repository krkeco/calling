import React from 'react';
import '../App.css';

import xerxes from '../imgs/babylon/xerxes.png';

function App() {
  return (
    <div className="container flexCol center">
      <p>Here's a little bit about us! </p>
      <div className="flexRow spaceAround">
      <div style={{width:'30%'}} >
      <img style={{ width: '60%' }} src={xerxes} />
      <p>KC </p>
      <p>Software Developer who loves playing games and reading about the magic of the world (ie Tolkein, MacDonald, Chesterton, Lewis).  
      Has always had a heart to express this in a format that can inspire the world and pull people closer to the Word
      </p>
      </div>
      <div style={{width:'30%'}} >
      <img style={{ width: '60%' }} src={xerxes} />
      <p>DB</p>
      <p>Artist who has spent years following his heart and imagination.
      ALways looking to push the envelop and try something different.</p>
      </div>
      <div style={{width:'30%'}} >
      <img style={{ width: '60%' }} src={xerxes} />
      <p>HN</p>
      <p>
      Graphic Designer with a MA in Theology, mostly along for the ride with KC :P
      </p>
      </div>
      </div>
    </div>
  );
}

export default App;
