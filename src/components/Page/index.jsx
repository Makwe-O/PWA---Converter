import React from 'react';
import { Button, useColorMode, Box, Text } from '@chakra-ui/core';
import FormSection from '../Form';
const Page = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = { light: 'gray.50', dark: 'gray.800' };
  const bgLogoColor = { light: 'gray.100', dark: 'gray.800' };
  const color = { light: 'gray.700', dark: 'white' };
  return (
    <Box d='flex' h='100vh'>
      <Box
        padding='20px'
        d='flex'
        justifyContent='center'
        alignItems='center'
        flexDir='column'
        flex='1'
        h='100%'
        bg={bgLogoColor[colorMode]}
        color={color[colorMode]}>
        <lottie-player
          src='https://assets6.lottiefiles.com/packages/lf20_SjhGcR.json'
          background='transparent'
          speed='1'
          style={{ width: '400px', height: '400px' }}
          loop
          autoplay></lottie-player>
        <Text fontSize='5xl' fontWeight='bold'>
          PWA Bitcoin converter
        </Text>
        <Text fontSize='md'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed delectus
          .
        </Text>
      </Box>

      <Box
        flex='1'
        p='20px'
        d='flex'
        position='relative'
        justifyContent='center'
        alignItems='center'
        flexDir='column'
        h='100%'
        bg={bgColor[colorMode]}
        color={color[colorMode]}>
        <Button
          onClick={toggleColorMode}
          position='absolute'
          top='2%'
          right='2%'>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
        Enter the Amount and the currency that want to be converted to Bitcoin
        <FormSection />
      </Box>
    </Box>
  );
};

export default Page;
