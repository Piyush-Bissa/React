import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)

  //let counter = 10

  const addValue = ()=>{
    // console.log("CLicked",counter);
    // counter = counter + 1
    if (counter <= 19) {
      setCounter(counter+1)
    }
  }
  const subValue = ()=>{
    if (counter > 0) {
      counter = counter - 1
    }
    setCounter(counter)
  }

  return (
    <>
      <h1>Chai Aur Biscuit</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={subValue}>Remove value</button>
    </>
  )
}

export default App
