import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landing-page/LandingPage'
import Auth from './pages/Auth/Auth'
import PlanPage from "./pages/plan-page/PlanPage"
import Courses from './pages/courses/Courses'
import AdminPage from './pages/Admin/AdminPage'
import CourseTemplateComponent from "./pages/courses/template/CourseTemplateComponent"

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
        <Route path='/courses/enhanced-masculinity' element={<CourseTemplateComponent courseKey={"Enhanced Masculinity Course"}/>}/>
        <Route path='/courses/tribe-leader' element={<CourseTemplateComponent courseKey={"Tribe Leader Course"}/>}/>
        <Route path='/courses/hack-the-school-system' element={<CourseTemplateComponent courseKey={"Hack The School System Course"}/>}/>
        <Route path='/courses/alpha-social-skills' element={<CourseTemplateComponent courseKey={"Alpha Social Skills Course"}/>}/>
        <Route path='/admin' element={<AdminPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
