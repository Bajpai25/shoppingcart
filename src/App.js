import React from 'react'
import "./App.css"
import"bootstrap/dist/css/bootstrap.min.css"
import { Container } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cancel from './components/Cancel'
import Store from './components/Store'
import Success from './components/Success'
import Navbarcomponent from './components/Nav'
import {CartProvider} from "./components/Cartcontext"
const App = () => {
  return (
    <CartProvider>
    <Container>
<Navbarcomponent></Navbarcomponent>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Store/>}/>
      <Route path="success" element={<Success/>}/>
      <Route path="cancel" element={<Cancel/>}/>
      </Routes>
    </BrowserRouter>
    </Container>
    </CartProvider> 
  )
}

export default App