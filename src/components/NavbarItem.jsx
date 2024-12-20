import React from 'react'

function NavbarItem({ıcon,text,style}) {
  return <div className={style}>
    {/* navbarİtem İcons */}
    <div
        className='text-2xl'>
            <p><ıcon /></p>
    </div>
    {/* navbarİtem text */}
    <div className='text-lg hidden xl:flex'>
    <p>{text}</p>
    </div>
  </div>
}

export default NavbarItem