import React from 'react'

export const PrimaryButton = ({ children, links }: any) => {
	return (
		<React.Fragment>
			<a href={links} className="py-3 px-8 rounded-md bg-[#916BFF] hover:bg-[#350cb3] text-md font-medium text-white">{children}</a>
		</React.Fragment>
	)
}

export const SecondaryButton = ({ children, links }: any) => {
	return (
		<React.Fragment>
			<a href={links} className="py-3 px-8 rounded-md bg-[#293681] bg-opacity-30 text-md font-medium text-white ml-4">{children}</a>
		</React.Fragment>
	)
}

export const OutlinePrimary = ({ children, links }: any) => {
	return (
		<React.Fragment>
			<a href={links} className="py-2 px-5 rounded-md border  border-[#916BFF] hover:border-[#350cb3] text-md font-medium text-white">{children}</a>
		</React.Fragment>
	)
}