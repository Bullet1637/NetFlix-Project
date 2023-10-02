import React from 'react'
import LogIn from './LogIn'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './ErrorPage'
import GPTSearch from './GPTSearch'

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
      {
        path:"/gpt-search",
        element: <GPTSearch/>,
      }
    ]);


  
    
  return (
    <div>
        <RouterProvider router={appRouter}/>

       
    
    </div>
  )
}

export default Body
