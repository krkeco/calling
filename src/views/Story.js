import React from 'react';
import '../App.css';

function App(props) {
  // let story = "hidden";

    // <div
    // >
    //   <div style={{ width: '50%', paddingTop: '100px' }}>
    //   </div>
    //   <div style={{ width: '50%' }}>
    //   </div>
    // </div>
  return (<div className="flexRow" style={{height: 400,alignItems:'flex-end', width:'100%'}} >
    <div className="flexCol"
      style={{
        backgroundImage: `url("${props.loc}")`,
        backgroundSize: 'cover',
        width: '100%',
        height: '400px',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className="title  textShadow">{props.name}</div>
        <p>the story of {props.name}</p>
      
    </div>
    <div style={{width:'400px', alignItems:'flex-end'}} className="flexCol">
      <img src={props.character} height="400px" width="400px" />
    </div>
    </div>
  );
}

export default App;
