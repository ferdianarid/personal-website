import type { NextPage } from 'next'
import Link from "next/link"
import Image from "next/image"
import HeroImages from "../public/Hero.png"
import Layouts from "../layouts"

const Homepage: NextPage = ( ) => {
	return (
		<div className="w-full main max-w-[1440px] m-auto">
		<Layouts>
			{/* <!-- Header Section --> */}
			<div className="w-full flex flex-col md:flex-row px-0 md:px-[210px] pb-8">
				{/* <!-- Heading Content --> */}
				<div className="w-full md:w-1/2">
					<h1 className="text-[2.75rem] leading-[1.2] font-bold md:text-heading-xl mt-14 heading">Your Freelance Business In One Place</h1>
					<p className="text-sm text-gray-500 pt-2 pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ut esse doloribus repellat soluta, eligendi necessitatibus.</p>
					<div className="flex flex-col md:flex-row max-w-md items-center">
						<div className="w-full md:w-[50%]">
							<input type="text" id="fullname" name="fullname" placeholder="Enter your email" className="appereance-none rounded border border-gray-200 w-full py-2.5 px-4 text-gray-700 leading-tight" />
						</div>
						{/* <!-- Button Primary / Call to Action --> */}
						<div className="w-full md:w-[50%] font-bold no-underline inline-block text-white border-none text-sm px-4 py-3 mr-3 leading-none bg-white border rounded  hover:border-transparent mt-4 sm:mt-0">
							<Link href="/auth/login" >Get Started</Link>
						</div>
					</div>
				</div>
				{/* <!-- Heading Images --> */}
				<div className="w-full md:w-1/2 flex justify-center items-center mt-[1.25rem] md:mt-[-.5rem]">
					<Image className="ml-[-20px] md:ml-4" width={600} height={500} src={HeroImages} alt="headingImages" />
				</div>
			</div>
		</Layouts>
		</div>
	)
}

export default Homepage
