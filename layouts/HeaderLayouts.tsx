import Navbar from 'components/organism/Navbar'
import React from 'react'

const HeaderLayouts = ({ children }: any) => {
    return (
        <React.Fragment>
            <div className="cover max-w-[1440px] mx-auto">
                {children}
            </div>
        </React.Fragment >
    )
}

export default HeaderLayouts