import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { BsFillPlayFill } from 'react-icons/bs';
import React from 'react';

export default function Home() {
  return (
    <Box w='100%' height={'90vh'}>
      <Box w='100%' height={'100%'} position={'relative'}>
        <Flex
          direction={'column'}
          gap={'1rem'}
          w={{ base: '90%', md: '50%' }}
          height={{ base: '85%', md: '90%' }}
          justify={'flex-end'}
          mx={'auto'}
          color={'white'}
        >
          <Heading as='h1' size='4xl'>
            Kawaiifu
          </Heading>
          <Text as='h4' size='xl'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            eum ut delectus doloremque explicabo mollitia, blanditiis ea dicta
            ipsum eius!
          </Text>
          <Button colorScheme='teal' size='lg'>
            <Flex align={'center'} gap={'.5rem'}>
              <BsFillPlayFill />
              <Text>Watch</Text>
            </Flex>
          </Button>
        </Flex>
        <Box
          position={'absolute'}
          w='100%'
          height={'100%'}
          top={'0'}
          zIndex={'-1'}
        >
          <Box
            w='100%'
            height={'100%'}
            bg={'blackAlpha.500'}
            position={'absolute'}
            top={'0'}
          />

          <Image
            src='https://imagecdn.app/v2/image/https%3A%2F%2Fimages.unsplash.com%2Fphoto-1540665569139-922f374b8657?'
            objectFit='cover'
            w='100%'
            h='100%'
          />
        </Box>
      </Box>
    </Box>
  );
}
