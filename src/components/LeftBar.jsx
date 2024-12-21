import React from 'react'
import NavbarItem from './NavbarItem';

// icon import event
import { FiInstagram } from "react-icons/fi";
import { GoHomeFill } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { TfiVideoClapper } from "react-icons/tfi";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";
import { MdOutlineAccountCircle } from "react-icons/md";
import { SiThreads } from "react-icons/si";
import { MdMenu } from "react-icons/md";

function LeftBar() {
  return (
    <div className='flex flex-col justify-start items-start w-full h-full bg-black'>
        
        {/* logo event */}
        <div className='hidden xl:flex lg:flex md:flex xl:mx-6 py-10 font-serif justify-center items-center xl:justify-normal xl:items-start w-full'>
            <strong className='hidden xl:flex'>İNSTAGRAM</strong>
            <strong className='flex xl:hidden'><FiInstagram size={22} /></strong>
        </div>

        {/* navbar item event */}
        <div className='flex flex-row justify-between items-start gap-5 xl:flex-col lg:flex-col md:flex-col px-6 w-full'>
            <NavbarItem ıcon={GoHomeFill} text={"Ana Sayfa"} style={"flex justify-center xl:justify-start items-center gap-3 hover:bg-gray-600/90 py-3 xl:py-1 lg:py-1 md:py-1 w-full rounded"} />
            <NavbarItem ıcon={FaSearch} text={"Ara"} style={"flex justify-center xl:justify-start items-center gap-3 hover:bg-gray-600/90 hidden xl:flex lg:flex md:flex py-3 xl:py-1 lg:py-1 md:py-1 w-full"} />
            <NavbarItem ıcon={MdOutlineExplore} text={"Keşfet"} style={"flex justify-center xl:justify-start items-center gap-3 hover:bg-gray-600/90 py-3 xl:py-1 lg:py-1 md:py-1 w-full"} />
            <NavbarItem ıcon={TfiVideoClapper} text={"Reels"} style={"flex justify-center xl:justify-start items-center gap-3 hover:bg-gray-600/90 py-3 xl:py-1 lg:py-1 md:py-1 w-full"} />
            <NavbarItem ıcon={FaFacebookMessenger} text={"Mesajlar"} style={"flex justify-center xl:justify-start items-center gap-3 hover:bg-gray-600/90 py-3 xl:py-1 lg:py-1 md:py-1 w-full"} />
            <NavbarItem ıcon={FaRegHeart} text={"Bildirimler"} style={"flex justify-center xl:justify-start items-center gap-3 hover:bg-gray-600/90 hidden xl:flex lg:flex md:flex py-3 xl:py-1 lg:py-1 md:py-1 w-full"} />
            <NavbarItem ıcon={CiSquarePlus} text={"Oluştur"} style={"flex justify-center xl:justify-start items-center gap-3 hover:bg-gray-600/90 py-3 xl:py-1 lg:py-1 md:py-1 w-full"} />
            <NavbarItem ıcon={MdOutlineAccountCircle} text={"Profil"} style={"flex justify-center xl:justify-start items-center gap-3 hover:bg-gray-600/90 py-3 xl:py-1 lg:py-1 md:py-1 w-full"} />
        </div>


        {/* bottom item */}
        <div className='hidden xl:flex xl:flex-col lg:flex lg:flex-col md:flex md:flex-col xl:mx- py-7 gap-5 px-6 font-serif justify-end h-full w-full'>
            <NavbarItem ıcon={SiThreads} text={"Threads"} style={"flex justify-center xl:justify-start items-center gap-3 hover:bg-gray-600/90 py-3 xl:py-1 lg:py-1 md:py-1 w-full rounded"} />
            <NavbarItem ıcon={MdMenu} text={"Daha fazla"} style={"flex justify-center xl:justify-start items-center gap-3 hover:bg-gray-600/90 py-3 xl:py-1 lg:py-1 md:py-1 w-full rounded"} />
        </div>
    </div>
  )
}

export default LeftBar