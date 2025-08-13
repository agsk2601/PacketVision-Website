import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
function App() {
  

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
    
    </>
  )
}

export default App
