import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experiance from './components/Experiance'
import  Footer from './components/Footer'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'


export default function App() {
  return (
    <>
    <div>
    <NavBar/>
    <Home/>
    <About/>
    <Portfolio/>
    <Experiance/>
    <Contact/>
    <Footer/>
    </div>
    <Toaster />
    </>
  )
}
