import React from 'react';
import '../App.css';

function App(props) {
  // let story = "hidden";

  return (
    <div
      style={{
        backgroundImage: `url("${props.character}")`,
        backgroundSize: 'cover',
        width: '100%',
        height: '600px',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div style={{ width: '50%', paddingTop: '100px' }}>
        <div className="title">{props.name}</div>
        <p>the story of {props.name}</p>
      </div>
    </div>
  );
}

export default App;
