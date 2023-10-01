import React from "react";
import { motion } from "framer-motion";

export default function Testimonial({ img, name, result, comment }) {
	return (
		<motion.div
			class="p-6 bg-gray-100 text-gray-800 rounded-xl shadow-xl w-full"
			whileHover={{ scale: 1.05 }}
			transition={{ type: "spring", dampening: 15, stiffness: 100 }}>
			<div class="flex flex-col">
				<img
					src={img}
					alt="img"
					class="object-fill h-3/4 w-auto shadow-md rounded-xl mx-auto flex justify-center"
				/>
				<h3 class="text-xl font-bold mt-2">{name}</h3>
				<p class="text-xl mt-2">{result}</p>
				<p class="text-lg italic mt-2">{comment}</p>
			</div>
		</motion.div>
	);
}
