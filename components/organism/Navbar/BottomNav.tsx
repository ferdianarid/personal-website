import React from 'react'
import { FaBookOpen, FaCommentDots } from 'react-icons/fa'

const BottomNav = () => {
    return (
        <React.Fragment>
            <div className="w-full max-w-[1440px] fixed h-auto py-4 z-80 bottom-0 mx-auto bg-[#09062d] text-white bg-opacity-50 backdrop-blur-md backdrop-filter">
                <div className="flex px-4 items-center justify-start space-x-4">
                    <div className="flex flex-col items-center">
                        <button className='flex p-2 flex-col rounded-lg items-center hover:bg-[#100a54]'>
                            <FaBookOpen className='h-5 w-5' />
                            <span className="text-xs font-medium">Portfolio</span>
                        </button>
                    </div>
                    <div className="flex p-2 flex-col rounded-lg items-center hover:bg-[#100a54]">
                        <button className='flex flex-col items-center'>
                            <FaCommentDots className='h-5 w-5' />
                            <span className="text-xs font-medium">Feedback</span>
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default BottomNav