import React from "react";

export default function Menu(props) {
	return (
		<div id="menu">
			{Object.values(props.menu).map((el, index) => (
				<React.Fragment key={index}>
					<h1>{el.heading}</h1>

					{el.subheadings && el.subheadings.map((subhead_el, index) => (
						
						<h2 key={index} className="subheading">{subhead_el}</h2>
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
