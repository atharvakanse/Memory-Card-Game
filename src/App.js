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
}

export default App
