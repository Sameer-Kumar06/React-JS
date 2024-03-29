import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(5)

  // let counter = 5

  const addValue = () => {
    if (counter >= 20) {
      window.alert("Maximum value is capped to 20")
    }
    else {
      setCounter(counter + 1)
      // setCounter((prevcounter) => prevcounter + 1)
    }
    console.log(counter);
  }

  const removeValue = () => {
    if (counter <= 0) {
      window.alert("Minimum value is capped to 0")
    }
    else {
      setCounter(counter - 1)
    }
    console.log(counter);
  }
  return (
    <>
      <h1>Hello World</h1>
      <h2>Counter value : {counter}</h2>

      <button
        onClick={addValue}>Add value {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
