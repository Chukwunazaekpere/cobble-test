import React from 'react'
import {Routes, Route } from "react-router-dom"
import HomeScreen from '../screens/HomeScreen'
interface Props  {

}

const ProtectedRoutes = (props: Props) => {
  return (
    <Routes>
        <Route path="/"  element={<HomeScreen />} />
    </Routes>
  )
}

export default ProtectedRoutes