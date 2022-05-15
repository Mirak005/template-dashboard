import logo from './logo.svg'
import './App.css'
import AppRouter from './pages/AppRouter'
import { login, log } from './services/storeApi'
import { useEffect } from 'react'

function App() {
  return <AppRouter />
}

export default App
