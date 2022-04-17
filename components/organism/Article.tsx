import React from 'react'
import Image from 'next/image'
import { ArticleBadge } from 'components/atoms/Badge'
import Text from 'components/atoms/Text'
import { IArticles } from 'interfaces/IArticles'
import Link from 'next/link'

const Article = (props: IArticles) => {
       const { srcImage, title, author, category, subtitle, dateposted } = props
       return (
              <React.Fragment>
                     <div className="w-full bg-[#1f2549] bg-opacity-30 rounded-lg p-4 mt-8">
                            <div className="relative">
                                   <Image src="/images/wordpress/wordpress.png" width={340} height={180} alt="images" className="rounded-md transition-all hover:scale-110 duration-700 object-cover" />
                                   <ArticleBadge>{category}</ArticleBadge>
                            </div>
                            <h1 className="font-bold text-xl leading-normal text-white mt-4">{title}</h1>
                            <Text><span className="text-xs">Posted by <span className="text-white font-bold"> {author} </span> at <span className="text-white font-bold">{dateposted}</span></span></Text>
                            <Text>{subtitle}</Text>
                            <Link href="/articles/wordpress"><button className='py-2 px-4 rounded-md bg-blue-600 text-white font-bold mt-4'>Read more</button></Link>
                     </div>
              </React.Fragment>
       )
}

export default Article