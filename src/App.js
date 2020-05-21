import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
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
import Indiegogo from './views/Indiegogo';

import storyJSON from './views/stories.json';

import xerxes from './imgs/babylon/xerxes.png';

import babylon from './imgs/babylon/location.png';

import storybabylon from './imgs/stories/storybg2.png';
import storynineveh from './imgs/stories/storybg.png';
import storycanaan from './imgs/stories/storybg3.png';

import esther from './imgs/stories/storyEsther.png';
import jonah from './imgs/stories/storyJonah.png';
import joshua from './imgs/stories/storyJoshua.png';

import saul from './imgs/saul.png';
import abigail from './imgs/abigail.png';
import joab from './imgs/joab.png';
import agag from './imgs/agag.png';

import backgroundStory from './imgs/bg/mid.png'

const scrollToRef = (ref) => {
  if(ref && ref.current){
    window.scrollTo(0, ref.current.offsetTop-50);
  }
};

function App() {

  const [open, setOpen] = React.useState(false);
  const [bioContainer, setBioContainer] = useState("");

  const handleOpen = () => {
    setOpen(!open);
    window.scrollTo(0, 0);
    // setBioContainer("bioContainer")
  };

  const handleClose = () => {
    // setOpen(false);
    // setBioContainer("")
  };

  const divRef = {
    about: useRef(null),
    promo: useRef(null),
    bio: useRef(null),
    contact: useRef(null),
  };
  
  const [menuVis, setMenuVis] = useState(0)
  const [scrollPosition, setSrollPosition] = useState(0);
  let lock = 0
  
  const handleScroll = () => {
    // setScrollPosition(position);
    // console.log('scrolled to '+position)
    // if(!lock){
      const position = window.pageYOffset;
      if(position > 100+ lock || position < lock - 100){
        lock = position
        if(position > 800 && position < 850){
        console.log('lock'+lock+" menu"+menuVis)
          // setMenuVis(1)
        }else{
          // setMenuVis(0)
        }
      }
    //   lock = true
    //   setTimeout(()=>{lock = false;console.log('locked')},100)
      // if(position > 800){
      //   setMenuVis(1)
      // } else{
      //   setMenuVis(0)
      // }
    // }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: false });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app">
      <Menu visibility={menuVis} key={menuVis} handleOpen={handleOpen} scrollToRef={scrollToRef} divRef={divRef} />
      
        <Promo divRef={divRef} scrollToRef={scrollToRef} />
        <span ref={divRef.promo}></span>

        <About />
        <div ref={divRef.about}></div>

   
        <div style={{
          backgroundImage: `url("${backgroundStory}")`,
          backgroundSize: 'cover',
          width: '100%',
          backgroundRepeat: 'no-repeat',
        }} 
        className="gogoBg" >
        <Carousel  
        style={{height:'100%',width:'100%'}}
        >
          <Carousel.Item style={{height:'100%'}} >
            <Story name="Jonah" loc={storynineveh} story={storyJSON.jonah}  character={jonah} />
          </Carousel.Item>
          <Carousel.Item style={{height:'100%'}}>
            <Story name="Esther" loc={storybabylon} story={storyJSON.esther} character={esther} />
          </Carousel.Item>
          <Carousel.Item style={{height:'100%'}}>
            <Story name="Joshua" loc={storycanaan} story={storyJSON.joshua} character={joshua} />
          </Carousel.Item>
          {/** 
        <Carousel.Item style={{height:'100%'}}>
          <Story offset={storyHide[3]} name="Paul" loc={babylon} character={saul} />
        </Carousel.Item>
        **/}
        </Carousel>
        </div>

        <Indiegogo/>
        <span ref={divRef.contact}></span>

<div
   className={`bioContainer ${open ? 'active': ''}`}
  
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
