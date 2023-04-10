import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import SadImage from '../../assets/SadAnime.png';

export default function NotFound() {
  return (
    <Box w='100%' h='100vh' bg={'cyan.400'}>
      <Flex
        w='100%'
        h='100%'
        justify={'center'}
        align={'center'}
        direction={'column'}
        gap={'2rem'}
      >
        <Heading color={'white'}>404 Not Found</Heading>
        <Button onClick={() => window.history.back()}>Go Back</Button>
        <Image src={SadImage} w={{ base: '50%', md: '30%', lg: '20%' }} />
      </Flex>
    </Box>
  );
}
