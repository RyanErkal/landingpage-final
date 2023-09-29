import "./App.css";
import React from "react";
import Nav from "./components/Nav";
import Name from "./components/Name";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Packages from "./components/Packages";
import Calendly from "./components/Calendly";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App" class="">
			<Nav />
			<Name />
			<About />
			<Testimonials />
			<Packages />
			<Calendly />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
