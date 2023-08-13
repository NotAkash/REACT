import "./Expenses.css";
import ExpenseItem from "./ExpenseItem.js";
import Card from "../UI/Card";

function Expenses(props) {
    const expense = props.expense;
    return (
        <Card className="expenses">
            {expense.map((expenseItems) => (
                <ExpenseItem expense={expenseItems}> </ExpenseItem>
            ))}
        </Card>
    );
}

export default Expenses;
