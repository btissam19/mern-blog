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
import PrivateRoute from './components/PriviteRoute'
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute';
import CreatePost from './pages/CreatePost';
import UpdatePost from './pages/UpdatePost';
import PostPage from './pages/PostPage';
import ScrollToTop from './components/ScrollToTop';
function App() {

  return (
   <BrowserRouter>
   <ScrollToTop />
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/projects' element={<Projects/>}/>
    <Route path='/post/:postSlug' element={<PostPage />} />
    <Route element={<PrivateRoute/>}>
    <Route path='/dashboard' element={<Dashboard/>}/>
    </Route>
    <Route element={<OnlyAdminPrivateRoute />}>
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/update-post/:postId' element={<UpdatePost />} />
    </Route>
    <Route path='/sign-up' element={<SingUp/>}/>
    <Route path='/sign-in' element={ <SingIn/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
   
   
  )
}

export default App
