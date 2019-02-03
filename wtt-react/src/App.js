import React, { Component } from "react";
import logo from "./logo.svg";
import TopBar from "./components/topBar";
import HomeSection from "./components/homeSection";
import MenuSection from "./components/menuSection";
import ContactSection from "./components/contactSection";
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
