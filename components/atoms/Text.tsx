import React from 'react'

const Text = ({ children }: any) => {
       return (
              <React.Fragment>
                     <p className='font-normal text-[#645F71] text-sm my-2 leading-relaxed'>
                            {children}
                     </p>
              </React.Fragment>
       )
}

export default Text