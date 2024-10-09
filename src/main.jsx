import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import HomePage from './components/HomePage.jsx'

let router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App/>}>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>
)
