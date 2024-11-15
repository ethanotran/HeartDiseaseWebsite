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
import Result from './pages/results'
import Testbackend from './pages/testbackend'
import Results from './pages/results'


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
              <Route path="/Results" element={<Results/>}></Route>
              <Route path="/QuizEntry" element={<QuizEntry/>}></Route>
              <Route path="/QuizEntry/Quiz" element={<Quiz/>}></Route>
              <Route path="/testbackend" element={<Testbackend/>}></Route>
              <Route path="*" element={<Error/>}></Route>
          </Routes>
        
        </BrowserRouter>
    </div>
  )
}
