import React, { useState } from "react";
import './styles.css'
function ChipsInput() {
  const [chipsInput, setChipsInput] = useState("")
  const [allChips,setAllChips] = useState([])
  const handleKey = (e) => {
    if (chipsInput === '') {
      return
    }
    if (e.key === 'Enter') {
    e.preventDefault()
      const filter = allChips.filter(item => item !== chipsInput)
      setAllChips([...filter,chipsInput])
      setChipsInput('')
  }
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
            borderRadius: "2px",
            padding:"5px"
          }}>{item}</p>
      ))}
        </div>
    </div>
  );
}

export default ChipsInput;