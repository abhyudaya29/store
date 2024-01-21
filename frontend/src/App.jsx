/* eslint-disable react-refresh/only-export-components */
import { useState } from 'react'
import './App.css'
import {createBrowserRouter,Outlet} from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'

import Header from './components/Header'
const App=()=>{
  return (
    <>
    <Header/>
    <Outlet/>
    {/* <h1>this is App laoyt</h1> */}
    </>
  )
}

  


export const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {path:'/home',element:<Home/>},
      {path:'/products',element:<Products/>}
    ]
  }
])
export default App
