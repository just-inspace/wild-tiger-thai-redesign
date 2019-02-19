import React, { Component } from "react";
import TopBar from "./components/topBar";
import HomeSection from "./components/homeSection";
import MenuSection from "./components/menuSection";
import ContactSection from "./components/contactSection";

import "./App.css";

/**
 * @class App
 * @extends {Component}
 *
 * STATE
 * 	mobile: cause updates based on screen size changes
 *
 * HANDLERS:
 * 	handleResizeForMobile => adjust state {mobile} based on window.innerWidth
 *
 * LIFECYCLE METHODS:
 * 	componentDidMount => add event listener for "resize", bind to handleResizeForMobile
 *
 * CHILD COMPONENTS:
 * 	TopBar
 * 	HomeSection
 * 	MenuSection
 * 	ContactSection
 */
class App extends Component {
	constructor() {
		super();
		this.state = {
			mobile: window.innerWidth <= 800 ? true : false
		};
	}

	handleResizeForMobile() {
		window.innerWidth > 800 &&
			this.state.mobile &&
			this.setState({ mobile: false });
		window.innerWidth <= 800 &&
			!this.state.mobile &&
			this.setState({ mobile: true });
	}

	componentDidMount() {
		window.addEventListener(
			"resize",
			this.handleResizeForMobile.bind(this)
		);
	}

	componentWillUnmount() {
		window.removeEventListener(
			"resize",
			this.handleResizeForMobile.bind(this)
		);
	}

	render() {
		const { mobile } = this.state;
		return (
			<div className="App">
				<TopBar mobile={mobile} />
				<HomeSection mobile={mobile} />
				<MenuSection animate={true} mobile={mobile} />
				<ContactSection mobile={mobile} />
			</div>
		);
	}
}

export default App;
