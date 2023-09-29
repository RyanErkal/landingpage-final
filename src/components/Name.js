import React from "react";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

function FadeInWhenVisible({ children }) {
	const spring = {
		type: "spring",
		damping: 15,
		stiffness: 100
	};

	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			drag
			dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
			dragElastic={0.3}
			viewport={{ once: true }}
			transition={spring}
			variants={{
				visible: { opacity: 1, scale: 1 },
				hidden: { opacity: 0, scale: 0 }
			}}>
			{children}
		</motion.div>
	);
}

export default function Name() {
	return (
		<>
			<div class="h-screen p-6 bg-gray-700 flex justify-center items-center text-center">
				<FadeInWhenVisible>
					<p class="text-3xl">
						Welcome to{" "}
						<strong class="text-green-400">BRAND NAME</strong>
					</p>
				</FadeInWhenVisible>

				<div class="absolute bottom-0 animate-bounce">
					<AnchorLink href="#about">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="48"
							viewBox="0 -960 960 960"
							width="48">
							<path d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z" />
						</svg>
					</AnchorLink>
				</div>
			</div>
		</>
	);
}
