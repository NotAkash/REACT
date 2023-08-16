import "./ExpenseForm.css";
import React, { useState } from 'react';

function ExpenseForm(props) {

    const[userInput, setUserInput]= useState({
        setTitle: '',
        setAmount: '',
        setDate: '' 
    });
    // const[Title, setTitle] = useState('');
    // const[Amount, setAmount] = useState('');
    // const[Date, setDate] = useState('');
    
    function titleChangeHandler(event){
        // setTitle(event.target.value);
        setUserInput({
            ...userInput,
            setTitle: event.target.value
        })
    };
    function amountChangeHandler(event){
        // setAmount(event.target.value);
        setUserInput({
            ...userInput,
            setAmount: event.target.value
        })
    };
    function dateChangeHandler(event){
        // setDate(event.target.value);

        setUserInput({
            ...userInput,
            setDate: event.target.value
        })
    };

	return (
		<form>
			<div className="new-expense__control">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" onChange={titleChangeHandler}/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input type="number" onChange={amountChangeHandler} min="0.01" step="0.01" />
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input type="date" onChange={dateChangeHandler} min="2019-01-01" max="2023-12-31" />
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
}

export default ExpenseForm;
