import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import SideNav from './components/SideNav'
import Home from './components/links/Home'
import About from './components/links/About'
import Contact from './components/links/Contact'
import MyCv from './components/links/MyCv'
import Projects from './components/links/Projects'


function App() {

  return (
    <div className='flex overflow-hidden bg-[#343a40] text-white'>
      <SideNav/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/my-cv' element={<MyCv />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </div>
  )
}

export default App