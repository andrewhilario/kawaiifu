import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Main from './components/layout/Main';
import About from './components/pages/About';
import TrendingAnime from './components/layout/TrendingAnime';
import PopularAnime from './components/layout/PopularAnime';
import Info from './components/pages/Info';
import NotFound from './components/pages/NotFound';
import Watch from './components/pages/Watch';
import WatchPerEp from './components/pages/WatchPerEp';
import { useEffect } from 'react';

function App() {
  const location = useLocation();

  useEffect(() => {
    // window.location.reload();
  }, [location]);

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/trending' element={<TrendingAnime />} />
        <Route path='/popular' element={<PopularAnime />} />
        <Route path='/info/:id' element={<Info />} />
        <Route path='/watch/:watchId' element={<Watch />} />
        <Route path='/watch/:watchId/:episodeId' element={<WatchPerEp />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
