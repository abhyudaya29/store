import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'

import Header from './components/Header'
const App=()=>{
  return (
    <>
    {/* <h1>this is App laoyt</h1> */}
    <Header/>
    <Outlet/>
    </>
  )
}
// eslint-disable-next-line react-refresh/only-export-components
// export const  appRouter=createBrowserRouter([
//   {path:'/',element:<App/>,
//   children:[
//     {path:'/home',element:<Home/>},
//      {path:'/about',element:<About/> }

//   ]
// },
  

// ])
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
