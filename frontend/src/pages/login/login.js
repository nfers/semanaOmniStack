import React, { useState } from 'react';
import api from '../../services/api';

export default function Login() {
    const [email, setEmail ] =  useState('');

    async function handleSubmit(event) {
        event.preventDefault();
    
    
     const response = await api.post('http://localhost:3031/sessions', { email } );
     console.log(response);
    
     const { _id } = response.data;
    
     localStorage.setItem('user', _id);
     }
    
    return (
            <>
            <p> Ofereça <strong>Spots</strong> para programadores</p>

            <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail *</label>
          <input 
            type="email" 
            id="email" 
            placeholder="Seu Melhor E-mail"
            value={email}
            onChange={event => setEmail(event.target.value)}
            /> 

            <button className="btn" 
              type="submit">Entrar </button> 
        </form>
    </>)
}