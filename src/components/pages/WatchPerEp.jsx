import React from 'react';
import Navbar from '../layout/Navbar';
import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Text,
} from '@chakra-ui/react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useAnimeWatch, useEpisodeId } from '../../hooks/useAnimeWatch';

export default function WatchPerEp() {
  const params = useParams();
  const [animeWatch, setAnimeWatch] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const {
    animeWatch: anime,
    watchId: watch,
    loading,
  } = useAnimeWatch(params.watchId);
  const [visible, setVisible] = React.useState(20);
  const { episodeId } = useEpisodeId(params.episodeId);
  const loadMore = () => {
    setVisible((prevValue) => prevValue + 15);
  };

  return (
    <>
      <Navbar />
      <Box
        w={{
          base: '100%',
          md: '60%',
        }}
        padding={'2rem'}
        mx={'auto'}
      >
        <Box
          w={{
            base: '100%',
            md: '60%',
          }}
        >
          <Heading fontSize={{ base: '1.5rem', lg: '3xl' }} py={'2rem'}>
            {anime?.title?.english}
          </Heading>
        </Box>
        <Flex w='100%' justify={'center'} align={'center'}>
          <AspectRatio w='100%' h='100%' ratio={16 / 9}>
            <iframe
              title='anime'
              width='100%'
              src={episodeId?.headers?.Referer}
              allowFullScreen
              style={{
                width: '100%',
                height: '100vh',
              }}
            ></iframe>
          </AspectRatio>
        </Flex>
        <Box
          w={{
            base: '100%',
            md: '60%',
          }}
        >
          <Text fontSize={'2rem'} mx={'auto'} py={'2rem'}>
            Episodes
          </Text>
        </Box>
        <Grid
          templateColumns={{
            base: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
            lg: 'repeat(5, 1fr)',
          }}
          gap={5}
          w={'100%'}
        >
          {anime?.episodes?.slice(0, visible).map((episode, index) => (
            <Box key={episode.id}>
              <Link w='100%' to={`/watch/${anime.id}/${episode.id}`}>
                <Text
                  bg={'cyan.400'}
                  color='white'
                  p='1rem'
                  borderRadius={'.5rem'}
                >
                  EP {index + 1}
                </Text>
              </Link>
            </Box>
          ))}
        </Grid>
        {visible < anime?.episodes?.length && (
          <Box w='60%' mx={'auto'}>
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
              isLoading={loading}
              _hover={{ background: 'cyan.600' }}
            >
              Load More
            </Button>
          </Box>
        )}
      </Box>
    </>
  );
}
