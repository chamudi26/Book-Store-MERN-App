import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className=' md:h-[80vh] lg:h-[75vh] flex flex-col md:flex-row items-center justify-center'>
        <div className='w-full mb-12 md:mb-0 lg:w-3/6 flex flex-col items-center lg:items-start justify-center'>
        <h1 className="text-2xl lg:text-6xl font-serif  text-yellow-100 text-center lg:text-left">Enjoy thousands of books from the comfort of your home  &#9829;</h1>
        <p className='mt-4 text-xl text-zinc-300 text-center lg:text-left'>At BOOKHEAVEN,we believe in the power of stories.Whether you're a seosoned book lover or just starting your reading journey,our mission is to provide a heaven where you can find your next favourite book. </p>
        <div className='mt-8'><Link to="/all-books" className='text-yellow-100 text-xl lg:text-2xl font-semibold border border-yellow-100 px-10 py-3 hover:bg-zinc-800 rounded-full'>Discover Books</Link></div>
        </div>
        <div className='w-full lg:w-3/6 h-auto lg:h-[100%] flex items-center justify-center'>
        <img src="book.png" alt='hg'/>
        </div>
    </div>
  )
}

export default Hero