
import { Routes, Route} from 'react-router-dom'

import Navbar from './components/navbar.jsx'
import Home from './components/Home.jsx'
import './App.css'


function App() {
 return (

    <>

      <Navbar/>

      <Routes>

          <Route path='/' element={<Home/>}/>
       </Routes>
    </>
  )
}

export default App

