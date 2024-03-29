import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
	const [count, setCount] = useState(0)

	let myObj = {
		username:"Sameer",
		age: 17,

	}

	return (
		<>
			<h1 className='bg-green-400 text-black p-4 rounded-xl mb-10'>Tailwind test</h1>
			<Card userName="Test User 1" btnText="click me"/>
			<Card userName="Test User 2" btnText="visit me"/>
		</>
	)
}

export default App
