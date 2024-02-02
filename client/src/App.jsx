
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Projects from './pages/Projects'
import SingIn from './pages/SingIn'
import SingUp from './pages/SingUp'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/projects' element={<Projects/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/sign-up' element={<SingUp/>}/>
    <Route path='/sign-in' element={ <SingIn/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
   
   
  )
}

export default App
