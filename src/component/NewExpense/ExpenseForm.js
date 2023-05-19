import React, {useState} from "react";
import './ExpenseForm.css'
 
const ExpensForm = ( ) =>
{ 
    //const [enteredTitle,setEnteredTitle] = useState('');
   // const [enteredAmount,setEnteredAmount] = useState('');
    //const [enteredDate,setEnteredDate] = useState('');
    const [userInput , setUserInput] = useState({
        enterdTitle: '',
        enterdAmount: '',
        enterdDate: ''
    })
    const titleChangeHandler = (event) =>
    {
        //setEnteredTitle(event.target.value);
        setUserInput({
            ...userInput,
            enterdTitle: event.target.value,
        });
    }; 
    const amountChangeHandler = (event) =>
    {
        // setEnteredAmount(event.target.value);
        setUserInput({
            ...userInput,
            enterdAmount: event.target.value,
        });
    }
    const dateChangeHandler = (event) =>{
       // setEnteredDate(event.target.value);
       setUserInput({
        ...userInput,
        enterdDate: event.target.value,
    });
    }
 
    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>enteredTitle</label>
                <input type="text" onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>enteredAmount</label>
                <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>enteredDate</label>
                <input type="date" min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler} />
            </div>
            <div className="new-expense__actions">
                 <button type="submit ">Add Expense</button>
            </div>
        </div>
    </form>
}

export default ExpensForm ;