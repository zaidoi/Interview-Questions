import React, { useState } from "react";
import './styles.css'
function ChipsInput() {
  const [chipsInput, setChipsInput] = useState("")
  const [allChips,setAllChips] = useState([])
  const handleKey = (e) => {
    
    if (chipsInput === '' || chipsInput.trim() === "") {
      setChipsInput('')
      return
    }
    
    if (e.key === 'Enter') {
    e.preventDefault()
      const filter = allChips.filter(item => item !== chipsInput)
      setAllChips([...filter,chipsInput])
      setChipsInput('')
  }
  }

  const removeChip = (item) => {
    const filter = allChips.filter(value => value !== item)
    setAllChips([...filter])
  }

  return (
    <div className='main-container'>
      <h2>Chips Input</h2>
      <input
        type="text" 
        value={chipsInput}
        onKeyDown={handleKey}
        onChange={(e)=>setChipsInput(e.target.value)}
        placeholder="Type a chip and press tag"
        className="input"
      />
      <div style={{display:"flex", gap:"5px"}}>
        {allChips.map(item => (
          <p style={{
            backgroundColor: "grey",
            borderRadius: "5px",
            padding:"5px"
          }}>{item}<span onClick={(e)=>removeChip(item)} style={{
              marginLeft: "5px",
            color:"red"
          }}>X</span></p>
      ))}
        </div>
    </div>
  );
}

export default ChipsInput;