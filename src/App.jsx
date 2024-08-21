import { TopNav, Footer, BlogContent } from './Components'
import { Features, Tags, StyleGuide, Author, HomePage, SignIn, SignUp, Membership, Blog} from './Pages'
import { Routes, Route,BrowserRouter as Router } from 'react-router-dom'
// import { AuthProvider } from './Context/Auth'
import { MaybeShowNavBar } from './Components/MaybeShowNavBar/MaybeShowNavBar'
import { Write } from './Pages/Write'
import { ProtectedRoute } from './Components/ProtectedRoute'
import NotFound from './Components/404'

function App() {
 
  return (
    <Router>
      <MaybeShowNavBar>
        <TopNav/>
      </MaybeShowNavBar>
      <Routes>      
        <Route exact path='/' element= {<HomePage/>}/>
        <Route path='/features' element= {<Features/>}/>
        <Route path='/styleGuide' element= {<StyleGuide/>}/>
        <Route path='/tags' element= {<Tags/>}/>
        <Route path='/author' element= {<Author/>}/>
        <Route path='/write' element={<ProtectedRoute><Write/></ProtectedRoute>}/>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/membership' element={<Membership/>} />
        <Route path='/blog/:id' element={<Blog/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <MaybeShowNavBar>
        <Footer/>
      </MaybeShowNavBar>
    </Router>
  )
}

export default App
