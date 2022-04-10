import React from 'react'

const HighlightText = ({ children }: any) => {
    return (
        <React.Fragment>
            <span className="text-white font-bold">{children}</span>
        </React.Fragment>
    )
}

export default HighlightText