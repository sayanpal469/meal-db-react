import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='md:px-16 py-8'>
      <div className='flex flex-col justify-center h-[80vh] items-center'>
        <h1 className=' font-mono text-xl md:text-5xl '>
          Welcome to Meal Db<span className='text-6xl'>☕</span>
        </h1>
        <Link to='/meals'>
        <button className='py-2 px-3 text-white mt-3 rounded-full bg-cyan-600'>
          Order Foods
        </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
