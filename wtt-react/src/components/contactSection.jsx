import React, { Component } from "react";
import ImageGroup from "./imageGroup";
import Grid from "./grid";

class ContactSection extends Component {
	state = {};
	mobileRender = () => {
		return (
			<Grid 
			columns="100%"
			rows="auto">
				<div className="hours">
					<p>HOURS</p>
					<p>MON-THUR / 11-9</p>
					<p>FRI / 11-10</p>
					<p>SAT / 12-10</p>
				</div>
				<ImageGroup start={1} end={4} />
				<div className="address">
					<p>1825 SE 164TH AVE</p>
					<p>SUITE 101</p>
					<p>VANCOUVER, WA 98683</p>
					<p>(360) 882-8887</p>
				</div>
			</Grid>
		);
	};

	desktopRender = () => {
		return (
			<Grid
					columns="25% 25% 25% 25%" 
					rows="30% 30% 30%">
				<ImageGroup start={0} end={3} side="img-left-lg" />
				<ImageGroup start={0} end={3} side="img-right-lg" />
				<div className="hours hoursDesktop">
					<p>HOURS</p>
					<p>MON-THUR / 11-9</p>
					<p>FRI / 11-10</p>
					<p>SAT / 12-10</p>
				</div>
				<div className="address addressDesktop">
					<p>1825 SE 164TH AVE</p>
					<p>SUITE 101</p>
					<p>VANCOUVER, WA 98683</p>
					<p>(360) 882-8887</p>
				</div>
				</Grid>
		);
	};

	render() {
		return (
			<div id="contactSection">
			{this.props.mobile ? 					
					this.mobileRender()
			: 	
					this.desktopRender()}
			}
			</div>)
	}
}

export default ContactSection;
