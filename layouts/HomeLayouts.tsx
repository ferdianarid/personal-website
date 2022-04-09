import Navbar from 'components/organism/Navbar'
import React from 'react'

const HomeLayouts = ({ children }: any) => {
	return (
		<React.Fragment>
			<div className="max-w-[1440px] mx-auto">
				<Navbar />
				<div className="px-4 md:px-32">
					{children}
				</div>
			</div>
		</React.Fragment>
	)
}

export default HomeLayouts