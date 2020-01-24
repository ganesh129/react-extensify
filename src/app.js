import React from'react';
import ReactDOM from'react-dom';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import AppRouter from'./routers/AppRouter';
import {addExpense} from './actions/expenses';
import expenseReducer from './reducers/expenseReducer';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import moment from 'moment';




const store=configureStore();

//  store.dispatch(addExpense({description:'water bill',amount:150,createdAt:0}));
//  store.dispatch(addExpense({description:'gas bill',createdAt:2020}));
//  store.dispatch(addExpense({description:'Rent',amount:10000}));
//store.dispatch(setTextFilter('bill'));

const state=store.getState();
console.log(getVisibleExpenses(state.expenses,state.filters));
console.log(state);
const jsx=
    (
    <div>
    <Provider store={store}>
    <AppRouter/>
    </Provider>
    </div>

)
ReactDOM.render(jsx,document.getElementById('app'));
