import React from 'react';
import { useState } from 'react';
import { signUp } from './services/fetch-utils';


export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState ('');


  async function handleSubmit(e){
    e.preventDefault();

    const user = await signUp(email, password);    

  }

  return (
    <div>
      <h3>My movie list</h3> 
      <form onSubmit={handleSubmit}>
        <label> Email:
          <input onChange={e => setEmail(e.target.value)} value={email} type="email"/>
        </label>
        <label> Password:
          <input onChange={e => setPassword(e.target.value)} value={password} type="password"/>
        </label>
        <button>Sign Up!</button>
      </form>
    </div>
  );
}
