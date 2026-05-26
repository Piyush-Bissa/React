import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './Components/card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"Piyush",
    age:20
  }
  return (
    <>
    <h1 className='bg-green-500 text-black p-5 w-96 rounded-xl mb-5 text-center mx-auto '>Tailwind CSS</h1>
    <div className="flex gap-6 justify-center flex-wrap">
    <Card UserName="BissaG" famous="1st"/>
    <Card UserName="PiyushG" famous="2nd"/>
    <Card UserName="VarunG" famous="3rd"/>
    </div>
    </>
    
  )
  
}

export default App
