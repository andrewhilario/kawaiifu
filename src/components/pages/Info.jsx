import {
  Box,
  Button,
  Center,
  CircularProgress,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  Link as ChakraLink,
} from '@chakra-ui/react';
import React from 'react';
import Navbar from '../layout/Navbar';
import { Link, useParams } from 'react-router-dom';
import { format, formatDistanceToNow } from 'date-fns';

export default function Watch() {
  const params = useParams();

  const [animeInfo, setAnimeInfo] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [visible, setVisible] = React.useState(10);

  const loadMore = () => {
    setVisible((prevValue) => prevValue + 5);
  };

  React.useEffect(() => {
    const provider = 'gogoanime' || 'animepahe' || 'animekisa';
    const url = `https://api.consumet.org/meta/anilist/info/${params.id}?provider=${provider}`;
    const fetchedAnime = async () => {
      const data = await fetch(url);
      const animeData = await data.json();
      const animeList = animeData;
      setAnimeInfo(animeList);
      console.log(animeList);
      setIsLoading(false);
    };
    fetchedAnime();
  }, []);

  return (
    <>
      <Navbar />
      {isLoading ? (
        <Center h='50vh'>
          <CircularProgress isIndeterminate color='red.300' />
        </Center>
      ) : (
        <Box w='100%'>
          <Flex
            direction={'column'}
            w={{ base: '90%', md: '80%', lg: '75%', xl: '60%' }}
            mx={'auto'}
          >
            <Heading fontSize={{ base: '1.5rem', lg: '3xl' }} py={'2rem'}>
              {animeInfo?.title.english || animeInfo?.title.romaji}
            </Heading>
            <Flex
              w='100%'
              h='100%'
              direction={{
                base: 'column',
                lg: 'row',
              }}
              gap={'1rem'}
              mb={'5rem'}
            >
              <Box
                w={{
                  base: '100%',
                  lg: '40%',
                }}
                h='30%'
              >
                <Image
                  src={animeInfo?.image}
                  w='100%'
                  h='100%'
                  objectFit='cover'
                />
              </Box>
              <Box w={{ base: '100%', lg: '60%' }} h='70%'>
                <Text
                  fontWeight={'normal'}
                  fontSize={{ base: 'sm', md: 'md', xl: 'lg' }}
                  mb='1rem'
                >
                  {animeInfo?.description.slice(0, 500) + '...'}
                </Text>
                <Flex gap={'1rem'}>
                  <Button
                    as={Link}
                    to={`/watch/${animeInfo.id}`}
                    colorScheme='blue'
                  >
                    Watch
                  </Button>
                  <Button colorScheme='blue'>Add to List</Button>
                </Flex>
              </Box>
            </Flex>
            <Flex
              w='100%'
              h='100%'
              gap={'.5rem'}
              direction={'column'}
              py={'2rem'}
            >
              <Heading fontSize={{ base: '1.5rem', lg: '5xl' }} py={'1rem'}>
                More Info
              </Heading>
              <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem>
                  <Text fontWeight={'bold'} fontSize={'md'}>
                    Episodes: {animeInfo?.totalEpisodes}
                  </Text>
                </GridItem>
                <GridItem>
                  <Text fontWeight={'bold'} fontSize={'md'}>
                    Current Episodes: {animeInfo?.currentEpisode}
                  </Text>
                </GridItem>
                <GridItem>
                  <Text fontWeight={'bold'} fontSize={'md'}>
                    Duration: {animeInfo?.duration} minutes
                  </Text>
                </GridItem>
                <GridItem>
                  <Text fontWeight={'bold'} fontSize={'md'}>
                    Rating: {animeInfo?.rating} / 100
                  </Text>
                </GridItem>
                <GridItem>
                  <Text fontWeight={'bold'} fontSize={'md'}>
                    Release Date: {animeInfo?.releaseDate}
                  </Text>
                </GridItem>
                <GridItem>
                  <Text fontWeight={'bold'} fontSize={'md'}>
                    Status: {animeInfo?.status}
                  </Text>
                </GridItem>
                <GridItem>
                  <Text fontWeight={'bold'} fontSize={'md'}>
                    Sub or Dub: {animeInfo?.subOrDub}
                  </Text>
                </GridItem>
                <GridItem>
                  <Text fontWeight={'bold'} fontSize={'md'}>
                    Studios: {animeInfo?.studios}
                  </Text>
                </GridItem>
                <GridItem>
                  <Text fontWeight={'bold'} fontSize={'md'}>
                    Type: {animeInfo?.type}
                  </Text>
                </GridItem>
                <GridItem>
                  <Text fontWeight={'bold'} fontSize={'md'}>
                    Genres: {animeInfo?.genres.join(', ')}
                  </Text>
                </GridItem>
              </Grid>
            </Flex>
            <Flex
              w='100%'
              h='100%'
              gap={'.5rem'}
              direction={'column'}
              pb='2rem'
            >
              <Heading fontSize={{ base: '1.5rem', lg: '5xl' }} py={'1rem'}>
                Characters
              </Heading>
              <Grid
                templateColumns={{
                  base: 'repeat(3, 1fr)',
                  md: 'repeat(4, 1fr)',
                  lg: 'repeat(5, 1fr)',
                }}
                gap={6}
              >
                {animeInfo?.characters.slice(0, visible).map((character) => (
                  <GridItem key={character.id}>
                    <Image
                      boxSize={{
                        base: '100px',
                        md: '150px',
                        lg: '200px',
                      }}
                      bg={'teal.200'}
                      src={character?.image}
                      objectFit={'cover'}
                      borderRadius={'2xl'}
                      transition={'all 0.2s ease-in-out'}
                      _hover={{
                        transform: 'scale(1.05)',
                        boxShadow: 'xl',
                      }}
                    />
                    <Heading
                      as='h4'
                      size={{
                        base: 'sm',
                        md: 'md',
                        lg: 'lg',
                      }}
                      mt='1rem'
                    >
                      {character?.name.full}
                    </Heading>
                    <Text
                      size={{
                        base: 'sm',
                        md: 'md',
                        lg: 'lg',
                      }}
                    >
                      {character?.role}
                    </Text>
                  </GridItem>
                ))}
              </Grid>
              {visible < animeInfo?.characters.length && (
                <Button
                  onClick={loadMore}
                  w={{
                    base: '100%',
                    md: '50%',
                    lg: '20%',
                  }}
                  mx='auto'
                  my={'2rem'}
                  background={'cyan.500'}
                  color={'white'}
                  isLoading={isLoading}
                  _hover={{ background: 'cyan.600' }}
                >
                  Load More
                </Button>
              )}
            </Flex>
            <Flex
              w='100%'
              h='100%'
              gap={'.5rem'}
              direction={'column'}
              pb={'2rem'}
            >
              <Heading fontSize={{ base: '1.5rem', lg: '5xl' }} py={'1rem'}>
                Recommendations
              </Heading>
              <Grid
                templateColumns={{
                  base: 'repeat(2, 1fr)',
                  md: 'repeat(4, 1fr)',
                  lg: 'repeat(5, 1fr)',
                }}
                gap={6}
              >
                {animeInfo?.recommendations.slice(0, visible).map((anime) => (
                  <GridItem key={anime.id}>
                    <ChakraLink href={`/info/${anime.id}`}>
                      <Image
                        boxSize={{
                          base: '250px',
                          md: '200px',
                          lg: '300px',
                        }}
                        bg={'teal.200'}
                        borderRadius={'2xl'}
                        transition={'all 0.2s ease-in-out'}
                        _hover={{
                          transform: 'scale(1.05)',
                          boxShadow: 'xl',
                        }}
                        mb={'1rem'}
                        src={anime?.image}
                      />
                      <Heading as='h4' size={{ base: 'sm', md: 'md' }}>
                        {anime?.title.english}
                      </Heading>
                    </ChakraLink>
                  </GridItem>
                ))}
              </Grid>
              {visible < animeInfo?.recommendations.length && (
                <Button
                  onClick={loadMore}
                  w={{
                    base: '100%',
                    md: '50%',
                    lg: '20%',
                  }}
                  mx='auto'
                  my={'2rem'}
                  background={'cyan.500'}
                  color={'white'}
                  isLoading={isLoading}
                  _hover={{ background: 'cyan.600' }}
                >
                  Load More
                </Button>
              )}
            </Flex>
          </Flex>
        </Box>
      )}
    </>
  );
}
