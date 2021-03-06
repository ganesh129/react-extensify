import {createStore,combineReducers,applyMiddleware, compose} from 'redux';
import expenseReducer from '../reducers/expenseReducer';
import filterReducer from '../reducers/filtersReducer';
import thunk from 'redux-thunk';

const composeEnhancers=window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default()=>{
    const store=createStore(
    combineReducers({
        expenses:expenseReducer,
        filters:filterReducer
    }),
   // composeEnhancers(applyMiddleware(thunk))
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}
