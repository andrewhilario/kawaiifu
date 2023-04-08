import { Box } from '@chakra-ui/react';
import React from 'react';

export default function Layout({ children }) {
  return (
    <Box w='100%' height={'90vh'}>
      {children}
    </Box>
  );
}
