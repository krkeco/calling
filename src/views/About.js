import React from 'react';
import '../App.css';
import Contact from './Contact';
import Grid from '@material-ui/core/Grid';
import splash from '../imgs/trifecta.png';

function App() {
  // <div className="appBg" style={{ height: '90vh', paddingTop:'50px' }}>
  return (
    <Grid
      container
      className="appBg padded"
      style={{ width: '100%', margin: 0 }}
      spacing={2}
    >
      <Grid item xs={12} md={6}>
        <img style={{ height: '50vh' }} src={splash} />
      </Grid>
      <Grid item xs={12} md={6}>
        <div className="title">The Game</div>

        <p className="blockText">
          The Calling is a deck building game based around the Bible. It is not
          a retelling but a fun ‘reliving’ of Bible characters and their
          stories. Characters will interact with each other in a world of
          callings and banes- trying to achieve their calling, garner the most
          influence, or be the last character to succumb to their bane. It is
          definitely a game that focuses on the core ideas in a story and not
          the nitty gritty details (though we do try to keep it Bible accurate)
        </p>

        <Contact />
      </Grid>
    </Grid>
  );
}

export default App;
