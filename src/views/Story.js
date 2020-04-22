import React from 'react';
import '../App.css';

function App(props) {
  return (
    <div
      className="story container padded"
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
    >
      <div className="title">{props.name}</div>

      <img style={{ width: '80%' }} src={props.loc} />
      <div className="flexRow center">
        <p>the story of {props.name}</p>
        <img
          style={{ width: 'auto', maxHeight: '300px' }}
          src={props.character}
        />
      </div>
    </div>
  );
}

export default App;
