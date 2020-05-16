import React from 'react';
import { Button, useColorMode, Box } from '@chakra-ui/core';
const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = { light: 'red.500', dark: 'red.200' };
  const color = { light: 'white', dark: 'gray.800' };
  return (
    <header>
      <Box flex='1' mb={4} bg={bgColor[colorMode]} color={color[colorMode]}>
        This box's style will change based on the color mode.
      </Box>

      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </header>
  );
};

export default Nav;
