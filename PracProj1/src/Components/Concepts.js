import React from "react";
import ConceptItem from "./ConceptItem";

function Concepts(props) {
	const concepts = props.concept;
	return (
		<div>
			<ul id="concepts">
				{concepts.map((conceptItem) => (
					<ConceptItem conceptIt={conceptItem} />
				))}
			</ul>
		</div>
	);
}

export default Concepts;
