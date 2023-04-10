import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import { BsFillPlayFill, BsInfoCircleFill } from 'react-icons/bs';
import React from 'react';
// API
import axios from 'axios';
import { usePopular } from '../../hooks/usePopular';
import { Link } from 'react-router-dom';

export default function Home() {
  const [anime, setAnime] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const { popular, loading } = usePopular();

  React.useEffect(() => {
    setIsLoading(true);
    const url = 'https://api.consumet.org/meta/anilist/popular';
    console.log(popular);
    const fetchedAnime = async () => {
      const data = await fetch(url);
      const anime = await data.json();
      const animeList = anime.results;
      const randomAnime =
        animeList[Math.floor(Math.random() * animeList.length)];
      setAnime(randomAnime);
      setIsLoading(false);
      // console.log(randomAnime);
    };
    fetchedAnime();
  }, []);
  // console.log(anime);

  return (
    <Box
      w='100%'
      height={'90vh'}
      transition={isLoading ? 'all .5 ease-in' : 'none'}
    >
      <Box
        w='100%'
        height={'100%'}
        position={'relative'}
        transition={isLoading ? 'all .5 ease-in' : 'none'}
      >
        <Flex
          direction={'column'}
          gap={'1rem'}
          w={{ base: '90%', md: '50%', xl: '30%' }}
          height={{ base: '85%', md: '75%' }}
          justify={'flex-end'}
          mx={{ base: 'auto', md: '5rem', xl: '18rem' }}
          color={'white'}
        >
          <Heading as='h1' size='4xl'>
            {anime?.title?.english || anime?.title?.romaji}
          </Heading>
          <Text as='h4' size='xl'>
            {anime?.description.substring(0, 250) + '...'}
          </Text>
          <Flex direction={{ base: 'column', md: 'row' }} gap={'1rem'}>
            <Button
              colorScheme='teal'
              size='lg'
              w={{ base: '100%', md: '50%', lg: '30%' }}
              as={Link}
              to={`/watch/${anime?.id}`}
            >
              <Flex align={'center'} gap={'.5rem'}>
                <BsFillPlayFill size={28} />
                <Text>Watch</Text>
              </Flex>
            </Button>
            <Button
              variant={'outline'}
              size='lg'
              _hover={{ background: 'teal.600' }}
              border={'2px solid'}
              borderColor={'white'}
              w={{ base: '100%', md: '50%', lg: '30%' }}
            >
              <Flex align={'center'} gap={'.5rem'}>
                <BsInfoCircleFill size={24} />
                <Text>Learn more</Text>
              </Flex>
            </Button>
          </Flex>
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
            bg={'blackAlpha.700'}
            position={'absolute'}
            top={'0'}
          />

          <Image src={anime?.cover} objectFit='cover' w='100%' h='100%' />
        </Box>
      </Box>
    </Box>
  );
}
