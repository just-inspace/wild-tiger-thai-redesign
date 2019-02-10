import React, { Component } from "react";
import Transition from "react-transition-group/Transition";

class Menu extends Component {
	state = {};

	render() {
		const defaultStyles = {
			transition: `opacity 250ms ease-in-out`,
			opacity: 0
		};
		const transitionStyles = {
			entering: { opacity: 0 },
			entered: { opacity: 1 }
		};
		return (
			<Transition in={this.props.toggle} timeout={0} appear>
				{state => (
					<div
						id="menu"
						style={{ ...defaultStyles, ...transitionStyles[state] }}
					>
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
				)}
			</Transition>
		);
	}
}

export default Menu;
