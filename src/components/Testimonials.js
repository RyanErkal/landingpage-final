import React from "react";
import { motion } from "framer-motion";
import Testiomnial from "./Testimonial";

export default function Testimonials() {
	return (
		<div
			id="testimonials"
			class="h-content min-h-screen p-6 lg:p-12 bg-gray-700 flex flex-col justify-center items-center text-center">
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
				<h1 class="text-3xl font-bold text-green-400 mb-6">
					Testimonials
				</h1>
				<div class="grid grid-cols-1 gap-6 lg:grid-cols-3 w-full">
					<Testiomnial />
					<Testiomnial />
					<Testiomnial />
				</div>
			</motion.div>
		</div>
	);
}
