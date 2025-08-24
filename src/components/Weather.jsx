import React from 'react'
import { useSelector } from 'react-redux'

const Weather = () => {
    const weather = useSelector((state)=> state.weather)
    console.log(weather)
  return (
    <div className='bg-blue-300'>
        <div className=' min-h-screen container min-w-screen-lg mx-auto'>
             <h1 className='text-4xl font-bold text-center pt-20 pb-10'>Weather Dashboard</h1>
             <div className='flex flex-col justify-between items-center'>
                <p className='bg-red-300 text-white text-center px-4 py-6 rounded-xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
             </div>
        </div>
    </div>
  )
}

export default Weather