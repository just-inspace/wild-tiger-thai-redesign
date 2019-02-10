import React, { Component } from "react";

class PageLinks extends Component {
	render() {
		let classes = this.props.show ? "display " : " ";
		classes += this.props.mobile ? "mobileNav" : "desktopNav";
		return (
			<div id="pagelinks" className={classes}>
				<button onClick={this.props.click} value="#homeSection">
					Home
				</button>
				<button onClick={this.props.click} value="#menuSection">
					Menu
				</button>
				<button onClick={this.props.click} value="#contactSection">
					Contact
				</button>
			</div>
		);
	}
}

export default PageLinks;
