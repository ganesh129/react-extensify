import {createStore , combineReducers} from 'redux';
import uuid from 'uuid';








store.subscribe(()=>{
    const state=store.getState();
    const visibleExpenses=getVisibleExpenses(state.expenses,state.filters)
    console.log(visibleExpenses);
});
const expenseOne=store.dispatch(addExpense({description:'Rent', amount:10,createdAt:70}));
const expenseTwo=store.dispatch(addExpense({description:'electricity', amount:200,createdAt:125}));

//store.dispatch(removeExpense({id:expenseOne.expense.id}));
//store.dispatch(editExpense(expenseTwo.expense.id,{amount:50}));

//store.dispatch(setTextFilter('rent'));


store.dispatch(sortByAmount());
//store.dispatch(sortByDate());

//store.dispatch(setStartDate(125));
//store.dispatch(setEndDate(1000));
const demoState={
    expenses:[{
        id:'sdhjfdg',
        description:'january Rent',
        note:'this was the final payment for this addess',
        amount:5400,
        createdAt:0
    }],
    filters:{   //by using filters we can find the expenses example-text Rent will fin if any expense related to rent
        text:'Rent',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
}

   