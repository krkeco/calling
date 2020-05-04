import React from 'react';
import '../App.css';

import { Subscriptions, Facebook, Email } from '@material-ui/icons';

function App() {
  return (
    <div className="flexRow center ">
      <Subscriptions className="contactIcon clickable" />
      <Facebook className="contactIcon clickable" />
      <Email className="contactIcon clickable" />
    </div>
  );
}

export default App;
