import React from 'react'
import ContentNavbar from '../pages/index/components/ContentNavbar'

import Post from './Post'
import StoryLayout from './StoryLayout'

function ContentLayout() {
  return (
    <div className='flex flex-col'>
        <ContentNavbar />
        <StoryLayout />


        <div className='flex flex-col justify-center items-center z-0'>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>


    </div>
  )
}

export default ContentLayout