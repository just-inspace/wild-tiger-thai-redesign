import React, { Component } from "react";

class Menu extends Component {
	state = {};

	render() {
		return (
			<div id="menu">
				{Object.values(this.props.menu).map((el, index) => (
					<React.Fragment key={index}>
						<h1>{el.heading}</h1>

						{el.subheadings &&
							el.subheadings.map((subhead_el, index) => (
								<h2 key={index} className="subheading">
									{subhead_el}
								</h2>
							))}
						{el.items.map((sub_el, i) => (
							<React.Fragment key={i}>
								<h3>{sub_el.name}</h3>
								<p>{sub_el.description}</p>
							</React.Fragment>
						))}
					</React.Fragment>
				))}
			</div>
		);
	}
}

export default Menu;
