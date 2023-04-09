import React from 'react';
import Layout from './Layout';
import Home from '../pages/Home';
import Navbar from './Navbar';
import About from '../pages/About';
import TrendingAnime from './TrendingAnime';
import PopularAnime from './PopularAnime';

export default function Main() {
  return (
    <Layout>
      <Navbar />
      <Home />
      <TrendingAnime />
      <PopularAnime />
    </Layout>
  );
}
