import React, { useRef, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Menu from './views/Menu';
import About from './views/About';
import Bio from './views/Bio';
import Promo from './views/Promo';
import Contact from './views/Contact';
import Story from './views/Story';

import babylon from './imgs/babylon/location.png';
import xerxes from './imgs/babylon/xerxes.png';
import esther from './imgs/babylon/esther2.png';

import saul from './imgs/saul.png';
import abigail from './imgs/abigail.png';
import david from './imgs/david.png';
import joab from './imgs/joab.png';
import samuel from './imgs/samuel.png';
import agag from './imgs/agag.png';


const scrollToRef = (ref) => {
  window.scrollTo(0, ref.current.offsetTop + 200);
};

function App() {
  const [offset, setOffset] = useState(0);
  const [backgroundColor, setBackground] = useState(0);
  // const isScrolling = useRef(0);

  useEffect(() => {
    let isScrolling;

    window.onscroll = () => {
      setOffset(window.pageYOffset);

      window.clearTimeout(isScrolling);
      isScrolling = setTimeout(function () {
        // Run the callback
        console.log('Scrolling has stopped.');
        // + window.innerHeight
        if (window.pageYOffset > divRef.about.current.offsetTop - 300) {
          setBackground('#F5FFFA');
        } else if (window.pageYOffset > divRef.paul.current.offsetTop) {
          setBackground('#e99'); //CD5C5C
        } else if (window.pageYOffset > divRef.joshua.current.offsetTop) {
          setBackground('#ff9'); //ff8
        } else if (window.pageYOffset > divRef.esther.current.offsetTop) {
          setBackground('#75a6fe'); //6495ED
        } else if (window.pageYOffset > divRef.jonah.current.offsetTop) {
          setBackground('#ccefff'); //8cd
        } else {
          setBackground('#F5FFFA');
        }
      }, 66);
    };
  }, []);

  console.log(offset);
  const divRef = {
    about: useRef(null),
    promo: useRef(null),
    bio: useRef(null),
    contact: useRef(null),
    jonah: useRef(null),
    esther: useRef(null),
    joshua: useRef(null),
    paul: useRef(null),
  }

  return (
    <div className="app" style={{ backgroundColor: backgroundColor }}>
      <Menu
        scrollToRef={scrollToRef}
        bgColor={backgroundColor}
        divRef={divRef}
      />
      <div style={{ margin: '70px' }}>
        <div ref={divRef.promo}></div>
        <Promo 
          divRef={divRef}
          scrollToRef={scrollToRef}
        />
        <div ref={divRef.jonah}></div>
        <Story name="Jonah" loc={babylon} character={samuel} />
        <div ref={divRef.esther}></div>
        <Story name="Esther" loc={babylon} character={esther} />
        <div ref={divRef.joshua}></div>
        <Story name="Joshua" loc={babylon} character={david} />
        <div ref={divRef.paul}></div>
        <Story name="Paul" loc={babylon} character={saul} />

        <div ref={divRef.about}></div>
        <About />
        <div ref={divRef.bio}></div>
        <Bio />
        <div ref={divRef.contact}></div>
      </div>
      <Contact />
    </div>
  );
}

export default App;
