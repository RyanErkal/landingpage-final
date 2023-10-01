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
					<Testiomnial
						img={
							"https://staticg.sportskeeda.com/editor/2023/01/50009-16736185748780-1920.jpg"
						}
						name={"Cbum"}
						result={"4 x Classic Mr. Olympia"}
						comment={"Going for 5 x Classic Mr. Olympia"}
					/>
					<Testiomnial
						img={
							"https://cdn.sportsmanor.com/wp-content/uploads/2023/01/26200351/Untitled-design-3-2-1140x597.jpg"
						}
						name={"Arnold Schwarzenegger"}
						result="7x Mr. Olympia"
						comment="Get to the choppa!"
					/>
					<Testiomnial
						name="Ronnie Coleman"
						result="8x Mr Olympia"
						comment="Yeah buddy!"
						img="https://staticg.sportskeeda.com/editor/2022/09/72c55-16642722942984-1920.jpg"
					/>
				</div>
			</motion.div>
		</div>
	);
}
