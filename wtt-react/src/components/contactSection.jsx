import React, { Component } from "react";
import ImageGroup from "./imageGroup";

class ContactSection extends Component {
	state = {};
	render() {
		return (
			<div id="contactSection">
				<div className="hours">
					<p>HOURS</p>
					<ul id="hoursList">
						<li>MON-THUR / 11-9</li>
						<li>FRI / 11-10</li>
						<li>SAT / 12-10</li>
					</ul>
				</div>
				<ImageGroup start={1} end={4} />
				<div className="address">
					<p>1825 SE 164TH AVE</p>
					<p>SUITE 101</p>
					<p>VANCOUVER, WA 98683</p>
				</div>
			</div>
		);
	}
}

export default ContactSection;
