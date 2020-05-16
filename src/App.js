import React from 'react';
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';
import customTheme from './theme';
import Nav from './components/Nav';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <ColorModeProvider>
        <Nav />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
