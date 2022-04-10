import { ScrollTop } from 'helpers/Scrolltop'
import React from 'react'

const ScrollButton = ({ children }: any) => {
    return (
        <React.Fragment>
            <button onClick={ScrollTop} className="py-2 px-4 rounded-md bg-blue-500 text-white font-extrabold z-40 fixed bottom-5 right-5">{children}</button>
        </React.Fragment>
    )
}

export default ScrollButton