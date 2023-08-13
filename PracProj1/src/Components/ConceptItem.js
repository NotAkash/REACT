import React from "react";

function ConceptItem(props) {
	console.log(props);
	const item = props.conceptIt;

	return (
		<div>
			<li className="concept">
				<img src={item.image} alt={item.description} />
				<h2>{item.title}</h2>
				<p>{item.description}</p>
			</li>
		</div>
	);
}

export default ConceptItem;
