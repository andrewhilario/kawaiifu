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
} from '@chakra-ui/react';
import React from 'react';
import Navbar from '../layout/Navbar';
import { useParams } from 'react-router-dom';
import { format, formatDistanceToNow } from 'date-fns';

export default function Watch() {
  const params = useParams();

  const [animeInfo, setAnimeInfo] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const provider = 'gogoanime' || 'animepahe' || 'animekisa';
    const url = `https://api.consumet.org/meta/anilist/info/${params.id}?provider=${provider}`;
    const fetchedAnime = async () => {
      const data = await fetch(url);
      const animeData = await data.json();
      const animeList = animeData;
      setAnimeInfo(animeList);
      // console.log(animeList);
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
            <Flex w='100%' h='100%' gap={'1rem'} mb={'5rem'}>
              <Box w='30%' h='30%'>
                <Image
                  src={animeInfo?.image}
                  w='100%'
                  h='100%'
                  objectFit='cover'
                />
              </Box>
              <Box w='60%' h='70%'>
                <Text
                  fontWeight={'normal'}
                  fontSize={{ base: 'md', xl: 'lg' }}
                  mb='1rem'
                >
                  {animeInfo?.description.slice(0, 1050) + '...'}
                </Text>
                <Flex gap={'1rem'}>
                  <Button colorScheme='blue'>Watch</Button>
                  <Button colorScheme='blue'>Add to List</Button>
                </Flex>
              </Box>
            </Flex>
            <Flex w='100%' h='100%' gap={'.5rem'} direction={'column'}>
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
          </Flex>
        </Box>
      )}
    </>
  );
}
