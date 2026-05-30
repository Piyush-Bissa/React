import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div class="flex h-screen items-center justify-center">
    <UserContextProvider>
      <h2>Hello Ji</h2>
      <Login/>
      <Profile/>
    </UserContextProvider>
    </div>
    </>
  )
}

export default App
