
// import { Routes, Route} from 'react-router-dom'

// import Navbar from './components/navbar.jsx'
// import Home from './components/Home.jsx'
// import './App.css'


// function App() {
//  return (

//     <>

//       <Navbar/>

//       <Routes>

//           <Route path='/' element={<Home/>}/>
//        </Routes>
//     </>
//   )
// }

// export default App


import { Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
// import Section2 from './components/Section2.jsx'
import Section3 from './components/Section3.jsx'
import Section4 from './components/Section4.jsx'
import Section5 from './components/Section5.jsx'
import Footer from './components/Footer.jsx'
// import './App.css'


function Landing() {
  return (
    <>
      <Home/>
      {/* <Section2/> */}
      <Section3/>
      <Section4/>
      <Section5/>
    </>
  )
}

function App() {
 return (

    <>

      <Navbar/>

      <Routes>

          <Route path='/' element={<Landing/>}/>
       </Routes>

      <Footer/>
    </>
  )
}

export default App

