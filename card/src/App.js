import logo from './logo.svg';
import './App.css';
import CardComponent from './CardComponent/CardComponent';
import { useState } from 'react';

function App() {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Home's Card",
      cardInfo: "American Express...0002 EXP 03/30",
      buttonText: "Default"
    },
    {
      id: 2,
      title: "Home's Card",
      cardInfo: "American Express...0002 EXP 03/29",
      buttonText: "Default"
    },
    {
      id: 3,
      title: "Charter's Card",
      cardInfo: "Visa...4242 EXP 03/28",
      buttonText: "Default"
    }
  ]);
  const [defaultCardIndex, setDefaultCardIndex] = useState(null);

  const handleRemove = (index) => {
    const updatedCards = cards.filter((_, i) => i !== index);
    setCards(updatedCards);

    if (defaultCardIndex === index) {
      setDefaultCardIndex(null); 
    } else if (defaultCardIndex > index) {
      setDefaultCardIndex(defaultCardIndex - 1); 
    }
  };

  const makeDefaultClicked = (index) => {
    setDefaultCardIndex(index);
  };

  return (
    <div className="App-container">
      <div className='container'>
        <h3 className='heading'>Stored Payment Methods</h3>
        <CardComponent 
          cards={cards} 
          handleRemove={handleRemove} 
          defaultCardIndex={defaultCardIndex} 
          makeDefaultClicked={makeDefaultClicked} 
        />
      </div>
    </div>
  );
}

export default App;
