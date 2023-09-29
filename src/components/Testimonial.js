import React from "react";
import { motion } from "framer-motion";

export default function Testimonial() {
	return (
		<motion.div
			class="p-6 bg-gray-100 text-gray-800 rounded-xl shadow-xl w-full"
			whileHover={{ scale: 1.05 }}
			transition={{ type: "spring", dampening: 15, stiffness: 100 }}>
			<div class="flex flex-col">
				<img
					src="https://staticg.sportskeeda.com/editor/2023/01/50009-16736185748780-1920.jpg"
					alt="img"
					class="object-contain h-auto w-auto shadow-md rounded-xl mx-auto flex justify-center"
				/>
				<h3 class="text-xl font-bold mt-2">Name</h3>
				<p class="text-xl mt-2">Result</p>
				<p class="text-lg italic mt-2">Comment</p>
			</div>
		</motion.div>
	);
}
