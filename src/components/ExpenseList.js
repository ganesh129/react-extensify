import React from 'react';
import{connect} from 'react-redux';
import ExpenseListItem from './ExpenseLisItem';
import getVisibleExpenses from '../selectors/expenses';

const ExpenseList =(props)=>{
    console.log("props",props);
    return(
    <div>
  
     <h1>ExpenseList</h1>
     {props.expenses.length}
     {props.expenses.map((expense)=>{
      
         return <ExpenseListItem {...expense} key={expense.id}/>
     })}
    </div>
   
)};

const mapStatetoProps=(state)=>{
    console.log("mspin expenselist",state);
    return {
        //expenses:state.expenses, //insted of this we can call selectExpenses Here
       expenses:getVisibleExpenses(state.expenses, state.filters)
        //filters:state.filters
    }
}
export default connect(mapStatetoProps)(ExpenseList);