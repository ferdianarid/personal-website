import HeaderLayouts from 'layouts/HeaderLayouts'
import PageLayouts from 'layouts/PageLayouts'
import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Text from "../../components/atoms/Text"

const Portfolio: NextPage = () => {
    return (
        <React.Fragment>
            <HeaderLayouts>
                {/* Meta and SEO Concern */}
                <Head>
                    <title>Ferdian's - Portfolio</title>
                    <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=Edge, chrome" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta name="keywords" content="homepage ferdian" />
                    <meta property="og:title" content="homepage" key="title" />
                    <meta name="description" content="homepage ferdian" />
                </Head>
                <div className="w-full text-center py-[170px]">
                    <div className="w-full px-4 md:px-28">
                        <h1 className='font-bold text-white text-4xl md:text-5xl mt-5'>Portfolio</h1>
                        <h1 className='font-bold text-[#916BFF] text-2xl my-2'>Special articles goes here</h1>
                        <Text>I'm have been working as a Frontend Engineer for more than 2 years. I'm passionate about learning new technologies like JavaScript Framework and other libraries. Eager learn a new things and Focus on deliver a good product features for solve a user problem.
                        </Text>
                        <div className='mt-10'>
                            <p className='font-normal text-[#645F71] text-sm mt-5 leading-relaxed'>
                                Connect with me on
                            </p>
                            <div className="flex items-center justify-center gap-x-6">

                            </div>
                        </div>
                    </div>
                </div>
            </HeaderLayouts>
            <PageLayouts></PageLayouts>
        </React.Fragment>
    )
}

export default Portfolio