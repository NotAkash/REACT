import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";


function ExpenseItem(props) {
    let title = props.expense.title;
    function clickHandle() {
        title = 'updated!'
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
