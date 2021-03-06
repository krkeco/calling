import React from 'react';
import '../App.css';
import Contact from './Contact';

import Grid from '@material-ui/core/Grid';
import xerxes from '../imgs/gold.png';
import background from '../imgs/bg/bio.png';

function App() {
  return (
    <div
      className="flexRow bioWrap"
      style={{
        backgroundImage: `url("${background}")`,
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Grid container className="bioScroller" style={{ marginBottom: 20 }}>
        <Grid xs={12}>
          {' '}
          <p className="bioTitle  textShadow" style={{ marginBottom: 5 }}>
            Background Story
          </p>
        </Grid>
        <Grid xs={12} md={8} className="flexCol" style={{ padding: 20 }}>
          <p>
            I want a game that reminds me of the Bible and the sagas epics and
            adventures that we have there A lot of times when I think of the
            Bible it comes off as stale or old or dated... But it isn't it's
            really interesting I have always wanted to give my creativity to God
            and make something that I really enjoy (games, and making things)
            and give it to him This may not be the best game ever (ie dominion
            2.0 ) but it is fun, simple and illicits your imagination to what
            the Bible would be like in a fantasy setting We believe in the
            inerrant truth of the Bible and that it is the God inspired word (of
            God) We want to remind ourselves and those who play that it can be
            fun to learn about and think about the Bible and the callings of
            those who are in it
          </p>
          <Contact />
        </Grid>
        <Grid xs={12} md={4} className="flexCol">
          <div className="flexRow">
            <div className="flexCol">
              <img style={{ width: '100px', height: '100px' }} src={xerxes} />
            </div>
            <div className="flexCol" style={{ textAlign: 'left' }}>
              <span className="heavyFont">KC</span>
              <p>Game Design</p>
            </div>
          </div>
          <div className="flexRow">
            <div className="flexCol">
              <img style={{ width: '100px', height: '100px' }} src={xerxes} />
            </div>
            <div className="flexCol" style={{ textAlign: 'left' }}>
              <span className="heavyFont">DB</span>
              <p>The Art</p>
            </div>
          </div>
          <div className="flexRow">
            <div className="flexCol">
              <img style={{ width: '100px', height: '100px' }} src={xerxes} />
            </div>
            <div className="flexCol" style={{ textAlign: 'left' }}>
              <span className="heavyFont">Hannah</span>
              <p>Graphic Design and Marketing</p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
