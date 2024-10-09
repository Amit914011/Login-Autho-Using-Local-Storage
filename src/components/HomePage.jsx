import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {
    const userName=JSON.parse(localStorage.getItem('items'))
    const navigate=useNavigate()
    function handleLogout(){
        localStorage.removeItem('loggedin')
        navigate('/login')
    }
  return (
    <>
      <div className='w-full h-screen bg-slate-900 flex justify-center items-center flex-col'>
        <h1 className='text-5xl mb-5 text-center text-white font-bold'>Welcome To Home Page</h1>
        <p className='text-3xl text-white'>Hii ! {userName.name}</p>
        <button onClick={handleLogout} type='button' className='px-5 py-2 text-white border rounded mt-5'>LogOut</button>
      </div>
    </>
  )
}
