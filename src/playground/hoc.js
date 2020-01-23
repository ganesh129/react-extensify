import React from 'react';
import ReactDOM from 'react-dom';


const Info=(props)=>(
    <div>
      <h1>INFO:</h1>
      <p>the info is:{props.info}</p>
    </div>
)
const WithAdminWarning=(WrappedComponent)=>{
    return (props)=>(
        <div>
        {props.isAdmin &&<p>This is private info.Please don't share</p>}
        <WrappedComponent{...props}/>
        </div>

    )
};
//requireAuthentication
const requireAuthentication=(WrappedComponent)=>{
    return (props)=>(
        <div>
        {props.isAuthenticated ?(
            <WrappedComponent {...props}/>):<p>please login to view the details</p>
        }
        </div>
    )
}
const AdminInfo=WithAdminWarning(Info);
const AuthInfo=requireAuthentication(Info);
//ReactDOM.render(<AdminInfo isAuthenticated={true} info="i m raw agent"/>,document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="i m raw agent"/>,document.getElementById('app'));