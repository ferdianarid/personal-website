import { NextPage } from 'next'
import React from 'react'
import Image from 'next/image'
import Text from 'components/atoms/Text'

import logos from "../../assets/logos.png"
import HighlightText from 'components/atoms/HighlightText'

const Footer: NextPage = () => {
    return (
        <React.Fragment>
            <div className='footer w-full px-4 md:px-32 mx-auto max-w-[1440px] mt-[200px] py-14 md:py-10 bg-[#293681] bg-opacity-30'>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5">
                    <div className="">
                        <Image src={logos} width={150} height={50} />
                        {/* <h1 className="font-bold text-lg text-white mt-2">Ferdian Ahmad R</h1> */}
                        <Text><HighlightText>Frontend Engineer</HighlightText> based in <HighlightText> Jombang </HighlightText>. Personal Website for fun and sharing article and knowledge</Text>
                    </div>
                    <div className="flex flex-col space-y-4 ml-10">
                        <Text addclass="font-bold">Main Menu</Text>
                        <Text>Portfolio Page</Text>
                        <Text>Articles Page</Text>
                        <Text>About Page</Text>
                    </div>
                    <div className="flex flex-col mt-10 md:mt-0 space-y-4 ml-0 md:ml-10">
                        <Text addclass="font-bold">Article Category</Text>
                        <Text>Technology</Text>
                        <Text>Research</Text>
                        <Text>Design</Text>
                    </div>
                    <div className="flex flex-col mt-10 md:mt-0 space-y-4 ml-10">
                        <Text addclass="font-bold">Main Menu</Text>
                        <Text>Portfolio Page</Text>
                        <Text>Articles Page</Text>
                        <Text>About Page</Text>
                    </div>
                </div>
                <hr className='mt-10' />
                <div className="text-left text-sm font-bold text-white mt-6">&copy; 2022 Made with &hearts; by Ferdian Ahmad R</div>
            </div>
        </React.Fragment>
    )
}

export default Footer