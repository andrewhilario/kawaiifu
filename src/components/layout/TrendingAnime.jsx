import {
  Box,
  Center,
  CircularProgress,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTrending } from '../../hooks/useTrending';

export default function TrendingAnime() {
  const [anime, setAnime] = React.useState(null);
  const { trending, loading } = useTrending();

  useEffect(() => {
    setAnime(trending);
    // console.log(anime, 'trending anime');
  });
  // React.useEffect(() => {

  // }, []);

  return (
    <Box w='100%' id='trending'>
      <Flex
        w={{ base: '90%', md: '70%', xl: '70%' }}
        mx='auto'
        direction={'column'}
      >
        <Heading fontSize={{ base: '1.5rem', lg: '3xl' }} py={'2rem'}>
          Trending Anime
        </Heading>
        <Grid
          w={'100%'}
          height={'100%'}
          templateColumns={{
            base: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(5, 1fr)',
          }}
          gap={5}
        >
          {anime?.map((anime) => (
            <GridItem colSpan={{ base: 1, md: 1 }} key={anime.id}>
              <Box
                as={Link}
                to={`/info/${anime.id}`}
                w='100%'
                h={'100%'}
                borderRadius={'10px'}
              >
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
