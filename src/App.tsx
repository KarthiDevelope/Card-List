import { Route, Routes } from 'react-router-dom';
import CardList from './components/CardList';
import CardDetail from './components/CardDetail';
import { useState } from 'react';
import { CardItem } from './types/types';
import './App.css';

function App() {
  const [cards] = useState<CardItem[]>(() =>
    Array.from({ length: 1000 }, (_, i) => ({
      id: i + 1,
      title: `Tip #${i + 1}`,
      description: `This is a sample tip about home loans. ${i + 1}`,
    }))
  );

  return (
    <div className='app' data-testid='app'>
      <h1 className='app-title'>Card List App</h1>
      <Routes>
        <Route path='/' element={<CardList cards={cards} />} />
        <Route path='/card/:id' element={<CardDetail cards={cards} />} />
      </Routes>
    </div>
  );
}

export default App;
