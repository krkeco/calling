import React, { useRef, useEffect } from 'react';
import '../App.css';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { MenuOpen } from '@material-ui/icons';

const App = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (ref) => {
    setAnchorEl(null);
    props.scrollToRef(ref);
  };
  // const hid = props.visibility > 0 ?  '100%' : 0
  return (
    <div
      id="navbar"
      className="menu">
        <div className="mobileMenu">
      <Button
        style={{color:'white'}}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuOpen />
      </Button>
      </div>
      <div
       className="webMenu flexRow spaceBetween">
       <div className="flexRow">
        <Button onClick={() => handleClose(props.divRef.promo)}>
          <p  className="textMenu textShadow">About</p>
        </Button>
        <Button onClick={() => handleClose(props.divRef.about)}>
          <p  className="textMenu textShadow">Characters</p>
        </Button>
        <Button onClick={() => props.handleOpen()}>
          <p  className="textMenu textShadow">Background</p>
        </Button>
        </div>
        <Button onClick={() => handleClose(props.divRef.contact)}>
          <p  className="textMenu textShadow">Pre Order!</p>
        </Button>
        
      </div>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleClose(props.divRef.promo)}>
          <p  className="textShadow textMobileMenu">The Calling</p>
        </MenuItem>
        <MenuItem onClick={() => handleClose(props.divRef.about)}>
          <p  className="textShadow textMobileMenu">The Characters</p>
        </MenuItem>
        <MenuItem onClick={() => props.handleOpen()}>
          <p  className="textShadow textMobileMenu">About Us</p>
        </MenuItem>
        <MenuItem onClick={() => handleClose(props.divRef.contact)}>
          <p  className="textShadow textMobileMenu">Pre Order!</p>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default App;
