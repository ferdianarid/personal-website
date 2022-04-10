import React, { useEffect, useState } from "react";

// import Image Next
import Image from "next/image"

// import Link Next
import Link from "next/link"

// import  TransitionHeadless UI React
import { Menu, Transition } from "@headlessui/react"

import logos from "../../assets/logos.png"

import { OutlinePrimary } from "components/atoms/Button"

import { FaChevronUp, FaChevronDown } from "react-icons/fa"

import { ClassCategory, PortfolioCategory } from "../../utils/category"
import ItemsCategory from "./ItemsCategory";

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
								<p className=" text-white text-sm font-semibold px-3 py-2 rounded-xl hover:text-[#916BFF] hover:cursor-pointer">
									Home
								</p>
							</Link>

							<div className="relative inline-block text-left">
								<Menu>
									{({ open }: any) => (
										<React.Fragment>
											<span className="rounded-md shadow-sm">
												<Menu.Button className="inline-flex items-center space-x-2 text-sm text-white justify-center transition duration-150 ease-in-out  focus:border-blue-300 focus:shadow-outline-blue">
													<Link href="/articles">
														<p className="nav-link font-semibold text-white hover:text-[#916BFF] hover:cursor-pointer"> Articles </p>
													</Link>
													{
														open ? <FaChevronUp width={24} /> : <FaChevronDown width={24} />
													}
												</Menu.Button>
											</span>

											<Transition
												show={open}
												enter="transition ease-out duration-100"
												enterFrom="transform opacity-0 scale-95"
												enterTo="transform opacity-100 scale-100"
												leave="transition ease-in duration-75"
												leaveFrom="transform opacity-100 scale-100"
												leaveTo="transform opacity-0 scale-95"
											>
												<Menu.Items
													static
													className="absolute left-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg outline-none"
												>
													<div className="my-1">
														{
															ClassCategory.map((items) => (
																<ItemsCategory key={items.id} category={items.name} linkRedirect={items.links} />
															))
														}
													</div>
												</Menu.Items>
											</Transition>
										</React.Fragment>
									)}
								</Menu>
							</div>

							<div className="relative inline-block text-left">
								<Menu>
									{({ open }: any) => (
										<React.Fragment>
											<span className="rounded-md shadow-sm">
												<Menu.Button className="inline-flex items-center space-x-2 text-sm text-white justify-center transition duration-150 ease-in-out  focus:border-blue-300 focus:shadow-outline-blue">
													<Link href="/portfolio">
														<p className="nav-link font-semibold text-white hover:text-[#916BFF] hover:cursor-pointer"> Portfolio </p>
													</Link>
													{
														open ? <FaChevronUp width={24} /> : <FaChevronDown width={24} />
													}
												</Menu.Button>
											</span>

											<Transition
												show={open}
												enter="transition ease-out duration-100"
												enterFrom="transform opacity-0 scale-95"
												enterTo="transform opacity-100 scale-100"
												leave="transition ease-in duration-75"
												leaveFrom="transform opacity-100 scale-100"
												leaveTo="transform opacity-0 scale-95"
											>
												<Menu.Items
													static
													className="absolute left-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg outline-none"
												>
													<div className="my-1">
														{
															PortfolioCategory.map((items) => (
																<ItemsCategory key={items.id} category={items.name} linkRedirect={items.links} />
															))
														}
													</div>
												</Menu.Items>
											</Transition>
										</React.Fragment>
									)}
								</Menu>
							</div>

							<Link href="/contact" passHref>
								<p className="text-white text-sm font-semibold hover:text-[#916BFF] hover:cursor-pointer px-3 py-2 rounded-xl">
									Contact
								</p>
							</Link>
							<Link href="/about" passHref>
								<p className="text-white text-sm font-semibold hover:text-[#916BFF] hover:cursor-pointer px-3 py-2 rounded-xl">
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
								<p className="text-sm text-white hover:text-[#916BFF] hover:cursor-pointer block px-3 py-2 rounded-md font-medium">
									Home
								</p>
							</Link>

							<div className="relative z-30 pt-2 md:pt-0 ml-3 md:ml-0 text-left">
								<Menu>
									{({ open }: any) => (
										<React.Fragment>
											<span className="rounded-md shadow-sm">
												<Menu.Button className="inline-flex items-center space-x-2 text-sm text-white justify-center transition duration-150 ease-in-out  focus:border-blue-300 focus:shadow-outline-blue">
													<Link href="/articles">
														<p className="nav-link font-semibold text-white hover:text-[#916BFF] hover:cursor-pointer"> Articles </p>
													</Link>
													{
														open ? <FaChevronUp width={24} /> : <FaChevronDown width={24} />
													}
												</Menu.Button>
											</span>

											<Transition
												show={open}
												enter="transition ease-out duration-100"
												enterFrom="transform opacity-0 scale-95"
												enterTo="transform opacity-100 scale-100"
												leave="transition ease-in duration-75"
												leaveFrom="transform opacity-100 scale-100"
												leaveTo="transform opacity-0 scale-95"
											>
												<Menu.Items
													static
													className="absolute left-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
												>
													<div className="my-1">
														{
															ClassCategory.map((items) => (
																<ItemsCategory key={items.id} category={items.name} linkRedirect={items.links} />
															))
														}
													</div>
												</Menu.Items>
											</Transition>
										</React.Fragment>
									)}
								</Menu>
							</div>

							<div className="relative pt-2 md:pt-0 ml-3 md:ml-0 text-left">
								<Menu>
									{({ open }: any) => (
										<React.Fragment>
											<span className="rounded-md shadow-sm">
												<Menu.Button className="inline-flex items-center space-x-2 text-sm text-white justify-center transition duration-150 ease-in-out  focus:border-blue-300 focus:shadow-outline-blue">
													<Link href="/portfolio">
														<p className="nav-link font-semibold text-white hover:text-[#916BFF] hover:cursor-pointer"> Portfolio </p>
													</Link>
													{
														open ? <FaChevronUp width={24} /> : <FaChevronDown width={24} />
													}
												</Menu.Button>
											</span>

											<Transition
												show={open}
												enter="transition ease-out duration-100"
												enterFrom="transform opacity-0 scale-95"
												enterTo="transform opacity-100 scale-100"
												leave="transition ease-in duration-75"
												leaveFrom="transform opacity-100 scale-100"
												leaveTo="transform opacity-0 scale-95"
											>
												<Menu.Items
													static
													className="absolute left-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg outline-none"
												>
													<div className="my-1">
														{
															PortfolioCategory.map((items) => (
																<ItemsCategory key={items.id} category={items.name} linkRedirect={items.links} />
															))
														}
													</div>
												</Menu.Items>
											</Transition>
										</React.Fragment>
									)}
								</Menu>
							</div>

							<Link
								href="/contact" passHref>
								<p className="text-white text-sm  block px-3 py-2 hover:text-[#916BFF] hover:cursor-pointer rounded-md font-semibold">
									Contact
								</p>
							</Link>
							<Link
								href="/about" passHref>
								<p className="text-white text-sm block px-3 py-2 hover:text-[#916BFF] hover:cursor-pointer rounded-md font-semibold">
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
		</nav >
	)
}

export default Navbar;