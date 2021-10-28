import React from 'react';
import { SwipeableDrawer } from '@mui/material';
import Box from '@mui/material/Box';

function SlideMenu(props) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(props.isMenu);

  React.useEffect(() => {
    setIsMenuOpen(props.isMenu);
  }, [props.isMenu]);

  React.useEffect(() => {
    props.FuncToggleMenu(isMenuOpen);
  }, [isMenuOpen]);

  return (
    <div>
      <SwipeableDrawer
        anchor="left"
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onOpen={() => setIsMenuOpen(true)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setIsMenuOpen(false)}
          onKeyDown={() => setIsMenuOpen(false)}
        ></Box>
      </SwipeableDrawer>
    </div>
  );
}

export default React.memo(SlideMenu);
