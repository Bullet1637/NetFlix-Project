import React from "react"
import { configureStore } from "@reduxjs/toolkit"
import UserSlice from "./UserSlice"

const appStore = configureStore({
   reducer:{
      user:UserSlice
   }
})

export default appStore