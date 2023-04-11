import {
  Box,
  Flex,
  Heading,
  Hide,
  Image,
  Text,
  useBreakpoint,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';
import Navbar from '../layout/Navbar';
import { Link, useParams } from 'react-router-dom';
import { useAnimeSearch } from '../../hooks/useAnimeSearch';
import { BsDot } from 'react-icons/bs';

export default function Search() {
  const params = useParams();
  const { animeList, loading } = useAnimeSearch(params.searchQuery);

  const base = useBreakpointValue({ base: true, lg: false });

  console.log(animeList);
  return (
    <>
      <Navbar />
      <Box
        w={{
          base: '100%',
          md: '60%',
        }}
        padding={'2rem'}
        mx='auto'
      >
        {animeList?.map((anime) => (
          <Box key={anime.id} my={'1rem'}>
            <Link to={`/info/${anime.id}`}>
              <Flex
                w='100%'
                align={'center'}
                direction={{
                  base: 'column',
                  lg: 'row',
                }}
                gap={'1rem'}
              >
                <Image
                  src={base ? anime.cover : anime.image}
                  alt={anime.title}
                  boxSize={'150px'}
                  background={{
                    base: 'teal.500',
                    lg: 'transparent',
                  }}
                  objectFit={{
                    base: 'cover',
                    lg: 'cover',
                  }}
                  borderRadius={'.4rem'}
                  w={{
                    base: '100%',
                    lg: '150px',
                  }}
                />
                <Flex
                  direction={'column'}
                  w={{
                    base: '100%',
                    lg: '80%',
                  }}
                >
                  <Flex
                    align={{
                      base: 'flex-start',
                      lg: 'center',
                    }}
                    direction={{
                      base: 'column',
                      lg: 'row',
                    }}
                    gap={'.5rem'}
                  >
                    <Heading fontSize={{ base: '1.5rem', lg: 'xl' }}>
                      {anime.title.english || anime.title.romaji || anime.title}
                    </Heading>
                    <Hide below={'sm'}>
                      <BsDot size={24} />
                    </Hide>
                    <Text as={'p'} fontSize={{ base: '1rem', lg: 'sm' }}>
                      Release Date: {anime.releaseDate}
                    </Text>
                    <Hide below={'sm'}>
                      <BsDot size={24} />
                    </Hide>
                    <Text as={'p'} fontSize={{ base: '1rem', lg: 'sm' }}>
                      Episodes: {anime.totalEpisodes}
                    </Text>
                  </Flex>
                  <Text
                    as={'p'}
                    fontSize={{ base: '.8rem', lg: 'sm' }}
                    my='.6rem'
                  >
                    {anime.description.slice(0, 200)}
                  </Text>
                </Flex>
              </Flex>
            </Link>
          </Box>
        ))}
      </Box>
    </>
  );
}
