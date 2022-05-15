import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Home/index.jsx'
import Login from './Login/index.jsx'

const AppRouter = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/users'>Users</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/product' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
