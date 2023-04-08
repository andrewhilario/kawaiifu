import {
  Avatar,
  Box,
  Button,
  Drawer,
  Flex,
  Heading,
  Hide,
  Show,
  Text,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Divider,
  Center,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { FiLogIn } from 'react-icons/fi';
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineUserAdd,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import React from 'react';

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box w='100%' bg={'cyan.400'} padding={'1rem'}>
      <Flex
        w={{ base: '90%', md: '80%', lg: '75%', xl: '60%' }}
        mx={'auto'}
        justify={'space-between'}
      >
        <Heading color={'white'}>
          <Link to={'/'}>Kawaiifu</Link>
        </Heading>
        <Hide below='md'>
          <Flex align={'center'} gap={'1rem'}>
            <Text color={'white'}>
              <Link to={'/'}>Home</Link>
            </Text>
            <Text color={'white'}>
              <Link to={'/about'}>Popular Anime</Link>
            </Text>
            <Text color={'white'}>
              <Link to={'/about'}>Trending Anime</Link>
            </Text>
            <Text color={'white'}>
              <Link to={'/about'}>About</Link>
            </Text>
          </Flex>
          <Flex align={'center'} gap={'1rem'}>
            <Button
              variant={'outline'}
              color={'white'}
              _hover={{ background: 'cyan.600' }}
            >
              <Link to={'/login'}>Login</Link>
            </Button>
            <Button bg={'cyan.700'} color={'white'}>
              <Link to={'/register'}>Register</Link>
            </Button>
          </Flex>
        </Hide>
        <Show below='md'>
          <Flex align={'center'} gap={'1rem'}>
            <Button
              p={'10px'}
              bg={'transparent'}
              color={'white'}
              _hover={{ background: 'cyan.600' }}
              onClick={onOpen}
            >
              <HamburgerIcon color={'white'} boxSize={8} />
            </Button>
          </Flex>
        </Show>
      </Flex>
      <Drawer placement='top' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Heading
              _hover={{
                transition: 'all .15s ease-in-out',
                color: 'cyan.400',
              }}
            >
              <Link to={'/'}>Kawaiifu</Link>
            </Heading>
          </DrawerHeader>

          <DrawerBody>
            <Flex direction='column' gap={'1rem'}>
              <Text
                w={'100%'}
                padding={'.5rem 5px'}
                rounded={'md'}
                _hover={{
                  transition: 'all .3s ease-in-out',
                  color: 'white',
                  bg: 'cyan.600',
                }}
              >
                <Link to={'/'}>Home</Link>
              </Text>
              <Text
                w={'100%'}
                padding={'.5rem 5px'}
                rounded={'md'}
                _hover={{
                  transition: 'all .3s ease-in-out',
                  color: 'white',
                  bg: 'cyan.600',
                }}
              >
                <Link to={'/about'}>Popular Anime</Link>
              </Text>
              <Text
                w={'100%'}
                padding={'.5rem 5px'}
                rounded={'md'}
                _hover={{
                  transition: 'all .3s ease-in-out',
                  color: 'white',
                  bg: 'cyan.600',
                }}
              >
                <Link to={'/about'}>Trending Anime</Link>
              </Text>
              <Text
                w={'100%'}
                padding={'.5rem 5px'}
                rounded={'md'}
                _hover={{
                  transition: 'all .3s ease-in-out',
                  color: 'white',
                  bg: 'cyan.600',
                }}
              >
                <Link to={'/about'}>About</Link>
              </Text>
            </Flex>
            <Center height='50px'>
              <Divider orientation='horizontal' />
            </Center>
            <Flex align={'center'} gap={'1rem'}>
              <Button
                variant={'outline'}
                _hover={{ background: 'cyan.600', color: 'white' }}
              >
                <Link to={'/login'}>Login</Link>
              </Button>
              <Button
                variant={'outline'}
                _hover={{ background: 'cyan.600', color: 'white' }}
              >
                <Link to={'/register'}>Register</Link>
              </Button>
            </Flex>
          </DrawerBody>
          <DrawerFooter>
            <Flex
              width={'100%'}
              direction={'row'}
              justify={'center'}
              align={'center'}
              gap={'1rem'}
            >
              <AiOutlineGithub size={28} />
              <AiFillLinkedin size={28} />
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
