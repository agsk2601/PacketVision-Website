import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Topology from './pages/Topology.jsx'
function App() {
  

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/topology' element={<Topology/>}/>
      </Routes>
    </Router>
    
    </>
  )
}

export default App
