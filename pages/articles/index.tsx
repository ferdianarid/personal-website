import SectionText from 'components/atoms/SectionText'
import Article from 'components/organism/Article'
import HeaderLayouts from 'layouts/HeaderLayouts'
import PageLayouts from 'layouts/PageLayouts'
import { NextPage } from 'next'
import React from 'react'
import { ArticleItems } from 'utils/articles'
import Text from "../../components/atoms/Text"
import Delivery from "../../public/images/DeliveryApps1.jpg"

const Articles: NextPage = () => {
    return (
        <React.Fragment>
            <HeaderLayouts>
                <div className="w-full text-center pt-[240px] pb-[150px]">
                    <div className="w-full px-4 md:px-28">
                        <h1 className='font-bold text-white text-4xl md:text-5xl mt-5'>Articles</h1>
                        <h1 className='font-bold text-[#916BFF] text-2xl my-2'>Special articles goes here</h1>
                        <Text>Articles that may be of interest to you and I wrote this articles when spare time
                        </Text>

                    </div>
                </div>
            </HeaderLayouts>
            <PageLayouts>
                <div className=''>
                    <div className="flex text-left gap-x-6">
                        <div className="w-full my-10">
                            <SectionText>ARTICLES</SectionText>
                            <Text>This is my article post. I'm usually create a posts in spare time.</Text>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 md:mt-6">
                                {ArticleItems.map((article) => (
                                    <Article key={article.id}
                                        srcImage={Delivery}
                                        title={article.title}
                                        author={article.author}
                                        category={article.category}
                                        subtitle={article.subtitle}
                                        dateposted={article.dateposted}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </PageLayouts>
        </React.Fragment>
    )
}

export default Articles