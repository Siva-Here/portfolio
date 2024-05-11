import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import MainHeader from './components/MainHeader.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Error from './Error.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainHeader/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="*" element={<Error/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App