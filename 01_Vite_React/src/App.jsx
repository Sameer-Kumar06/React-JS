import Hello from "./hello"

function App() {
  
  const userName = "Sameer"

  return (
    <>
    <Hello />
    <h1>Hello React from {userName}</h1>
    <p>Test Paragraph</p>
    </>
  )
}

export default App
