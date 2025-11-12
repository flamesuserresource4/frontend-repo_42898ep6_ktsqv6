import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { Layout, Home, Apropos, Galerie, Chambres, Services, ContactPage } from './pages'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}> 
          <Route index element={<Home />} />
          <Route path="a-propos" element={<Apropos />} />
          <Route path="galerie" element={<Galerie />} />
          <Route path="chambres" element={<Chambres />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
