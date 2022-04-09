import React from 'react'
import Text from 'components/atoms/Text'
import { BlueBadge } from 'components/atoms/Badge'
import { IExperience } from 'interfaces/IExperience'

const Experience = (props: IExperience) => {
	const { position, startDate, endDate, company, duration, workStatus, location, description } = props
	return (
		<React.Fragment>
			<div className="mt-10">
				<div className="flex flex-col md:flex-row items-start md:items-center justify-between">
					<h1 className="font-bold text-3xl text-white">{position}</h1>
					<h1 className="font-normal text-xs md:text-sm text-[#916BFF]">{startDate} - {endDate}</h1>
				</div>
				<h1 className="font-medium text-lg text-[#916BFF] mt-4 md:mt-2">{company} <BlueBadge>{duration} Month</BlueBadge></h1>
				<div className="flex items-center gap-x-6 mb-4 md:mb-0">
					<p className='text-white font-normal text-sm mt-2'>{workStatus}</p>
					<p className='text-white font-normal text-sm mt-2'>{location} - Indonesia</p>
				</div>
				<Text>{description}</Text>
			</div>
		</React.Fragment>
	)
}

export default Experience