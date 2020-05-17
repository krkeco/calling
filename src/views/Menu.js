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
  return (
    <div
      className="menu"
      style={{
        position: 'fixed',
        width:'100%',
        top: 0,
        left: 0,
      }}
    >
        <div className="mobileMenu">
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuOpen />
      </Button>
      </div>
      <div
       className="webMenu">
        <Button onClick={() => handleClose(props.divRef.promo)}>
          <p  className="textMenu textShadow">The Calling</p>
        </Button>
        <Button onClick={() => handleClose(props.divRef.about)}>
          <p  className="textMenu textShadow">The Characters</p>
        </Button>
        <Button onClick={() => props.handleOpen()}>
          <p  className="textMenu textShadow">About Us</p>
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
          The Calling
        </MenuItem>
        <MenuItem onClick={() => handleClose(props.divRef.about)}>
          The Characters
        </MenuItem>
        <MenuItem onClick={() => props.handleOpen()}>
          About Us
        </MenuItem>
      </Menu>
    </div>
  );
};

export default App;
