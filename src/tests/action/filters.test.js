import {setTextFilter,setStartDate,setEndDate, sortByDate,sortByAmount} from '../../actions/filters';
import moment from 'moment';

test('testing set up text filter',()=>{
  const action=setTextFilter('ganesh');
  expect(action).toEqual({
      type:'SET_TEXT',
      text:'ganesh'
  })
});
test('set up start date',()=>{
    const action=setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        startdate:moment(0)
    });
});
test('set up end date',()=>{
    const action=setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        enddate:moment(0)
    })
});
test('set text filter object with default',()=>{
    const action=setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT',
        text:''
    })
});
test('should generate action object for sort by date',()=>{
    const action=sortByDate();
    expect(action).toEqual({
        type:'SORT_BY_DATE'
    })
});
test('should generate action object for sort by AMOUNT',()=>{
    const action=sortByAmount();
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
    })
})