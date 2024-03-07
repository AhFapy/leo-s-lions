import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landing-page/LandingPage'
import Auth from './pages/Auth/Auth'
import PlanPage from "./pages/plan-page/PlanPage"
import Courses from './pages/courses/Courses'
import MewingCourse from './pages/courses/mewing-course/MewingCourse'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/bronze-plan' element={<PlanPage plan="BRONZE"/>}/>
        <Route path='/silver-plan' element={<PlanPage plan="SILVER"/>}/>
        <Route path='/gold-plan' element={<PlanPage plan="GOLD"/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/courses/mewing' element={<MewingCourse/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
