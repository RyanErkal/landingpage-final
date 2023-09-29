import React from "react";
import { useState } from "react";
import "../App.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import scrollLock from "scroll-lock";

export default function Nav() {
	const [nav, setNav] = useState(false);

	function showNav() {
		setNav(!nav);
		scrollLock.toggle();
	}

	return (
		<nav class="flex flex-row justify-between p-4 text-gray-100 bg-gray-800 font-medium text-lg">
			<h1 class="text-3xl font-bold text-green-400">BRAND NAME</h1>
			<div
				class="flex items-center justify-center sm:hidden fill-current"
				onClick={showNav}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24"
					viewBox="0 -960 960 960"
					width="24">
					<path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
				</svg>
			</div>

			{/* desktop nav */}
			<ul class="hidden sm:flex flex-row justify-center items-center text-center">
				<li class="mr-4 hover:text-green-400 transition-all ease-in-out">
					<AnchorLink href="#about">About</AnchorLink>
				</li>
				<li class="mr-4 hover:text-green-400 transition-all ease-in-out">
					<AnchorLink href="#testimonials">Testimonials</AnchorLink>
				</li>
				<li class="mr-4 hover:text-green-400 transition-all ease-in-out">
					<AnchorLink href="#packages">Packages</AnchorLink>
				</li>
				<li class="mr-4 hover:text-green-400 transition-all ease-in-out">
					<AnchorLink href="#contact">Contact</AnchorLink>
				</li>
			</ul>

			{/* mobile nav */}
			<div
				class={`h-[100vh] fixed top-[0px] flex flex-col justify-around items-center w-full md:hidden bg-gray-800 z-40 duration-300 ${
					nav ? "right-[0px]" : "right-[-100vw]"
				} `}>
				{nav && (
					<svg
						onClick={showNav}
						class="fixed right-[30px] top-[30px] fa fa-times text-3xl z-50 md:hidden fill-current"
						xmlns="http://www.w3.org/2000/svg"
						height="24"
						viewBox="0 -960 960 960"
						width="24">
						<path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
					</svg>
				)}
				<AnchorLink href="#about" onClick={showNav}>
					About
				</AnchorLink>
				<AnchorLink href="#testimonials" onClick={showNav}>
					Testimonials
				</AnchorLink>
				<AnchorLink href="#packages" onClick={showNav}>
					Packages
				</AnchorLink>
				<AnchorLink href="#contact" onClick={showNav}>
					Contact
				</AnchorLink>
			</div>
		</nav>
	);
}
