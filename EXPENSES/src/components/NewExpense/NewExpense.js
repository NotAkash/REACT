import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import "./NewExpense.css"

function NewExpense(props) {
    return(
        <div className='new-expense'>
            <ExpenseForm></ExpenseForm>
        </div>
    )
};


export default NewExpense;