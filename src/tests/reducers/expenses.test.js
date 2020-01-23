import expenseReducer from '../../reducers/expenseReducer';
import moment from 'moment';
test('should set up deefault expense values',()=>{
    // const expensedefaultvalue={
    //     description:'',
    //     note:'',
    //     amount:0,
    //     createdAt:0
    // };
    const state=expenseReducer(undefined,{type:"@@INIT"});
    expect(state).toEqual([]);
});
//array of expenses
const expenses=[{
    id:'1',
    description:'electricity',
    note:'bill of january',
    amount:195,
    createdAt:0
    },
    {id:'2',
    description:'rent',
    note:'rent of january',
    amount:1200,
    createdAt:moment(0).subtract(4,'days').valueOf()
    
    },
    {id:'3',
    description:'wifi',
    note:'wifi balance',
    amount:20000,
    createdAt:moment(0).add(4,'days').valueOf()
    
    }
    ];

test('should remove expense by id',()=>{
    const action={
        type:'REMOVE_EXPENSE',
        id:expenses[1].id
    };
    const state=expenseReducer(expenses,action)
    expect(state).toEqual(
        [expenses[0],expenses[2]]
    )
});
test('should not remove if id not matched',()=>{
    const action={
        type:'REMOVE_EXPENSE',
        id:'-1'
    };
    const state=expenseReducer(expenses,action)
    expect(state).toEqual(
        [expenses[0],expenses[1],expenses[2]]
    )
    
})
test('should add an expense',()=>{
    const expense={
        id:'109',
        description:'ganesh',
        note:'good',
        amount:101,
        createdAt:1
    }
    const action={
        type:'ADD_EXPENSE',
        expense

    }
    const state=expenseReducer(expenses,action);
    expect(state).toEqual([...expenses, expense]);
})
 test('should edit by id',()=>{
     const amount=12222;
    
     const action={
         type:'EDIT_EXPENSE',
         id:expenses[1].id,
         updates:{
             amount
         }
         
     }
     const state=expenseReducer(expenses,action);
     expect(state[1].amount).toBe(amount);
 });
 test('should not edit if id not matched',()=>{
    const amount=12222;
   
    const action={
        type:'EDIT_EXPENSE',
        id:'-1',
        updates:{
            amount
        }
        
    }
    const state=expenseReducer(expenses,action);
    expect(state[1].amount).not.toBe(amount);
});
