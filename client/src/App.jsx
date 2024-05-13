import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landing-page/LandingPage'
import Auth from './pages/Auth/Auth'
import PlanPage from "./pages/plan-page/PlanPage"
import Courses from './pages/courses/Courses'
import AdminPage from './pages/Admin/AdminPage'
import CourseTemplateComponent from "./pages/courses/template/CourseTemplateComponent"
import Access from './pages/Access/Access'
import GoldLobby from './pages/gold-lobby/GoldLobby'
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
        <Route path='/gold-lobby' element={<GoldLobby/>}/>
        <Route path='/access' element={<Access />}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/courses/before-watching' element={<CourseTemplateComponent courseKey={"Before Watching Courses"}/>}/>
        <Route path='/courses/enhanced-masculinity' element={<CourseTemplateComponent courseKey={"Enhanced Masculinity Course"}/>}/>
        <Route path='/courses/tribe-leader-course' element={<CourseTemplateComponent courseKey={"Tribe Leader Course"}/>}/>
        <Route path='/courses/hack-the-school-system' element={<CourseTemplateComponent courseKey={"Hack The School System Course"}/>}/>
        <Route path='/courses/alpha-social-skills' element={<CourseTemplateComponent courseKey={"Alpha Social Skills Course"}/>}/>
        <Route path='/courses/winners-mindset-course' element={<CourseTemplateComponent courseKey={"Winner Mindset Course"}/>}/>
        <Route path='/courses/killer-habits-course' element={<CourseTemplateComponent courseKey={"Killer Habits Course"}/>}/>
        <Route path='/courses/men-life-mastery' element={<CourseTemplateComponent courseKey={"Men's Life Mastery Course"}/>}/>
        <Route path='/courses/up-your-health-up-your-wealth' element={<CourseTemplateComponent courseKey={"Up Your Health Up Your Wealth Course"}/>}/>
        <Route path='/admin' element={<AdminPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
