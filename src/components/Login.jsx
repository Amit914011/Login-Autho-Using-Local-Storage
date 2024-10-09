import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

function Login() {
    const [user,setUser]=useState({
        email:"",
        password:""
    })
    let {email,password}=user
    function handleChange(e){
        setUser({...user,[e.target.name]:e.target.value})
    }
    let navigate=useNavigate()
    function handleSubmit(e){
        e.preventDefault();
        const userloggedin=JSON.parse(localStorage.getItem('items'))
        if(userloggedin.email===user.email && userloggedin.password===user.password){
            localStorage.setItem('loggedin',true)
            navigate('/')
        }
        else{
            alert('Enter your wrong')
        }
    }
  return (
    <>
     <div className='w-full h-screen bg-slate-900 flex justify-center items-center'>
      <form action="" onSubmit={handleSubmit} className='w-96 border border-white rounded-lg flex flex-col justify-center items-center shadow-md p-5 shadow-white'>
        <h1 className='text-2xl text-white p-5 font-bold uppercase'>Login Form</h1>
      <input type="email" 
      name="email"
      value={email}
      onChange={handleChange}

       id="" className='w-full h-8 rounded focus:outline-none px-2 text-md' placeholder='Enter Your Email..' required/><br/>
      <input type="password"
       name="password" 
       value={password}
       onChange={handleChange}
       id="" className='w-full h-8 rounded focus:outline-none px-2 text-md' placeholder='Enter Your Password..' required/><br/>
      <button type='submit' className='px-5 py-2 bg-white rounded text-xl font-bold uppercase'>Login</button>
      </form>
    </div>
      
    </>
  )
}

export default Login
