import React from 'react'

const SectionText = ({ children }: any) => {
	return (
		<React.Fragment>
			<h1 className='font-extrabold text-white text-opacity-20 text-6xl md:text-8xl mt-[150px]'>{children}</h1>
		</React.Fragment>
	)
}

export default SectionText