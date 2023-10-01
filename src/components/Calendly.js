import React from "react";
import { motion } from "framer-motion";
import { InlineWidget } from "react-calendly";

export default function About() {
	return (
		<div
			id="projects"
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
					Book a Call
				</h1>
				<div class="w-full h-full">
					<InlineWidget url="https://calendly.com/ryanerkal/team-lvlup-formal-consultation-call" />
				</div>
			</motion.div>
		</div>
	);
}
