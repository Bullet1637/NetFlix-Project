import React, { useEffect } from 'react'
import LogIn from './LogIn'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/Firebase'
import { useDispatch } from 'react-redux'
import { addUser,removeUser } from '../utils/UserSlice'
const Body = () => {
 

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<LogIn/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ])

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
          if (user) {
          
          } else {
           
          }
        });

    })
  return (
    <div>
        <RouterProvider router={appRouter}/>

       
    
    </div>
  )
}

export default Body
