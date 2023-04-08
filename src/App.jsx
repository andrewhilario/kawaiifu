import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/layout/Main';
import About from './components/pages/About';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
