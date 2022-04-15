import BottomNav from 'components/organism/Navbar/BottomNav'
import HeaderLayouts from 'layouts/HeaderLayouts'
import PageLayouts from 'layouts/PageLayouts'
import { NextPage } from 'next'
import Head from 'next/head'
import Image from "next/image"
import React from 'react'
import { FaBookOpen, FaCommentDots } from 'react-icons/fa'
import Text from "../components/atoms/Text"
import photo from "../assets/photo.png"
import SectionText from 'components/atoms/SectionText'

const About: NextPage = () => {
    return (
        <React.Fragment>
            {/* Meta and SEO Concern */}
            <Head>
                <title>Ferdian's - About</title>
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=Edge, chrome" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="keywords" content="homepage ferdian" />
                <meta property="og:title" content="homepage" key="title" />
                <meta name="description" content="homepage ferdian" />
            </Head>
            <HeaderLayouts>
                <div className="w-full text-center py-[170px]">
                    <div className="w-full px-4 md:px-28">
                        <h1 className='font-bold text-white text-4xl md:text-5xl mt-5'>About</h1>
                        <h1 className='font-bold text-[#916BFF] text-2xl my-2'>About me</h1>
                        <Text>I'm have been working as a Frontend Engineer for more than 2 years. I'm passionate about learning new technologies like JavaScript Framework and other libraries. Eager learn a new things and Focus on deliver a good product features for solve a user problem.
                        </Text>
                        <div className='mt-10'>
                            <p className='font-normal text-[#645F71] text-sm mt-5 leading-relaxed'>

                            </p>
                            <div className="flex items-center justify-center gap-x-6">

                            </div>
                        </div>
                    </div>
                </div>
            </HeaderLayouts>
            <PageLayouts>
                <div className="mt-20">
                    <Image src={photo} width={200} height={200} alt={'photo'} />
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="w-full md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-14">
                            <h3 className="font-bold text-white text-2xl text-left mt-1 md:mt-3">Ferdian Ahmad R</h3>
                            <h3 className="font-semibold text-blue-400 text-md text-left">Frontend Engineer at Smeshub Indonesia</h3>
                            <h3 className="font-normal text-sm text-left mt-3 text-gray-400">Jombang, Indonesia</h3>

                            <p className="text-sm font-normal text-gray-500">JavaSript Learner</p>

                            <div className="mt-6">
                                <h3 className="font-semibold text-md text-left text-white">About Personal</h3>
                                <h3 className="font-normal text-sm text-left mt-1 text-gray-400">Im is a frontend engineer base in Jombang. Previous career, im join in a small agency in malang as a Frontend and also work as instructoor in web division</h3>
                            </div>

                            <div className="mt-6">
                                <h3 className="font-semibold text-md text-left text-white">Email Address</h3>
                                <h3 className="font-normal text-sm text-left mt-1 text-gray-400">ferdianahmadrozikin018@gmail.com</h3>
                            </div>

                            <div className="mt-6">
                                <h3 className="font-semibold text-md text-left text-white">Phone Number</h3>
                                <h3 className="font-normal text-sm text-left mt-1 text-gray-400">+62 812 5905 1310 ( Indonesia )</h3>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 grid grid-cols-2 gap-3 md:gap-5">
                            <div className="bg-gray-900 rounded-xl p-4">
                                <h3 className="font-bold mb-4 text-xl text-left text-white">Work Experience</h3>
                                <h3 className="font-semibold text-md text-left text-white">Frontend Engineer at Smeshub Indonesia</h3>
                                <h3 className="font-normal text-sm text-left mt-1 text-gray-400">Jakarta, Indonesia</h3>
                            </div>
                            <div className="bg-gray-900 rounded-xl p-4">
                                <h3 className="font-bold mb-4 text-xl text-left text-white">Education</h3>
                                <h3 className="font-semibold text-md text-left text-white">Institut Teknologi Asia Malang</h3>
                                <h3 className="font-normal text-sm text-left mt-1 text-gray-400">Malang, Indonesia</h3>
                            </div>
                            <div className="bg-gray-900 rounded-xl p-4">
                                <h3 className="font-bold mb-4 text-xl text-left text-white">Certifications</h3>
                                <h3 className="font-semibold text-md text-left text-white">Problem Solving Basic</h3>
                                <h3 className="font-normal text-sm text-left mt-1 text-gray-400">September 2021</h3>
                            </div>
                            <div className="bg-gray-900 rounded-xl p-4">
                                <h3 className="font-bold mb-4 text-xl text-left text-white">Careers</h3>
                                <h3 className="font-semibold text-md text-left text-white">Frontend Engineer</h3>
                                <h3 className="font-normal text-sm text-left mt-1 text-gray-400">2 Years Experience</h3>
                            </div>
                        </div>
                    </div>

                    {/*  */}
                    <div className="w-full mt-20">
                        <h3 className="font-bold text-white text-2xl text-left mt-1 md:mt-3">Github Statistics</h3>
                        <h3 className="font-semibold text-blue-400 text-md text-left">This is my github contribution statistics</h3>
                        <div className="flex flex-col md:flex-row items-center h-[200px] mt-5">
                            <img className='h-[215px] mr-2' src="https://github-readme-stats-eight-theta.vercel.app/api?username=ferdianar&show_icons=true&theme=algolia&include_all_commits=true&count_private=true" />
                            <img className='w-full mt-4 md:mt-0 h-[215px]' src="https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=ferdianar&layout=compact&langs_count=10&theme=algolia" />
                        </div>
                        <h3 className="mt-48 md:mt-6 font-normal text-sm text-left text-gray-400">Im always learn and create a new things and then push a project into a github. In spare time, im do that everyday to improve my skill. Im very enthusiastic to learn a new technology and keep focus to build strong fundamentals programming</h3>
                    </div>


                    <div className="w-full mt-20">
                        <h3 className="font-bold text-white text-2xl text-left mt-1 md:mt-3">Github Profile Trophy</h3>
                        <h3 className="font-semibold text-blue-400 text-md text-left">This is my github Profile Thropy Statistics</h3>
                        <div className="mt-5">
                            <img src="https://github-profile-trophy.vercel.app/?username=ferdianar&theme=juicyfresh&margin-w=8&margin-h=4&row=1&column=9" />
                        </div>
                    </div>
                </div>
            </PageLayouts>
        </React.Fragment >
    )
}

export default About