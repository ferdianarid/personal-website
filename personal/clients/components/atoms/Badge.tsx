import React from 'react'

export const BlueBadge = ({ children }: any) => {
	return (
		<React.Fragment>
			<span className="text-xs ml-4 py-1 px-2 rounded-md bg-blue-400 bg-opacity-10">{children}</span>
		</React.Fragment>
	)
}

export const ArticleBadge = ({ children }: any) => {
	return (
		<React.Fragment>
			<div className="py-1 px-2 rounded-md bg-blue-800 bg-opacity-50 text-xs font-normal text-white absolute z-20 top-3 left-3">{children}</div>
		</React.Fragment>
	)
}