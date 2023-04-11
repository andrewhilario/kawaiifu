import {
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
  Input,
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CircularProgress,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { FiLogIn } from 'react-icons/fi';
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineUserAdd,
} from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useAnimeSearch } from '../../hooks/useAnimeSearch';

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: modalOpen,
    onOpen: modalOnOpen,
    onClose: modalOnClose,
  } = useDisclosure();

  // Search
  const [searchTerm, setSearchTerm] = useState('');
  const { animeList, loading } = useAnimeSearch(searchTerm);
  const [visible, setVisible] = React.useState(3);

  const scrollOnTrending = () => {
    const element = document.getElementById('trending');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(animeList);
  };

  const loadMore = () => {
    setVisible((prevValue) => prevValue + 5);
  };

  return (
    <Box
      w='100%'
      bg={'cyan.400'}
      padding={'1rem'}
      position={'sticky'}
      top={0}
      zIndex={999}
    >
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
            <Flex
              w='100%'
              align={'center'}
              gap={'1rem'}
              id='navlinks'
              transition={'all .25s ease-in-out'}
            >
              <Text color={'white'}>
                <Link to={'/'}>Home</Link>
              </Text>
              <Text color={'white'}>
                <Link to={'/popular'}>Popular Anime</Link>
              </Text>
              <Text color={'white'} onClick={scrollOnTrending}>
                <Link to={''}>Trending Anime</Link>
              </Text>
              <Text color={'white'}>
                <Link to={'/about'}>About</Link>
              </Text>
            </Flex>
            <Button
              variant={'ghost'}
              color={'white'}
              colorScheme='white'
              onClick={modalOnOpen}
            >
              <FiSearch size={24} />
            </Button>
          </Flex>
          <Flex align={'center'} gap={'1rem'}>
            <Button
              variant={'outline'}
              color={'white'}
              _hover={{ background: 'cyan.600' }}
            >
              <Link to={'/login'}>Login</Link>
            </Button>
            <Button
              bg={'cyan.700'}
              color={'white'}
              _hover={{ background: 'cyan.900' }}
            >
              <Link to={'/register'}>Register</Link>
            </Button>
          </Flex>
        </Hide>
        <Show below='md'>
          <Flex align={'center'} gap={'1rem'}>
            <Button colorScheme='white' onClick={modalOnOpen}>
              <FiSearch size={24} />
            </Button>
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
      {/* Mobile Drawer */}
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
                <Link href={'#popular'}>Popular Anime</Link>
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
                onClick={scrollOnTrending}
              >
                <Link href={'#trending'}>Trending Anime</Link>
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
              <Flex align={'center'} gap={'1rem'}></Flex>
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
      {/* Search Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={modalOnClose}
        motionPreset='slideInBottom'
        size={'lg'}
        scrollBehavior={'inside'}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>
            <Flex direction={'column'} gap={'1rem'}>
              <Text fontSize={'2rem'} fontWeight={'xl'}>
                Search
              </Text>
              <form>
                <Flex align={'center'} gap={'1rem'}>
                  <Input
                    placeholder='Search'
                    type='search'
                    value={searchTerm}
                    onChange={handleInputChange}
                  />
                  <Button
                    colorScheme='cyan'
                    variant='outline'
                    as={Link}
                    to={`/search/${searchTerm}`}
                  >
                    Search
                  </Button>
                </Flex>
              </form>
            </Flex>
          </ModalHeader>
          <ModalBody py='1rem'>
            {loading ? (
              <Center>
                <Text
                  fontSize={'1rem'}
                  py={'1rem'}
                  color={'gray.300'}
                  fontWeight={'xl'}
                >
                  No Results
                </Text>
              </Center>
            ) : (
              <Flex direction={'column'} gap={'1rem'}>
                {animeList?.slice(0, visible).map((anime) => (
                  <Flex
                    key={anime?.id}
                    direction={'flex'}
                    gap={'1rem'}
                    p={'1rem'}
                    bg={'cyan.100'}
                    borderRadius={'1rem'}
                    justify={'space-between'}
                  >
                    <Image
                      boxSize={'150px'}
                      w='40%'
                      src={anime?.image}
                      objectFit={'cover'}
                    />
                    <Flex direction={'column'} gap={'1rem'} w='55%'>
                      <Link to={`/info/${anime?.id}`}>
                        <Text fontSize={'1rem'} fontWeight={'bold'}>
                          {anime.title.english ||
                            anime?.title.romaji ||
                            anime?.title}
                        </Text>
                      </Link>
                      <Text fontSize={'.8rem'} fontWeight={'bold'}>
                        {anime?.description?.slice(0, 50) + '...' ||
                          anime?.description ||
                          'No Description'}
                      </Text>
                    </Flex>
                  </Flex>
                ))}
                {visible < animeList?.length && (
                  <Button bg='cyan.500' color={'white'} onClick={loadMore}>
                    Load More
                  </Button>
                )}
              </Flex>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
