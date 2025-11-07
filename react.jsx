import React, { useState } from 'react';
import './styles.css'

// ✅ Export this so it can be tested 
export const checkPasswordStrength = () => {
};

const PasswordStrength = () => {

  const [passwordType, setPasswordType] = useState('')
const [password,setPassword] = useState('')

  const checkPassword = (e) => {
    e.preventDefault()
    

    let count = 0;
    if (/.{8,}/.test(password)) count++;
    if (/[A-Z]/.test(password)) count++;
    if (/[a-z]/.test(password)) count++;
    if (/[0-9]/.test(password)) count++;
    if (/[^A-Za-z0-9]/.test(password)) count++;


    if (count === 0) setPasswordType('Weak Password');
    else if (count === 1) setPasswordType('Level 1');
    else if (count === 2 || count === 3) setPasswordType('Level 2');
    else if (count === 4 || count === 5) setPasswordType('Level 3');

  
  }

  return (
    <div>
      <h2>Password Strength Checker</h2>
      <form onSubmit={checkPassword}>
        <input
          type="password"
          minLength={8}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Check Strength</button>
      </form>
      {passwordType && (<h3>Strength: {passwordType}</h3>)}
    </div>
  );
};

export default PasswordStrength;