import { Box } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../layout/Navbar';

export default function About() {
  return (
    <Box w='100%' height={'90vh'}>
      <Navbar />
      <h1>About</h1>
    </Box>
  );
}
