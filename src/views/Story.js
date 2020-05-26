import React from 'react';
import '../App.css';

import Grid from '@material-ui/core/Grid';

function App(props) {
  // let story = "hidden";

  // <div
  // >
  //   <div style={{ width: '50%', paddingTop: '100px' }}>
  //   </div>
  //   <div style={{ width: '50%' }}>
  //   </div>
  // </div>
  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        md={7}
        style={{ padding: 0 }}
        className="flexCol center paddless"
      >
        <div
          className="storyLoc "
          style={{
            backgroundImage: `url("${props.loc}")`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="title textShadow">{props.name}</div>
          <p className="storyText">{props.story}</p>
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        md={5}
        style={{ padding: 0 }}
        className="flexCol storyImg"
      >
        <img src={props.character} height="400px" width="400px" />
      </Grid>
    </Grid>
  );
}

export default App;
