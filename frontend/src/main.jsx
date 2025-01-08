import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, Routes, BrowserRouter as Router } from 'react-router'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import StaffHours from './pages/StaffHours.jsx'
import App from './App.jsx'
import Login from './pages/Login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/staff-hours" element={<StaffHours />} />
        <Route exact path="/test-blog" element={<App />} />
      </Routes>
    </Router>
  </StrictMode>,
)
