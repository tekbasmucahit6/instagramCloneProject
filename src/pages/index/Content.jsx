import React from 'react'
import ContentLayout from '../../components/ContentLayout'
import RightBar from './components/RightBar'

function Content() {
  return (
    <div className='w-full flex justify-center items-start xl:pt-7 lg:pt-7 md:pt-7 py-2'>

        <div className=' w-full xl:w-[630px] lg:w-[630px] md:w-[630px]'>
            <ContentLayout />
        </div>

        <div className='hidden xl:flex lg:flex xl:w-[315px] lg:w-[315px] '>
            <RightBar />
        </div>


    </div>
  )
}

export default Content