import React from 'react';
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';
import customTheme from './theme';
import Page from './components/Page';
import './App.css';
function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <ColorModeProvider>
        <Page />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
