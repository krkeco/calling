import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
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

import story1 from './imgs/estherjonah.png';
import story2 from './imgs/pauljoshua.png';
import about from './imgs/about.png';
import promo from './imgs/hero.png';
import esther from './imgs/estherAbout.png';
import influence from './imgs/influence.png'

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


var scrollPos = window.pageYOffset;
console.log(scrollPos)
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
  const [bioContainer, setBioContainer] = useState("");

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
        

      // <Promo divRef={divRef} scrollToRef={scrollToRef} />
  return (
    <div className="app">
      
      <Menu handleOpen={handleOpen} scrollToRef={scrollToRef} divRef={divRef} />
        

      <span ref={divRef.promo}></span>

      <div className="title textShadow appTitle">The Calling</div> 
      <img
        className="titleIcon"
        src={influence}
      />
      <div style={{
        backgroundImage: `url("${promo}")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className="comicImg promo">
        <img className="comicImg promoEsther"  src={esther} />
    </div>


    <span ref={divRef.about}></span>
    <img className="comicImg about"  src={about} />
    <img className="comicImg story1"  src={story1} />
    <img className="comicImg story2"  src={story2} />
   
     
          {/** 
    <span ref={divRef.about}></span>
      <div style={{
        backgroundImage: `url("${about}")`,
        backgroundSize: 'cover',
        width: '100%',
        height: 'auto',
        backgroundRepeat: 'no-repeat',
      }}>
      <div>.</div>
    </div>



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
        <Carousel.Item style={{height:'100%'}}>
          <Story offset={storyHide[3]} name="Paul" loc={babylon} character={saul} />
        </Carousel.Item>
        </Carousel>
        </div>
        **/}

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
