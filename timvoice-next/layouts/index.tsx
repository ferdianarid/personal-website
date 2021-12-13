import React, { ReactNode } from 'react'

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

interface PropsLayouts {
       children: ReactNode
}

function Layout( props: PropsLayouts ) {
       const { children } = props
       return (
              <React.Fragment>
                            <Navbar />
                            { children }
                            <Footer />
              </React.Fragment>
       )
}

export default Layout
