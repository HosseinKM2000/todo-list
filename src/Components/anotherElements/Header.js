import React from "react";

//import components
import Login from './Login'

//import images
import Snow from '../../img/snowflake.png'





function Header(){





//JSX
return(
    <>
    <header>
    <div>
     <img src={Snow} alt="React"/>
     <h1>TodoApp</h1>
    </div> 
    <div class='login-box'>
     <Login/>
    </div>
   </header>
    </>
  )
}

export default Header