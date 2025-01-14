import { useState } from 'react'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import Routes from './routes/Routes'
import './App.css'

function App() {
 
const routes = createBrowserRouter(Routes)
  return (
    <>
     <RouterProvider router={routes}/>
    </>
  )
}

export default App
