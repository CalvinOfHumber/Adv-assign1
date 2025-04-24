'use client';
import { useState } from "react";

function form (){

    const [username, setUser] = useState('')
    const [error, setError] = useState('');
      const handleChange = (t) => {
        const input = t.target.value;
        setUser(input);
        if (!input.includes('!')) {
            setError('Missing !');
          } else {
            setError('');
          }
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            if (!error) {
              alert(`Hello: ${username}`);
            }
          };
    
      return (
        <form onSubmit={handleSubmit}>
       
        <label>
          Name:
          <input
            type="text"
            value={username}
            onChange={handleChange}
          />
        </label>
        {error && <b style={{ color: 'red' }}>{error}</b>}
        <input type="submit" value="Submit"  />
      </form>
    );
  
    }
    

export default form;
