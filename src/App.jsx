import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/layout/Main';
import About from './components/pages/About';
import TrendingAnime from './components/layout/TrendingAnime';
import PopularAnime from './components/layout/PopularAnime';
import Info from './components/pages/Info';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/trending' element={<TrendingAnime />} />
        <Route path='/popular' element={<PopularAnime />} />
        <Route path='/info/:id' element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;
