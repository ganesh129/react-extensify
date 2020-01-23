import {createStore}  from 'redux';

///const incrementCount=(payload={})=>({
   const incrementCount=({incrementBy=1}={})=>({
    type:'INCREMENT',
    incrementBy
});
const decrementCount=({decrementBy=1}={})=>({
    type:'DECREMENT',
    decrementBy
})
const setCount=({count}={})=>({
    type:'SET',
    count
})
const resetCount=()=>({
    type:'RESET'
})
//Reducers
//these are pure function:-it does not depend on global variables,variables outside function.
const CountReducer=(state={count:0},action)=>{
     switch(action.type)
    {
        case 'INCREMENT':
            //const incrementBy= typeof action.incrementBy==='number'?action.incrementBy:1;
               return {
                    count:state.count+action.incrementBy
             };
        case 'DECREMENT':
            
            return { count:state.count-action.decrementBy
            }
        case 'RESET':
            return{
                count:0
            }
        case 'SET':
            return{
                count:action.count
            }
        default:
            return state;
    }
    
   
    
   
};
const store=createStore(CountReducer);
const unsubscribe=store.subscribe(()=>{
   console.log(store.getState());
})
store.dispatch(incrementCount({incrementBy:10}))
store.dispatch(decrementCount({decrementBy:5}))
store.dispatch(resetCount());

store.dispatch(setCount({count:101}))
 