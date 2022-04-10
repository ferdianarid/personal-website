import React from 'react'
import Image from "next/image"
import Text from "../../components/atoms/Text"
import House2 from "../../public/images/House2.jpg"

const PortfolioCard = () => {
    return (
        <React.Fragment>
            <div className="w-full mt-10 hover:p-3 md:hover:p-5 hover:cursor-pointer hover:bg-[#302857] hover:bg-opacity-20 hover:rounded-xl transition-all duration-700">
                <Image className='rounded-md' src={House2} alt="house" />
                <h1 className='text-white font-bold md:text-xl leading-normal mt-4'>Housing Apps - Find your dream home</h1>
                <Text>Frontend Web Aplikasi yang berfokus untuk pencarian rumah dengan mudah</Text>
                <Text>Tech Stack</Text>
                <p className='text-white font-normal text-sm'>React.js, Tailwind CSS, Headless UI, Vercel</p>
            </div>
        </React.Fragment>
    )
}

export default PortfolioCard