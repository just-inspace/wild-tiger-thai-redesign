import React from "react";

export default function Grid(props) {
	let styles = {
		display: "grid",
		gridTemplateColumns: props.columns,
		gridTemplateRows: props.rows,
		justifyItems: props.justifyItems || "auto",
		alignItems: props.alignItems || "auto",
		justifyContent: props.justifyContent || "auto",
		alignContent: props.justifyContent ? props.justifyContent : "auto"
	};
	return <div style={styles}>{props.children}</div>;
}
