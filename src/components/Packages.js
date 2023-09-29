import React from "react";
import { motion } from "framer-motion";
import Package from "./Package";

export default function Packages() {
	return (
		<div
			id="packages"
			class="h-content min-h-screen p-6 lg:p-12 bg-gray-600 flex flex-col justify-center items-center text-center">
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
				<h1 class="text-3xl font-bold text-green-400 mb-6">Packages</h1>
				<div class="grid grid-cols-1 gap-6 lg:grid-cols-3 w-full">
					<Package
						package="Lifestyle"
						price="£150 / month"
						perks={[
							"Weekly Loom Video Feedback",
							"Bespoke Training & Nutrition Plan",
							"Supplement Advice",
							"Monthly Zoom Call"
						]}
						link="https://buy.stripe.com/3cs4jp9Ws4JJ5OMbJf"
					/>
					<Package
						package="Competitor"
						price="£250 / month"
						perks={[
							"Everything in Lifestyle Package",
							"Competition & Offseason",
							"24/7 WhatsApp Support",
							"PED Advice"
						]}
						link="https://buy.stripe.com/14k4jpc4A0ttb9600w"
					/>
					<Package
						package="Mentorship"
						price="£350 / month"
						perks={[
							"Everything in Competitor Package",
							"Weekly Zoom Call",
							"Access to Education Hub",
							"Content Strategy"
						]}
						link="https://buy.stripe.com/6oE5nt0lS7VV6SQ00y"
					/>
				</div>
			</motion.div>
		</div>
	);
}
