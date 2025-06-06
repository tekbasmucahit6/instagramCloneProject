import React from 'react'
import LeftBar from '../components/LeftBar'

function Layouts({Content}) {
  return (
    <div className='flex flex-row justify-start items-start'>
        <div
            className='fixed bottom-0 left-0 w-full z-50 xl:top-0 lg:top-0 md:top-0 xl:fixed lg:fixed md:fixed xl:w-2/12 lg:w-1/12 md:w-1/12 xl:h-screen lg:h-screen md:h-screen border-t xl:border-t-0 lg:border-t-0 md:border-t-0 xl:border-r lg:border-r md:border-r border-gray-600 shadow-xl'>
            <LeftBar />
        </div>
        <div
            className='flex justify-start items-center xl:w-11/12 lg:w-11/12 lg:ml-32 xl:ml-60 w-full me-5 z-40'>
            <Content />
        </div>
    </div>
  )
}

export default Layouts