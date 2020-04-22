import React from 'react';
import '../App.css';

import splash from '../imgs/splash.png';

function App() {
  return (
    <div className="About container padded">
      <div className="title"> About The Calling </div>
      <div style={{ display: 'flex', height: '500px', flexDirection: 'row' }}>
        <img style={{ height: '350px' }} src={splash} />
        <div style={{ margin: '10px' }}>
          <p className="blockText" >
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
        </div>
      </div>
    </div>
  );
}

export default App;
