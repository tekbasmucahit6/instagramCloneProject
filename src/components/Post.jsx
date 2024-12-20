import React from 'react'
import { GoKebabHorizontal } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { BiMessageRounded } from "react-icons/bi";
import { LuSend } from "react-icons/lu";
import { FaRegBookmark } from "react-icons/fa";


function Post() {
  return (
    <div className='w-full xl:w-[470px] lg:w-[470px] md:w-[470px] flex flex-col justify-center items-center px-3'>
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
        <div className='w-full xl:w-[468px] lg:w-[468px] md:w-[468px] h-[468px] flex justify-center items-center rounded z-0'>
            <p>bu bir deneme postudur</p>
        </div>

        {/* feature handle */}
        <div className='w-full '>


            <div 
                className='flex justify-between items-center w-full'>


                <div className='flex justify-center items-center gap-5'>
                    <FaRegHeart size={24} />
                    <BiMessageRounded size={24} />
                    <LuSend size={24} />
                </div>

                <div className='flex justify-end items-center'>
                <FaRegBookmark size={24} />
                </div>


            </div>

            <div
                className='flex flex-col justify-center items-start my-2 gap-1 w-full'>
                    <p className='text-lg'>mucahitxtekbs 🙏</p>
                    <p className='text-sm'>1500 yorumun tamamını gör</p>
                    <p className='text-sm flex justify-between items-center w-full'><span>Yorum ekle</span><span>😊</span></p>
            </div>

            <div
                className='w-full my-8'>
                <hr className='w-full' />
            </div>


        </div>

    </div>
  )
}

export default Post