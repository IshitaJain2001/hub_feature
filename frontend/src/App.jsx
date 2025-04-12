
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './nav'
import Service from './Service'

function App() {
 

  return (
    <>
    <Routes>
    <Route path='/' element={<Navbar/>}></Route>
    <Route path='/services' element={<Service/>}/>
  </Routes>
    </>
  )
}

export default App
