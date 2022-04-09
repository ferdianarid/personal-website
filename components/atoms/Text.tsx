import React from 'react'

interface IText {
	children: any
	addclass?: any
}

const Text = ({ children, addclass }: IText) => {
	return (
		<React.Fragment>
			<p className={`font-normal text-[#645F71] text-sm my-2 leading-relaxed ${addclass}`}>
				{children}
			</p>
		</React.Fragment>
	)
}

export default Text