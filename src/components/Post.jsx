import React from 'react'
import { GoKebabHorizontal } from "react-icons/go";
function Post() {
  return (
    <div className='w-[470px] flex flex-col justify-center items-center'>
        {/* post header evetn */}
        <div className='flex justify-between items-center w-full pb-3'>
            <div className='flex justify-center items-center gap-1'>
                <img src={"./img/account.png"} className='w-10 border-2 border-red-500 rounded-full bg-white p-1' alt="" />
                <p className='text-white text-lg'>mucahitxtekbs</p>
            </div>

            <div className='flex justify-end items-center'>
                <GoKebabHorizontal size={22} />
            </div>

        </div>

        {/* post content handle */}
        <div className='w-[468px] h-[468px] bg-white rounded'>

        </div>

    </div>
  )
}

export default Post