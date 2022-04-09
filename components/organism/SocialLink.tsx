import Link from 'next/link'
import React from 'react'

const SocialLink = ({ links, media }: any) => {
    return (
        <React.Fragment>
            <Link href={links}>
                <p className='hover:text-[#916BFF] font-medium text-white text-sm mt-1 leading-relaxed'>{media}</p>
            </Link>
        </React.Fragment>
    )
}

export default SocialLink