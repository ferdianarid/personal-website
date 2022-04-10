import React, { useEffect, useState } from "react";

// import Image Next
import Image from "next/image"

// import Link Next
import Link from "next/link"

// import  TransitionHeadless UI React
import { Transition } from "@headlessui/react"

import logos from "../../assets/logos.png"

import { OutlinePrimary } from "components/atoms/Button";
// Navbar Components
function Navbar() {
	// State isOpen
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="w-full max-w-[1440px] fixed z-40 top-0 mx-auto bg-[#09062d] bg-opacity-50 backdrop-blur-md backdrop-filter">
			<div className="h-[100px] flex items-center justify-between px-4 md:px-32">
				<div className="flex items-center">
					<div className="flex-shrink-0">
						<Image src={logos} width="110px" height="40px" alt="brand" />
					</div>
					<div className="hidden md:block">
						<div className="ml-10 flex items-center space-x-4">
							<Link href="/" passHref>
								<p className=" text-white text-sm font-normal hover:text-[#916BFF] px-3 py-2 rounded-xl">
									Home
								</p>
							</Link>
							<Link href="/portfolio" passHref>
								<p className="text-white text-sm font-normal hover:text-[#916BFF] px-3 py-2 rounded-xl">
									Portfolio
								</p>
							</Link>
							<Link href="/articles" passHref>
								<p className="text-white text-sm font-normal hover:text-[#916BFF] px-3 py-2 rounded-xl">
									Articles
								</p>
							</Link>
							<Link href="/contact" passHref>
								<p className="text-white text-sm font-normal hover:text-[#916BFF] px-3 py-2 rounded-xl">
									Contact
								</p>
							</Link>
							<Link href="/about" passHref>
								<p className="text-white text-sm font-normal hover:text-[#916BFF] px-3 py-2 rounded-xl">
									About
								</p>
							</Link>
							<Link href="/hireme" passHref>
								<OutlinePrimary>
									Hire me
								</OutlinePrimary>
							</Link>
						</div>
					</div>
				</div>
				<div className="-mr-2 flex md:hidden">
					<button
						onClick={() => setIsOpen(!isOpen)}
						type="button"
						className="bg-transparent inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none "
						aria-controls="mobile-menu"
						aria-expanded="false"
					>
						<span className="sr-only">Open main menu</span>
						{!isOpen ? (
							<svg
								className="block h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						) : (
							<svg
								className="block h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						)}
					</button>
				</div>
			</div>

			<Transition
				show={isOpen}
				enter="transition ease-out duration-100 transform"
				enterFrom="opacity-0 scale-95"
				enterTo="opacity-100 scale-100"
				leave="transition ease-in duration-75 transform"
				leaveFrom="opacity-100 scale-100"
				leaveTo="opacity-0 scale-95"
			>
				{(ref: any) => (
					<div className="md:hidden" id="mobile-menu">
						<div ref={ref} className="px-2 pb-10 pt-2 space-y-1 sm:px-3">
							<Link
								href="/" passHref>
								<p className="text-sm text-white hover:text-green-300 block px-3 py-2 rounded-md font-medium">
									Home
								</p>
							</Link>

							<Link href="/portfolio" passHref>
								<p className="text-white text-sm  block px-3 py-2 rounded-md font-medium">
									Portfolio
								</p>
							</Link>

							<Link
								href="/articles" passHref>
								<p className="text-white text-sm  block px-3 py-2 rounded-md font-medium">
									Articles
								</p>
							</Link>

							<Link
								href="/contact" passHref>
								<p className="text-white text-sm  block px-3 py-2 rounded-md font-medium">
									Contact
								</p>
							</Link>
							<Link
								href="/about" passHref>
								<p className="text-white text-sm block px-3 py-2 rounded-md font-medium">
									About
								</p>
							</Link>
							<Link href="/hireme" passHref>
								<OutlinePrimary addclass="ml-2">
									Hire me
								</OutlinePrimary>
							</Link>
						</div>
					</div>
				)}
			</Transition>
		</nav>
	)
}

export default Navbar;