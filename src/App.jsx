import React from 'react'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import TodoList from './components/TodoList'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />}> </Route>
        <Route path='/todoList' element={<TodoList/>}></Route>
      </Routes>
    </>
  )
}
