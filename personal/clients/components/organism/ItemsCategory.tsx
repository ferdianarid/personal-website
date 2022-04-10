import React from 'react'
import { Menu } from '@headlessui/react'
import Link from "next/link"

type Category = {
    category: string
    linkRedirect: string
}

const ItemsCategory = ({ category, linkRedirect }: Category) => {
    return (
        <React.Fragment>
            <Menu.Item>
                {({ active }) => (
                    <Link href={`/kategori/${linkRedirect}`}>
                        <a className={`${active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700"
                            } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:font-semibold`}>
                            {category}
                        </a>
                    </Link>
                )}
            </Menu.Item>
        </React.Fragment>
    )
}

export default ItemsCategory