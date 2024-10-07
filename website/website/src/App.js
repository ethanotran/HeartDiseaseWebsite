import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from "axios"
import Home from './pages/home'
import About from './pages/about'
import Model from './pages/model'
import Info from './pages/info'
import Stats from './pages/stats'
import Error from './pages/error'
import QuizEntry from './pages/quizentry'
import Quiz from './pages/quiz'


export default function App() {

 
  return (
    <div>
        <BrowserRouter>
          <Routes>
              <Route index element={<Home/>}></Route>
              <Route path="/Home" element={<Home/>}></Route>
              <Route path="/About" element={<About/>}></Route>
              <Route path="/Model" element={<Model/>}></Route>
              <Route path="/Stats" element={<Stats/>}></Route>
              <Route path="/Info" element={<Info/>}></Route>
              <Route path="/QuizEntry" element={<QuizEntry/>}></Route>
              <Route path="/QuizEntry/Quiz" element={<Quiz/>}></Route>
              <Route path="*" element={<Error/>}></Route>
          </Routes>
        
        </BrowserRouter>
    </div>
  )
}
