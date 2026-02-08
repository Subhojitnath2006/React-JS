import React from 'react'
import {useState,useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {
    // const [data,setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Subhojitnath2006')
    //     .then((res) => res.json())
    //     .then(data => {
    //         setData(data)
    //         console.log(data)
    //     })
    // },[])
    
    const data = useLoaderData()
  return (
    <div className='text-center bg-gray-600 m-4 text-white p-4 text-3xl'>
    Github followers : {data.followers}
    <img src={data.avatar_url} width={300} alt="" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/Subhojitnath2006')
    return res.json()
}
