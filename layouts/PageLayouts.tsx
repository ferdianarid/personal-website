import React from 'react'
import Navbar from 'components/organism/Navbar'
import Footer from 'components/templates/Footer'
import ScrollButton from 'components/atoms/ScrollButton'

const PageLayouts = ({ children }: any) => {
	return (
		<React.Fragment>
			<div className="max-w-[1440px] mx-auto">
				{/* Navbar Section */}
				<Navbar />
				{/* Children */}
				<div className="px-4 md:px-32">
					{children}
				</div>
				{/* Footer Section */}
				<Footer />
				<ScrollButton>Scroll Top</ScrollButton>
			</div>
		</React.Fragment>
	)
}

export default PageLayouts