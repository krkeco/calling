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
        backgroundColor: props.bgColor,
        position: 'fixed',
        top: 0,
        left: 0,
      }}
    >
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuOpen />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleClose(props.divRefs.promoRef)}>
          The Calling
        </MenuItem>
        <MenuItem onClick={() => handleClose(props.divRef.jonah)}>Jonah</MenuItem>
        <MenuItem onClick={() => handleClose(props.divRef.esther)}>Esther</MenuItem>
        <MenuItem onClick={() => handleClose(props.divRef.joshua)}>Joshua</MenuItem>
        <MenuItem onClick={() => handleClose(props.divRef.paul)}>Paul</MenuItem>
        <MenuItem onClick={() => handleClose(props.divRef.about)}>Purpose</MenuItem>
        <MenuItem onClick={() => handleClose(props.divRef.bio)}>About</MenuItem>
      </Menu>
    </div>
  );
};

export default App;
