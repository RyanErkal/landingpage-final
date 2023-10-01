import React from "react";
import { motion } from "framer-motion";

export default function About() {
	return (
		<div
			id="about"
			class="h-screen p-6 lg:p-12 bg-gray-600 flex justify-center items-center text-center">
			<motion.div
				class="text-xl w-full flex flex-col justify-center items-center text-center"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				transition={{
					type: "spring",
					damping: 15,
					stiffness: 100
				}}
				variants={{
					visible: { opacity: 1, scale: 1 },
					hidden: { opacity: 0, scale: 0 }
				}}>
				<div class="w-5/6 sm:w-4/6 lg:max-w-2xl">
					<h1 class="text-3xl font-bold text-green-400 mb-6">
						About
					</h1>
					<p class="text-lg">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						in{" "}
						<span class="text-green-400 font-bold">
							Bodybuilding
						</span>{" "}
						and{" "}
						<span class="text-green-400 font-bold">
							Physique Development.
						</span>{" "}
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
				</div>
			</motion.div>
		</div>
	);
}
