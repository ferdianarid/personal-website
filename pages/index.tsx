import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import type { NextPage } from 'next'
import HomeLayouts from 'layouts/HomeLayouts'
import { ArticleItems } from "utils/articles"
import { DataExperience } from "utils/experience"
import Text from 'components/atoms/Text'
import SectionText from 'components/atoms/SectionText'
import { PrimaryButton, SecondaryButton } from 'components/atoms/Button'
import Article from 'components/organism/Article'
import Experience from 'components/organism/Experience'
import ProfilePhoto from "public/images/ferdian.png"
import Delivery from "public/images/DeliveryApps1.jpg"
import House2 from "public/images/House2.jpg"

const Home: NextPage = () => {
	return (
		<React.Fragment>
			<HomeLayouts>
				<h1 className='font-extrabold text-white text-opacity-30 text-8xl mt-[150px]'>HELLO</h1>
				<div className="w-full flex flex-col md:flex-row justify-between">
					<div className="w-full md:w-[55%] md:mr-[15%]">
						<h1 className='font-bold text-white text-4xl md:text-5xl mt-5'><span className='font-normal'>I'm</span> Ferdian Ahmad R</h1>
						<h1 className='font-bold text-[#24CD34] text-2xl mt-2'>Frontend Developer</h1>
						<Text>I'm have been working as a Frontend Developer and Handle UI Design
							for more than 4 years. I'm passionate about learning new technologies
							and Design Trend. I also study User Interface Design and always
							contribute research to build useful products.
						</Text>
						<div className="mt-5">
							<PrimaryButton links="mailto:ferdianahmadrozikin018@gmail.com">Email Me</PrimaryButton>
							<SecondaryButton links="#">Download CV</SecondaryButton>
						</div>
						<div className='mt-10'>
							<p className='font-normal text-[#645F71] text-sm mt-5 leading-relaxed'>
								Connect with me on
							</p>
							<div className="flex items-center gap-x-6">
								<Link href="https://linkedin.com/in/ferdianar"><p className='hover:text-[#24CD34] font-medium text-white text-sm mt-1 leading-relaxed'>LinkedIn</p></Link>
								<Link href="https://instagram.com/ferdianarid"><p className='hover:text-[#24CD34] font-medium text-white text-sm mt-1 leading-relaxed'>Instagram</p></Link>
								<Link href="https://facebook.com/ferdianar"><p className='hover:text-[#24CD34] font-medium text-white text-sm mt-1 leading-relaxed'>Facebook</p></Link>
								<Link href="https://github.com/ferdianar"><p className='hover:text-[#24CD34] font-medium text-white text-sm mt-1 leading-relaxed'>Github</p></Link>
							</div>
						</div>
					</div>
					<div className="w-full flex items-center justify-center mt-10 md:w-[30%] md:-mt-20">
						<Image src={ProfilePhoto} height="500px" width="350px" alt="profile" />
					</div>
				</div>
				<div className="w-full my-10">
					<SectionText>PORTFOLIO</SectionText>
					<Text>Lets explore my portfolio. Click to read more about portfolio and description</Text>
					<div className="grid grid-cols-2 gap-x-6 md:grid-cols-3 md:gap-x-10">
						<div className="w-full mt-10 hover:p-3 md:hover:p-5 hover:cursor-pointer hover:bg-[#302857] hover:bg-opacity-20 hover:rounded-xl transition-all duration-700">
							<Image className='rounded-md' src={House2} alt="house" />
							<h1 className='text-white font-bold md:text-xl leading-normal mt-4'>Housing Apps - Find your dream home</h1>
							<Text>Frontend Web Aplikasi yang berfokus untuk pencarian rumah dengan mudah</Text>
							<Text>Tech Stack</Text>
							<p className='text-white font-normal text-sm'>React.js, Tailwind CSS, Headless UI, Vercel</p>
						</div>
						<div className="w-full mt-10 hover:p-3 md:hover:p-5 hover:cursor-pointer hover:bg-[#302857] hover:bg-opacity-20 hover:rounded-xl transition-all duration-700">
							<Image className='rounded-md' src={Delivery} alt="house" />
							<h1 className='text-white font-bold md:text-xl leading-normal mt-4'>Delivery Apps - Send package fast and easly</h1>
							<Text>Landing page web delivery. Web tentang jasa pengiriman barang</Text>
							<Text>Tech Stack</Text>
							<p className='text-white font-normal text-sm'>React.js, Tailwind CSS, Headless UI, Vercel</p>
						</div>
						<div className="w-full mt-10 hover:p-3 md:hover:p-5 hover:cursor-pointer hover:bg-[#302857] hover:bg-opacity-20 hover:rounded-xl transition-all duration-700">
							<Image className='rounded-md' src={House2} alt="house" />
							<h1 className='text-white font-bold md:text-xl leading-normal mt-4'>Housing Apps - Find your dream home</h1>
							<Text>Frontend Web Aplikasi yang berfokus untuk pencarian rumah mudah</Text>
							<Text>Tech Stack</Text>
							<p className='text-white font-normal text-sm'>React.js, Tailwind CSS, Headless UI, Vercel</p>
						</div>

						<div className="w-full mt-10 hover:p-3 md:hover:p-5 hover:cursor-pointer hover:bg-[#302857] hover:bg-opacity-20 hover:rounded-xl transition-all duration-700">
							<Image className='rounded-md' src={House2} alt="house" />
							<h1 className='text-white font-bold md:text-xl leading-normal mt-4'>Housing Apps - Find your dream home</h1>
							<Text>Frontend Web Aplikasi yang berfokus untuk pencarian rumah mudah</Text>
							<Text>Tech Stack</Text>
							<p className='text-white font-normal text-sm'>React.js, Tailwind CSS, Headless UI, Vercel</p>
						</div>
						<div className="w-full mt-10 hover:p-3 md:hover:p-5 hover:cursor-pointer hover:bg-[#302857] hover:bg-opacity-20 hover:rounded-xl transition-all duration-700">
							<Image className='rounded-md' src={Delivery} alt="house" />
							<h1 className='text-white font-bold md:text-xl leading-normal mt-4'>Delivery Apps - Send package fast and easly</h1>
							<Text>Landing page web delivery. Web tentang jasa pengiriman barang</Text>
							<Text>Tech Stack</Text>
							<p className='text-white font-normal text-sm'>React.js, Tailwind CSS, Headless UI, Vercel</p>
						</div>
						<div className="w-full mt-10 hover:p-3 md:hover:p-5 hover:cursor-pointer hover:bg-[#302857] hover:bg-opacity-20 hover:rounded-xl transition-all duration-700">
							<Image className='rounded-md' src={House2} alt="house" />
							<h1 className='text-white font-bold md:text-xl leading-normal mt-4'>Housing Apps - Find your dream home</h1>
							<Text>Frontend Web Aplikasi yang berfokus untuk pencarian rumah dengan mudah</Text>
							<Text>Tech Stack</Text>
							<p className='text-white font-normal text-sm'>React.js, Tailwind CSS, Headless UI, Vercel</p>
						</div>
					</div>
				</div>
				<div className="w-full">
					<SectionText>WORK EXPERIENCE</SectionText>
					<Text>This is my working experience. Company name, long time contribution and Position or Role.</Text>
					{DataExperience.map((experience: any) => (
						<Experience key={experience.id}
							position={experience.position}
							startDate={experience.startDate}
							endDate={experience.endDate}
							company={experience.company}
							duration={experience.duration}
							workStatus={experience.workStatus}
							location={experience.location}
							description={experience.description}
						/>
					))}
				</div>
				<div className="w-full my-10">
					<SectionText>ARTICLES</SectionText>
					<Text>This is my article post. I'm usually create a posts in spare time.</Text>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 md:mt-6">
						{ArticleItems.map((article) => (
							<Article key={article.id}
								srcImage={Delivery}
								title={article.title}
								author={article.author}
								category={article.category}
								subtitle={article.subtitle}
								dateposted={article.dateposted}
							/>
						))}
					</div>
				</div>
			</HomeLayouts>
		</React.Fragment>
	)
}

export default Home
