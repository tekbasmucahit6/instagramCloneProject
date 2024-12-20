import React from 'react'
import ContentNavbar from '../pages/index/components/ContentNavbar'
import StoryLayout from '../pages/index/components/StoryLayout'
import Post from './Post'

function ContentLayout() {
  return (
    <div className='flex flex-col'>
        <ContentNavbar />
        <StoryLayout />


        <div className='flex flex-col justify-center items-center'>
            <Post />
        </div>


    </div>
  )
}

export default ContentLayout