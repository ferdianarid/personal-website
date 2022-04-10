import React from 'react'
import type { NextPage } from 'next'
import PageLayouts from 'layouts/PageLayouts'
import SocialLink from 'components/organism/SocialLink'
import Text from 'components/atoms/Text'
import SectionText from 'components/atoms/SectionText'
import Experience from 'components/organism/Experience'
import { PrimaryButton, SecondaryButton } from 'components/atoms/Button'
import HeaderLayouts from 'layouts/HeaderLayouts'
import { Socials } from "../utils/socials"
import { DataExperience } from "utils/experience"

const Home: NextPage = () => {
	return (
		<React.Fragment>
			{/* Header Section */}
			<HeaderLayouts>
				<div className="w-full text-center py-[170px]">
					<div className="w-full px-4 md:px-28">
						<h1 className='font-bold text-white text-4xl md:text-5xl mt-5'><span className='font-normal'>I'm</span> Ferdian Ahmad R</h1>
						<h1 className='font-bold text-[#916BFF] text-2xl my-2'>Frontend Engineer</h1>
						<Text>I'm have been working as a Frontend Engineer for more than 2 years. I'm passionate about learning new technologies like JavaScript Framework and other libraries. Eager learn a new things and Focus on deliver a good product features for solve a user problem.
						</Text>
						<div className="mt-10">
							<PrimaryButton links="mailto:ferdianahmadrozikin018@gmail.com">Email Me</PrimaryButton>
							<SecondaryButton links="#">Download CV</SecondaryButton>
						</div>
						<div className='mt-10'>
							<p className='font-normal text-[#645F71] text-sm mt-5 leading-relaxed'>
								Connect with me on
							</p>
							<div className="flex items-center justify-center gap-x-6">
								{
									Socials.map((item) => (
										<SocialLink key={item.id} links={item.links} media={item.title} />
									))
								}
							</div>
						</div>
					</div>
				</div>
			</HeaderLayouts>
			{/* Work Experrience Section */}
			<PageLayouts>
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
			</PageLayouts >
		</React.Fragment >
	)
}

export default Home
