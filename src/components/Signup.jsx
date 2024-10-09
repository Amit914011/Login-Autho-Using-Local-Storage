import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {
    const [user,setUser]=useState({
        name:"",
        number:"",
        email:"",
        password:"",
    })
    let navigate=useNavigate()
    let {name,number,email,password}=user
    function handleChange(e){
        setUser({...user,[e.target.name]:e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault()
        localStorage.setItem('items', JSON.stringify(user));
        navigate('/login')
        // console.log(user)
    }

  return (
    <div className='w-full h-screen bg-slate-900 flex justify-center items-center'>
      <form action="" onSubmit={handleSubmit} className='w-96 border border-white rounded-lg flex flex-col justify-center items-center shadow-md p-5 shadow-white'>
        <h1 className='text-2xl text-white p-5 font-bold uppercase'>Signup Form</h1>
      <input type="text" name="name" id=""
      value={name} 
      onChange={handleChange}
      className='w-full h-8 rounded focus:outline-none px-2 text-md' placeholder='Enter Your Full Name..' required /><br/>
      <input type="number" 
      name="number"
      value={number}
      onChange={handleChange}
      
      id="" className='w-full h-8 rounded focus:outline-none px-2 text-md' placeholder='Enter Your Phone Number..' required/><br/>
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
      <button type='submit' className='px-5 py-2 bg-white rounded text-xl font-bold uppercase'>Register</button>
      </form>
    </div>
  )
}

export default Signup
