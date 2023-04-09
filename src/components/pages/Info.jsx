import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../layout/Navbar';
import { useParams } from 'react-router-dom';

export default function Watch() {
  const params = useParams();

  const [animeInfo, setAnimeInfo] = React.useState(null);
  //   console.log(params);
  React.useEffect(() => {
    const provider = 'gogoanime' || 'animepahe' || 'animekisa';
    const url = `https://api.consumet.org/meta/anilist/info/${params.id}?provider=${provider}`;
    const fetchedAnime = async () => {
      const data = await fetch(url);
      const animeData = await data.json();
      const animeList = animeData;
      setAnimeInfo(animeList);
      console.log(animeData);
    };
    fetchedAnime();
  }, []);

  return (
    <>
      <Navbar />
      <Box w='100%'>
        <Flex
          direction={'column'}
          w={{ base: '90%', md: '80%', lg: '75%', xl: '60%' }}
          mx={'auto'}
        >
          <Heading fontSize={{ base: '1.5rem', lg: '3xl' }} py={'2rem'}>
            {animeInfo?.title.english || animeInfo?.title.romaji}
          </Heading>
          <Flex w='100%' h='100%' gap={'1rem'}>
            <Box w='30%' h='30%'>
              <Image
                src={animeInfo?.image}
                w='100%'
                h='100%'
                objectFit='cover'
              />
            </Box>
            <Box w='60%' h='70%'>
              <Text fontWeight={'normal'} fontSize={'xl'} mb='1rem'>
                {animeInfo?.description}
              </Text>
              <Flex gap={'1rem'}>
                <Button colorScheme='blue'>Watch</Button>
                <Button colorScheme='blue'>Add to List</Button>
              </Flex>
            </Box>
          </Flex>
          <Flex w='100%' h='100%' gap={'1rem'}>
            <Box w='30%' h='30%'>
              {/* TODO Anime Info Details */}
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
