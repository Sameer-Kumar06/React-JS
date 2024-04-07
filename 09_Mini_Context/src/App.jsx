import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
import './App.css'

function App() {
  
  return (
    <UserContextProvider>
      <h1>React and ContextAPI</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
