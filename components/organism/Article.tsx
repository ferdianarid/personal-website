import React from 'react'
import Image from 'next/image'
import { ArticleBadge } from 'components/atoms/Badge'
import Text from 'components/atoms/Text'
import { IArticles } from 'interfaces/IArticles'

const Article = (props: IArticles) => {
       const { srcImage, title, author, category, subtitle, dateposted } = props
       return (
              <React.Fragment>
                     <div className="w-full bg-[#1f2549] bg-opacity-30 rounded-lg p-4 mt-8">
                            <div className="relative">
                                   <Image src={srcImage} className="rounded-md transition-all hover:scale-110 duration-700" />
                                   <ArticleBadge>{category}</ArticleBadge>
                            </div>
                            <h1 className="font-bold text-xl leading-normal text-white mt-4">{title}</h1>
                            <Text><span className="text-xs">Posted by <span className="text-white font-bold"> {author} </span> at <span className="text-white font-bold">{dateposted}</span></span></Text>
                            <Text>{subtitle}</Text>
                     </div>
              </React.Fragment>
       )
}

export default Article