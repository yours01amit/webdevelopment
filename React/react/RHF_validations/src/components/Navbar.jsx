import React from 'react'

const Navbar = ({setToggle}) => {

  return (
    <div className='p-4 bg-gray-900 text-white flex rounded items-center justify-between'>
        <div>
            <img className='rounded-full' width={35} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXze31Ftkykf-vSbA9d2ajVmcIq96jNK2RW3OQRk8L-Q&s=10" alt="" />
        </div>
        <div className='flex gap-6 font-semibold'>
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>

        </div>
        <button 
        onClick={() => setToggle((prev) => !prev)} 
        className='p-2 bg-blue-700 text-white cursor-pointer rounded'>Create User</button>

    </div>
  )
}

export default Navbar