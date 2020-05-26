import React from 'react';
import '../App.css';

import { Subscriptions, Facebook, Email } from '@material-ui/icons';

function App() {
  return (
    <div className="flexRow center ">
      <Subscriptions className="contactIcon clickable" />
      <Facebook className="contactIcon clickable" />
      <a target="_blank" href="mailto: thecallinglcg@gmail.com">
        <Email className="contactIcon clickable" />
      </a>
    </div>
  );
}

export default App;
