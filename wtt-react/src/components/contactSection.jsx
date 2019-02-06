import React, { Component } from "react";
class ContactSection extends Component {
	state = {};
	render() {
		return (<div id="contactSection">
			<p className="hours">HOURS</p>
			<ul id="hoursList">
				<li className="hoursItem">MON-THUR / 11-9</li>
				<li className="hoursItem">FRI / 11-10</li>
				<li className="hoursItem">SAT / 12-10</li>
			</ul>
			<div id="imageplaceholder"></div>
			<p>1825 SE 164TH AVE</p>
			<p>SUITE 101</p>
			<p>VANCOUVER, WA 98683</p>
		</div>);
	}
}

export default ContactSection;
