import React, { useState, useEffect, useRef } from 'react'
import "./Login.css"
import { useContext } from 'react'
import { LoginContext } from '../../Conetxt/LoginContext/LoginContext'
import {  useNavigate} from 'react-router-dom'


export function Login() {
  

  const Context = useContext(LoginContext)
  const {email , password} = Context.field
  const {field , setField} =Context




  const inputPassword = useRef()
  const [local , setLocal] = useState(1)

  const handleChange = (event)=>{
    setField((prev)=> ({
      ...prev,[event.target.name]:event.target.value
    }))
    console.log(field)
  }

  const [auth , setauth] = useState(true)
  /*const SumbitToLocal = ()=>{
    localStorage.setItem(local,JSON.stringify(field))
      

  }*/

  const Navigate = useNavigate()
  const handleForm=(event)=>{
    event.preventDefault()
    localStorage.setItem(local,JSON.stringify(field))
      Navigate("/")
  }

  if(localStorage.length === 1){
    Navigate("/")
  }

  return (
    <form onSubmit={handleForm}>
    <label htmlFor="email">Email:</label>
    <input type="email" id="email" name="email" placeholder='email' onChange={handleChange} />

    <label htmlFor="password">Password:</label>
    <input type="password" id="password" name="password" placeholder='PassWord' ref={inputPassword} onChange={handleChange} />

    <label>
      <input type="checkbox" id="remember-me" name="remember-me" />
      Remember Me
    </label>

    <input type="submit" value="Login"  />
    <button onClick={()=>{ localStorage.clear()}}>Click</button>
  </form>
  )
}

