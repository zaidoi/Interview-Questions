import React, { useState } from 'react';
import './styles.css'

function GuessTheNumber() {
  const [guessNum, setGuessNum] = useState()
  const [randomNumber,setRandomNumber] = useState(Math.floor((Math.random()*100)+1))
  const [numberAttempts, setNumberAttempts] = useState(0)
  const [spanMessage,setSpanMessage] = useState("")
  // Function to handle guess checking
  const handleGuess = () => {
    if (!Number(guessNum)) setSpanMessage("Please enter a number between 1 and 100")
    if (guessNum > 100) setSpanMessage("Please enter a number between 1 and 100")
    if (guessNum < 0) setSpanMessage("Please enter a number between 1 and 100")

    if (Number(guessNum) === Number(randomNumber)) setSpanMessage(`Congratulations! You guessed the number in ${numberAttempts} attempts`)

    setNumberAttempts(prev => prev + 1)
    if (guessNum < randomNumber) setSpanMessage("Too low! Try again")
    if(guessNum > randomNumber) setSpanMessage("Too high! Try again")
    setGuessNum('')
  };

  // Function to reset the game
  const resetGame = () => {
    setNumberAttempts(0)
    setSpanMessage('')
    setGuessNum('')
    setRandomNumber(Math.floor((Math.random() * 100) + 1))
  };

  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", margin:"50px 0"}}>
      <h2>Guess the Number</h2>
      <input
        placeholder="Enter a number between 1 and 100"
        style={{width:"300px",padding:"5px"}}
        id="guess-input"
        min='1'
        max=''
        value={guessNum}
        required
        onChange={(e)=>setGuessNum(e.target.value)}
      />
      <div style={{ margin: "10px" , display:"flex" , gap:'15px' }}>
       <button onClick={()=>handleGuess()}>Check Guess</button>
      <button onClick={()=>resetGame()}>Reset Game</button>
      </div>
      <span>{spanMessage}</span>
    </div>
  );
}

export default GuessTheNumber;
