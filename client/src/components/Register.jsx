import React,{useState} from 'react';
import {signIn} from '../util/api.js'
import { useNavigate } from 'react-router-dom';
function Register() {
    const navigate = useNavigate()
    const[username,setUsername]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const handleChange=(e)=>{
        const{name,value}=e.target
        if(name==='username'){
            setUsername(value)
        }
        else if(name==='email'){
            setEmail(value)
        }
        else if(name==='password'){
            setPassword(value)
        }
    }
    const handleRegister=(e)=>{
        e.preventDefault()
        const data={
            username:username,
            email:email,
            password:password
        }
        signIn(data)
        .then((res)=>{
          console.log('this is something rsponse',res)
            localStorage.setItem('token',res.jwt)
            localStorage.setItem('email',res.user.email);
            navigate('/')

        }
        )
        .catch((error)=>{
            console.log(error)
        }
        )


    }

  return (
    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
      <h1 className="text-4xl font-medium">Register</h1>
      <p className="text-slate-500">Hi, Welcome  👋</p>
      <form action="" className="my-10">
        <div className="flex flex-col space-y-5">
        <label htmlFor="username">
            <p className="font-medium text-slate-700 pb-2">Username</p>
            <input id="username" name="username" type="text" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter username" value={username} onChange={handleChange} />
          </label>
          <label htmlFor="email">
            <p className="font-medium text-slate-700 pb-2">Email address</p>
            <input id="email" name="email" type="email" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter email address" value={email} onChange={handleChange} />
          </label>
          <label htmlFor="password">
            <p className="font-medium text-slate-700 pb-2">Password</p>
            <input id="password" name="password" type="password" value={password} className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your password" onChange={handleChange}/>
          </label>
         
          <button className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center" onClick={handleRegister}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            <span>Register</span>
          </button>
         
        </div>
      </form>
    </div>
  );
}

export default Register;
