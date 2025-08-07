import { useState } from 'react';
import CardList from './components/CardList';
import { CardItem } from './types/types';
import './App.css';

function App() {
  const [cards] = useState<CardItem[]>(() => {
    return Array.from({ length: 1000 }, (_, i) => ({
      id: i + 1,
      title: `Tip #${i + 1}`,
      description: `This is a sample tip about home loans. ${i + 1}`,
    }));
  });

  return (
    <div className="app">
      <h1 className="app-title">Card List App</h1>
      <CardList cards={cards} />
    </div>
  );
}

export default App;