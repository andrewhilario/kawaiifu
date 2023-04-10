import React from 'react';
import Layout from './Layout';
import Home from '../pages/Home';
import Navbar from './Navbar';
import About from '../pages/About';
import TrendingAnime from './TrendingAnime';
import PopularAnime from './PopularAnime';
import { Button } from '@chakra-ui/react';

export default function Main() {
  return (
    <Layout>
      <Navbar />
      <Home />
      <TrendingAnime />
      <PopularAnime />
      <Button onClick={() => window.scrollTo(0, 0)}>Scroll to top</Button>
    </Layout>
  );
}
