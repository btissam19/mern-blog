
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Projects from './pages/Projects'
import SingIn from './pages/SingIn'
import SingUp from './pages/SingUp'
import Header from './components/Header'

function App() {

  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/projects' element={<Projects/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/singup' element={<SingUp/>}/>
    <Route path='/singin' element={ <SingIn/>}/>
   </Routes>
   </BrowserRouter>
   
   
  )
}

export default App
