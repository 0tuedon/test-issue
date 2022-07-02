import React from 'react'
import MoreOptions from '../assets/svgs/more-vertical.svg'
const ProgressHeader = () => {
  return (
    <div className='flex justify-between'>
    {/* Card header including title and status */}
    <div className='flex gap-x-[15px]'>
        <h4 className='text-[20px] 
        font-semibold
        '>Cannot Access</h4>
        {/* progress status */}
        <div className={`
        bg-[#FBF8B2]
        px-[6px]
        py-[5px]
        rounded-[5px]
        `}>
            <p className={`text-[#FFA800]`}>In Progress</p>
        </div>
    </div>
    {/* More Options Point */}
    <div className='bg-gray1 
    flex
     justify-center items-center w-[33px] h-[33px] rounded-[50%]'>
        {/* More Options Svg */}
        <img src={MoreOptions} alt={"More Options"} />
    </div>
    </div>
  )
}

export default ProgressHeader