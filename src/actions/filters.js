export const setTextFilter=(text='')=>({
    type:'SET_TEXT',
    text

});
export const sortByAmount=()=>({
    type:'SORT_BY_AMOUNT'
});
export const sortByDate=()=>({
    type:'SORT_BY_DATE'
})
export const setStartDate=(startdate='undefined')=>({
    type:'SET_START_DATE',
    startdate

})
export const setEndDate=(enddate)=>({
    type:'SET_END_DATE',
    enddate

})