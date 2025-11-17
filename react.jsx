import React, { useEffect, useState } from 'react';
import './styles.css'

function DarkModeToggle() {
  let [mode, setMode] = useState(false)

 
  const toggleFunction = () => {
    setMode(!mode)
  }

  return (
    <div className={ `container  ${mode ? 'dark-mode': 'light-mode'}` }>
      <h1>Dark Mode Toggle</h1>
      <div className="toggle-container">
        <label className="switch">
          <input type="checkbox"
          checked={mode}
          onClick={toggleFunction}
          />
          <span className="slider round"></span>
        </label>
        <span className="mode-text">{mode ? "Dark Mode" : "Light Mode"}</span>
      </div>
    </div>
  );
}

export default DarkModeToggle;