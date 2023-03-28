import './App.css';
import React, {useEffect, useState } from "react";
import SingleCard from './components/SingleCard';

const cardImages=[
  {"src":"/images/astronaut.png", matched: false},
  {"src":"/images/moon.png", matched: false},
  {"src":"/images/rocket.png", matched: false},
  {"src":"/images/saturn.png", matched: false},
  {"src":"/images/star.png", matched: false},
  {"src":"/images/sun.png", matched: false}
]

function App() {
  const[cards,setCards] = useState([])
  const[turns,setTurns] = useState(0)
  const[choiceOne, setChoiceOne] = useState(null)
  const[choiceTwo, setChoiceTwo] = useState(null)
  const[disabled, setDisabled] = useState(false)

    const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)  
      .map((card) => ({ ...card, id: Math.random()}))

      setChoiceOne(null)
      setChoiceTwo(null)
      setCards(shuffledCards)
      setTurns(0)
  }

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }
  
  useEffect(() => {
    shuffleCards()
  }, [])

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card =>(
          <SingleCard 
          key={card.id} 
          card={card} 
          handleChoice={handleChoice} 
          flipped={card === choiceOne || card === choiceTwo || card.matched} 
          disabled={disabled}
          />
         ))}
      </div>
      <p>Turns: {turns} </p>
    </div>
  );
}

export default App
