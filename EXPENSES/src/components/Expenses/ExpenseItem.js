import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
	const [title, setTitle] = useState(props.expense.title);

	function clickHandle() {
		setTitle("Update");
	}

	return (
		<Card className="expense-item">
			<ExpenseDate date={props.expense.date} />
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">
					${props.expense.amount}
				</div>
			</div>
			<button onClick={clickHandle}>Change Title</button>
		</Card>
	);
}

export default ExpenseItem;
