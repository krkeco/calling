import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
import './App.css';

import Modal from '@material-ui/core/Modal';
import { Container, Col, Row, Button, Carousel } from 'react-bootstrap';

import Menu from './views/Menu';
// import About from './views/About';
import Bio from './views/Bio';
// import Promo from './views/Promo';
// import Contact from './views/Contact';
// import Story from './views/Story';
import Indiegogo from './views/Indiegogo';

import storyJSON from './views/stories.json';

import xerxes from './imgs/babylon/xerxes.png';

import babylon from './imgs/babylon/location.png';

import story1 from './imgs/old/estherjonah.png';
import story2 from './imgs/old/pauljoshua.png';
import about from './imgs/old/about.png';
import promo from './imgs/hero.png';
import esther from './imgs/estherAbout.png';
import influence from './imgs/influence.png';

import jonah from './imgs/stories/storyJonah.png';
import joshua from './imgs/stories/storyJoshua.png';

// import saul from './imgs/saul.png';
// import abigail from './imgs/abigail.png';
// import joab from './imgs/joab.png';
// import agag from './imgs/agag.png';

import backgroundStory from './imgs/bg/mid.png';

const scrollToRef = (ref) => {
  if (ref && ref.current) {
    window.scrollTo(0, ref.current.offsetTop - 50);
  }
};

var scrollPos = window.pageYOffset;
console.log(scrollPos);
// window.onscroll = function() {
//   scrollPos = window.pageYOffset;
//   console.log(scrollPos)
//   if (scrollPos > 800) {
//     document.getElementById("navbar").style.opacity = "1";
//   } else {
//     document.getElementById("navbar").style.opacity = "0";
//   }
//   // prevScrollpos = currentScrollPos;
// }

function App() {
  const [open, setOpen] = React.useState(false);
  const [bioContainer, setBioContainer] = useState('');

  const handleOpen = () => {
    setOpen(!open);
    window.scrollTo(0, 0);
    // setBioContainer("bioContainer")
  };

  const divRef = {
    about: useRef(null),
    promo: useRef(null),
    bio: useRef(null),
    contact: useRef(null),
  };

  // <p className="aboutText" >"The Calling" is a fun, family-friendly, deck-building game based on the Bible.  Join the game to relive the Bible characters and their stories.  your character of choice will interact with others in a world of callings and banes.  Your objective will be to achieve Your calling first, garner the most influence, or be the last one to succumb to your bane!</p>
  // <Promo divRef={divRef} scrollToRef={scrollToRef} />
  return (
    <div className="app">
      <Menu handleOpen={handleOpen} scrollToRef={scrollToRef} divRef={divRef} />

      <span ref={divRef.promo}></span>

      <div className="title textShadow appTitle">The Calling</div>
      <img className="titleIcon" src={influence} />
      <div
        style={{
          backgroundImage: `url("${promo}")`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        className="comicImg promo"
      >
        <img className="comicImg promoEsther" src={esther} />
      </div>

      <img className="comicImg about" src={about} />
      <span ref={divRef.about}></span>

      <img className="comicImg story1" src={story1} />
      <img className="comicImg story2" src={story2} />

      <span ref={divRef.contact}></span>
      <Indiegogo />

      <div
        className={`bioContainer ${open ? 'active' : ''}`}
        onClick={handleOpen}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Bio />
      </div>
      {/**<span ref={divRef.bio}></span>**/}
    </div>
  );
}

export default App;
