import React ,{useContext} from "react";
import loginContext from "../../Context/Login";
import {NavLink} from 'react-router-dom'
import todoApi from '../../Api/todo'





function Login(){
//States
  const LoginContext = useContext(loginContext)
  let {dispatch , login ,user} = LoginContext
  



//handlers
const toggleChange = ()=> {

     todoApi({
      method:'delete',
      url:`/spec/${user}.json`})
     .then(res => dispatch({type:'change-login',payload:{change:false}}))
     .catch(err => console.log('Error delete sign =>' ,err))
  }




//JSX
return(
        <>
         {
            login === false
            ?<NavLink to='/UserLogin' className="login-button">login</NavLink>
            :<button onClick={()=>toggleChange()} className="unlogin-button">unlogin</button> 
         }
        </> 
    )
}

export default Login