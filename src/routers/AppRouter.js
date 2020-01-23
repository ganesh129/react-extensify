import React from 'react';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensepage';
import EditExpensePage from  '../components/EditExpensePage';
import NotFound from  '../components/NotFoundPage';
import Header from '../components/Header';
import { BrowserRouter, Route, Switch, Link,NavLink} from'react-router-dom';


const AppRouter=()=>(
    <BrowserRouter>
    <div>
    <Header/>
    <Switch>
     <Route path="/" component={ExpenseDashboardPage} exact={true}></Route> 
     <Route path="/create" component={AddExpensePage}></Route>  
     <Route path="/edit/:id" component={EditExpensePage}></Route> 
     <Route component={NotFound}></Route>
    </Switch>
    </div>
    
    </BrowserRouter>
)
export default AppRouter;