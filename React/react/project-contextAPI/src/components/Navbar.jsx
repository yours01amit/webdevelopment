import React, { useContext, useState } from 'react'
import { MyStore } from '../context/MyContext'

const Navbar = () => {

    let {setIsCartOpen} = useContext(MyStore)
    
  return (
    <div className='bg-blue-700 text-white rounded p-5 flex items-center justify-between'>
        <div>logo</div>
        <div className='flex gap-10 text-xl'>
            <p onClick={() => (
                setIsCartOpen(false)
            )} className='curcor-pointer'>Home</p>
            <p onClick={() => (
                setIsCartOpen(true)
            )} className='cursor-pointer'>Cart</p>
        </div>
        <button>Login</button>
    </div>
  )
}

export default Navbar