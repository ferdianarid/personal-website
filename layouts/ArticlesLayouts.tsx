import Navbar from 'components/organism/Navbar'
import Footer from 'components/templates/Footer'
import React from 'react'

const ArticlesLayouts = ({ children }: any) => {
    return (
        <React.Fragment>
            <div className="max-w-[1440px]  mx-auto">
                <Navbar />
                <div className="mt-[150px] mx-4 md:mx-32">
                    {children}
                </div>
                <Footer />
            </div>
        </React.Fragment >
    )
}

export default ArticlesLayouts