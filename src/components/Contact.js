import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
	const form = useRef();

	function handleSubmit(e) {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_6orx78n",
				"template_1rzq894",
				form.current,
				"XtjU2O84q0v4ZQVVz"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		form.current.reset();
		alert("Message sent!");
	}

	return (
		<div
			id="contact"
			class="h-screen bg-gray-600 flex justify-center items-center text-center">
			<motion.div
				class="text-xl w-5/6 sm:w-4/6 max-w-2xl flex flex-col justify-center items-center text-center"
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
				<h1 class="text-3xl font-bold text-green-400 mb-6">Contact</h1>
				<form
					ref={form}
					class="flex flex-col justify-center items-center text-center w-full px-6"
					onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Full Name"
						name="user_name"
						class="bg-gray-200 text-gray-800 caret-green-400 w-full p-4 mb-4 border-none focus:outline-none focus:ring focus:ring-green-400 rounded-xl"
					/>
					<input
						type="email"
						placeholder="Email"
						name="user_email"
						class="bg-gray-200 text-gray-800 caret-green-400 w-full p-4 mb-4 border-none focus:outline-none focus:ring focus:ring-green-400 rounded-xl"
					/>
					<textarea
						placeholder="Message"
						name="message"
						class="bg-gray-200 text-gray-800 caret-green-400 w-full p-4 mb-4 border-none focus:outline-none focus:ring focus:ring-green-400 rounded-xl"
					/>
					<button class="bg-gray-400 hover:bg-green-300 hover:text-gray-600 px-3 py-2 rounded-xl text-white font-bold transition-all">
						Send
					</button>
				</form>
			</motion.div>
		</div>
	);
}
