import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import React from 'react';

export default function PopularAnime() {
  const [anime, setAnime] = React.useState(null);
  React.useEffect(() => {
    const page = 1;
    const perPage = 20;
    const url = `https://api.consumet.org/meta/anilist/popular?page=${page}&perPage=${perPage}`;
    const fetchedAnime = async () => {
      const data = await fetch(url);
      const animeData = await data.json();
      const animeList = animeData.results;
      setAnime(animeList);
      //   console.log(anime, 'popular anime');
    };
    fetchedAnime();
  }, []);

  return (
    <Box w='100%'>
      <Flex
        w={{ base: '90%', md: '70%', xl: '70%' }}
        mx='auto'
        direction={'column'}
      >
        <Heading fontSize={{ base: '1.5rem', lg: '3xl' }} py={'2rem'}>
          Popular Anime
        </Heading>
        <Grid
          w={'100%'}
          templateColumns={{
            base: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(5, 1fr)',
          }}
          gap={5}
        >
          {anime?.map((anime) => (
            <GridItem colSpan={{ base: 1, md: 1 }} key={anime.id}>
              <Box w='100%' h={'100%'} borderRadius={'10px'}>
                <Image
                  borderRadius={'5px'}
                  src={anime.image}
                  boxSize={{ base: '300px', md: '350px' }}
                  objectFit={'cover'}
                />
                <Text py={'.5rem'}>
                  {anime.title.english || anime.title.romaji}
                </Text>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </Box>
  );
}
