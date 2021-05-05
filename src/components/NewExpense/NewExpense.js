import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"



const NewExpense = (props)=>{
    const saveExpenseDataHandeler = (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandeler}></ExpenseForm>
        </div>
    );
}

export default NewExpense;