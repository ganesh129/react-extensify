import React from'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            description:props.expense?props.expense.description:'',
            note:props.expense?props.expense.note:'',
            amount:props.expense?((props.expense.amount)/100).toString():'',
            createdAt:props.expense?moment(props.expense.createdAt):moment(),
            calenderFocused:false,
            error:''
        }
    }
    onDescriptionChange=(e)=>{
        const description=e.target.value;
        this.setState(()=>({description}));
    }
    onNoteChange=(e)=>{
        const note=e.target.value;
        this.setState(()=>({note}));
    }
    onAmountChange=(e)=>{
        const amount=e.target.value;
        if(amount.match(/^\d*(\.\d{0,2})?$/))
        this.setState(()=>({amount}))
    };
    onDateChange=(createdAt)=>{
        if(createdAt)
        {
            this.setState(()=>({createdAt}));
        }
    };
    onFocusChange=({focused})=>{
        this.setState(()=>({calenderFocused:focused}))

    };
    onSubmit=(e)=>{
        e.preventDefault();
        if(!this.state.description||!this.state.amount)
        {  
           this.setState(()=>({
                error:'please provide description and amount'
           }))
        }
        else
        {
            this.setState(()=>({error:''}));
            //now we r setting up for data to be sent upwards..when form called it can provide these values
            //to that component
            this.props.onSubmit({
                description:this.state.description,
                amount:parseFloat(this.state.amount,10)*100,
                note:this.state.note,
                createdAt:this.state.createdAt.valueOf()
            });
        }
    };
    render(){
        return(
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.onSubmit}>
            <input value={this.state.description}
            onChange={this.onDescriptionChange}
            type="text" name="description" placeholder="description" autoFocus/>

            <input value={this.state.amount}
            onChange={this.onAmountChange}
            type="text" placeholder="amount"/>

            <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calenderFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={()=>false}
            >
            </SingleDatePicker>

            <textarea  value={this.state.note}
            onChange={this.onNoteChange}
            placeholder="Add a note for this expense"/>
            <button>Add Expense</button>
            </form>
            </div>
        )
    }
}