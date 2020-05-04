import React, { useRef, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Modal from '@material-ui/core/Modal';
import { Container, Col, Row, Button, Carousel } from 'react-bootstrap';

import Menu from './views/Menu';
import About from './views/About';
import Bio from './views/Bio';
import Promo from './views/Promo';
import Contact from './views/Contact';
import Story from './views/Story';

import babylon from './imgs/babylon/location.png';
import xerxes from './imgs/babylon/xerxes.png';

import esther from './imgs/stories/Esther.png';
import jonah from './imgs/stories/Jonah.png';
import joshua from './imgs/stories/Joshua.png';

import saul from './imgs/saul.png';
import abigail from './imgs/abigail.png';
import joab from './imgs/joab.png';
import agag from './imgs/agag.png';

import influence from './imgs/influence.png';
import gold from './imgs/gold.png';

const scrollToRef = (ref) => {
  if(ref && ref.current){
    window.scrollTo(0, ref.current.offsetTop);
  }
};

function App() {

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const divRef = {
    about: useRef(null),
    promo: useRef(null),
    bio: useRef(null),
    contact: useRef(null),
  };

  return (
    <div className="app">
      <Menu handleOpen={handleOpen} scrollToRef={scrollToRef} divRef={divRef} />
      <div>
        <Promo divRef={divRef} scrollToRef={scrollToRef} />
        <span ref={divRef.promo}></span>

        <About />
        <div ref={divRef.about}></div>

        <Carousel>
          <Carousel.Item>
            <Story name="Jonah" loc={babylon} character={jonah} />
          </Carousel.Item>
          <Carousel.Item>
            <Story name="Esther" loc={babylon} character={esther} />
          </Carousel.Item>
          <Carousel.Item>
            <Story name="Joshua" loc={babylon} character={joshua} />
          </Carousel.Item>
          {/** 
        <Carousel.Item>
          <Story offset={storyHide[3]} name="Paul" loc={babylon} character={saul} />
        </Carousel.Item>
        **/}
        </Carousel>

        <div className="preOrder padded appBg flexRow">
          <div className="flexCol" style={{ flex: 1, paddingLeft: '200px', paddingRight: '200px' }}>
            <p className="title">Pre order</p>
            <p  >
              Join the Waitlist. As we get working on releaseing both our
              starter and standard / full kit of “The Call - ings,” you can get
              in line for your very own set. Any qyestions? Contact us today.
            </p>
            <Contact/>
          </div>
          <div className="flexCol" style={{ flex: 1 }}>
            <div className="flexRow">
              <div className="flexCol" style={{ flex: 1 }}>
                <img
                  style={{ width: '200px', height: '200px' }}
                  src={influence}
                />
              </div>
              <div className="flexCol" style={{ flex: 1 }}>
                <img style={{ width: '200px', height: '200px' }} src={gold} />
              </div>
            </div>
          </div>
        </div>
        <span ref={divRef.contact}></span>

<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="simple-modal-title"
  aria-describedby="simple-modal-description"
>
  <Bio />
</Modal>
        {/**<span ref={divRef.bio}></span>**/}
      </div>
    </div>
  );
}

export default App;
