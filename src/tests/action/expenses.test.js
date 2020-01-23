import {addExpense,editExpense,removeExpense} from '../../actions/expenses';

test('setup remove expense',()=>{
    const action=removeExpense({id:'123ab'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123ab'
    })
});
test('set up edit expense',()=>{
    const action=editExpense('123ab',{note:'hi there i am editing expense'});
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'123ab',
        updates:{
                
            note:'hi there i am editing expense'
        }
      
    })
});

test('adding expense with provided values set up',()=>{
    const expenseData={
        description:'ganesh',
        note:'hello there',
        amount:1000,
        createdAt:112
    }
    const action=addExpense(expenseData);
    expect(action).toEqual(
        {
            type:'ADD_EXPENSE',
            expense:{
                ...expenseData,
                id:expect.any(String)
            }
        }
    )
});
test('add expense with default values',()=>{
    const action=addExpense();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            id:expect.any(String),
            description:'',
            note:'',
            amount:0,
            createdAt:0
        }
    })
})