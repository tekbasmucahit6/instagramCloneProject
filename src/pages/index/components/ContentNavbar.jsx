import React from 'react'
import { FaSearch } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
function ContentNavbar() {
  return (
    <div className='flex justify-between items-center border-b border-gray-600 pb-3 w-full px-4'>


        <div className='flex justify-start items-center gap-5 text-xl font-extrabold'>
            <p className='flex justify-center items-center'>Senin için <span className='flex xl:hidden lg:hidden md:hidden'><IoIosArrowDown size={22} /></span></p>
            <p className='text-gray-500 hidden xl:flex lg:flex md:flex'>Takip ettiklerin</p>
        </div>

        <div className='flex justify-center items-center gap-6 xl:hidden lg:hidden md:hidden'>
          <p><FaSearch size={22} /></p>
          <p><IoMdHeartEmpty size={25} /></p>
        </div>
        
    </div>
  )
}

export default ContentNavbar