import React, { Component } from "react";
import TopBar from "./components/topBar";
import HomeSection from "./components/homeSection";
import MenuSection from "./components/menuSection";
import ContactSection from "./components/contactSection";

import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<TopBar />
				<HomeSection />
				<MenuSection />
				<ContactSection />
			</div>
		);
	}
}

export default App;
