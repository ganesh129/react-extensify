import moment from 'moment';
import filterReducer from '../../reducers/filtersReducer';
test('should set up default filter values',()=>{
    const state=filterReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    })
});
test('shouls set sortBy to amount',()=>{
    const state=filterReducer(undefined,{type:'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
})
test('shouls set sortBy to date',()=>{
    const state=filterReducer(undefined,{type:'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
});
test('should set up text ',()=>{
   const text='rahul';
    const action={
        type:'SET_TEXT',
        text
    };
   const state=filterReducer(undefined,action);
   expect(state.text).toBe(text)
});
test('should set up startDate ',()=>{
    const startDate=moment();
     const action={
         type:'SET_START_DATE',
         startDate
     };
    const state=filterReducer(undefined,action);
    expect(state.startDate).toEqual(startDate)
 });
 test('shouls setup end date',()=>{
     const endDate=moment();
     const action={
         type:'SET_END_DATE',
         endDate
     }
     const state=filterReducer(undefined,action);
     expect(state.endDate).toEqual(endDate);
 })