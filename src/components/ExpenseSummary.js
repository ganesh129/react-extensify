import React from 'react';
import {connect} from 'react-redux';
import getVisibleExpenses from  '../selectors/expenses';
import Expensetotal from './Expenses-total';
import numeral from 'numeral';
 const ExpenseSummary=({ExpenseTotal,ExpenseCount})=>{
     return(
         <div>
         <h1>{ExpenseCount} expenses having total cost of {numeral(ExpenseTotal/100).format('$0,0.00')}</h1>
         </div>
     )
 };
 const mapStatetoProps=(state)=>{
     const visibleExpenses=getVisibleExpenses(state.expenses, state.filters);
     return{
        ExpenseCount:visibleExpenses.length,
        ExpenseTotal:Expensetotal(visibleExpenses)

 }
}
 export default connect(mapStatetoProps)(ExpenseSummary);

