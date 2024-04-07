import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/users/Sameer-Kumar06')
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data);
  //     setData(data)
  //   })

  // }, [])

  return (
    <div className='text-centre m-4 p-4 bg-gray-600 text-white text-3xl'>Github followers : {data.followers}
      <img src={data.avatar_url} alt="GitHub profile picture" width={300} />

    </div>

  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/Sameer-Kumar06')
  return (response.json())
}