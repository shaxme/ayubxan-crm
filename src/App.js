import { React } from 'react'
import { Routes, Route } from 'react-router-dom'
import Demo from './pages/Demo';
import Home from './pages/Home';
import Client from './pages/Client';


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/client' element={<Client />} />
        <Route path='/factory' element={<Demo />} />
      </Routes>
    </>
  )
  
}