import React from 'react'
import {useDispatch} from "react-redux";
import { login } from '../features/user';
import { logout } from '../features/user';
import { useState } from 'react';
import "./Hello.css"
export default function Login() {
    const dispatch=useDispatch();
    const [name,setName]=useState("");
    const[age,setAge]=useState("");
    const[email,setEmail]=useState("");
  return (
    <div>
          <form className="Form">
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>Enter your age:
        <input
          type="text" 
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <label>Enter your email:
        <input
          type="text" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

    </form>
        <button
        onClick={()=>{
        
           dispatch(login({name:name,age:age,email:email}));
        }}
        
        >Submit</button>
        <button
        onClick={()=>{
        
           dispatch(logout({}));
        }}
        
        >Refresh</button>

    </div>
  )
}
