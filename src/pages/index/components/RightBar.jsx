import React from 'react'

function RightBar() {
  return (
    <div className='w-full flex flex-col justify-center items-center ml-5'>

      <div className='flex justify-between items-center w-full'>
            <div className='flex justify-center items-center gap-1'>
                <img src={"./img/account.png"} className='w-10 border-2 border-red-500 rounded-full bg-white p-1' alt="" />
                <p className='text-white text-lg'>mucahitxtekbs</p>
            </div>

            <div className='text-blue-500'>geçiş yap</div>
      </div>

      <div className='flex justify-between items-center w-full my-4 px-2'>
        <p className='text-gray-400 text-sm'>Senin için önerilenler</p>
        <p>Tümünü Gör</p>
      </div>


      <div className='flex flex-col justfiy-center items-center gap-4 w-full'>
          <div className='flex justify-between items-center w-full'>
                <div className='flex justify-center items-center gap-1'>
                    <img src={"./img/account.png"} className='w-10 border-2 border-red-500 rounded-full bg-white p-1' alt="" />
                    <p className='text-white text-lg'>mucahitxtekbs</p>
                </div>

                <div className='text-blue-500'>Takip et</div>
          </div>

          <div className='flex justify-between items-center w-full'>
                <div className='flex justify-center items-center gap-1'>
                    <img src={"./img/account.png"} className='w-10 border-2 border-red-500 rounded-full bg-white p-1' alt="" />
                    <p className='text-white text-lg'>mucahitxtekbs</p>
                </div>

                <div className='text-blue-500'>Takip et</div>
          </div>

          <div className='flex justify-between items-center w-full'>
                <div className='flex justify-center items-center gap-1'>
                    <img src={"./img/account.png"} className='w-10 border-2 border-red-500 rounded-full bg-white p-1' alt="" />
                    <p className='text-white text-lg'>mucahitxtekbs</p>
                </div>

                <div className='text-blue-500'>Takip et</div>
          </div>

          <div className='flex justify-between items-center w-full'>
                <div className='flex justify-center items-center gap-1'>
                    <img src={"./img/account.png"} className='w-10 border-2 border-red-500 rounded-full bg-white p-1' alt="" />
                    <p className='text-white text-lg'>mucahitxtekbs</p>
                </div>

                <div className='text-blue-500'>Takip et</div>
          </div>
      </div>


    </div>
  )
}

export default RightBar