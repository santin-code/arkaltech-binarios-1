'use client'
import {rubik} from '@/app/ui/fonts'
import Image from "next/image"
import Link from 'next/link'
import { GiBookAura } from "react-icons/gi";
import { GiBorderedShield } from "react-icons/gi";





export default function Header() {
	return(
	<>
		<nav className="w-11/12 mx-auto my-auto mt-2 h-16 bg-black  text-white flex items-center   md:w-9/12 justify-around   ">
			<GiBookAura className={` left-7 h-full  text-7xl md:text-6xl  text-white justify-center antialiased`} />

			<Link href='/' onContextMenu={(e) => e.preventDefault()}  className={`flex w-auto h-full items-center text-5xl md:text-6xl lg:text-7xl text-cyan-200 justify-center ${rubik.className} antialiased`}> Arkal</Link>
			<GiBorderedShield className={` flex left-7 h-full  text-7xl md:text-6xl  text-white justify-center antialiased `} />
		</nav>
		<div className='w-11/12 border-b-2 border-sky-700 absolute right-0 left-0  mx-auto my-auto mt-3  md:w-8/12 '></div>
	</>)
}