import React from 'react'
import LogIn from './LogIn'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './ErrorPage'

const Body = () => {


    const appRouter = createBrowserRouter([
      {
        path: "/",
        element: <LogIn />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
      {
        path: "/error-page",
        element: <ErrorPage />,
      },
    ]);


  
    
  return (
    <div>
        <RouterProvider router={appRouter}/>

       
    
    </div>
  )
}

export default Body
