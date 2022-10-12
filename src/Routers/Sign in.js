import React , {useContext,useState} from "react"
import '../styles/UserLogin.css'
import {useNavigate} from 'react-router-dom'
import loginContext from "../Context/Login"

//import img
import facebook from '../img/facebook.png'
import google from '../img/google.png'
import twitter from '../img/twitter.png'
import User from '../img/account.png'
import Password from '../img/lock.png'
import Email from '../img/email.png'
import Eskimo from '../img/igloo.png'
import Loader from '../loadings/sign--.svg'

import todoApi from '../Api/todo'








export default function Sign(){

//States
    const [signState,setSignState] = useState({
        spec:{
            userName:'',
            email:'',
            password:'',
            status:true,
        },
    })

    const [loading,setLoading] = useState({
        status:false
    })

    const [errors , setError] = useState({
        validateErrors:{
            userNameError :'',
            emailError:'',
            passwordError:''
        }
    })


//formValidate    
   let helpValidate = () => {
      const u = signState.spec.userName;
      const e = signState.spec.email;
      const p = signState.spec.password;
  
switch(true){
    case (e.length === 0) :
        return setError(prev=>{
            return{
                validateErrors:{
                  ...prev.validateErrors,
                  emailError : "please enter your email !"
                }
            }
        });
    case (e.charAt(0) === '@' || !e.includes('@')):
        return setError(prev=>{
            return{
                validateErrors:{
                  ...prev.validateErrors,
                  emailError : "your email not validate !"
                }
            }
        });
    case (u.length === 0) :
        return setError(prev=>{
            return{
                validateErrors:{
                  ...prev.validateErrors,
                  userNameError : "please enter userName !"
                }
            }
        });
        case (p.length === 0):
            return setError(prev=>{
                return{
                    validateErrors:{
                      ...prev.validateErrors,
                      passwordError : "please enter password !"
                    }
                }
    });
    case (p.length < 4 && p.length > 0):
        return setError(prev=>{
            return{
                validateErrors:{
                  ...prev.validateErrors,
                  passwordError : "your password is litle !"
                }
             }
         });
    default : return sendData()
}
}   

 console.log(signState.spec.email.charAt('@'))





//Contexts
    const LoginContext = useContext(loginContext)
    let {dispatch} = LoginContext;
    let navigate = useNavigate()







//handlers
    let changeUserName = (e)=>{
       setSignState(prev=>{
          return{
            spec:{
                ...prev.spec,
                userName:e.target.value
            }
          }     
       })
    }

    let changeEmail = (e)=>{
        setSignState(prev=>{
           return{
             spec:{
                 ...prev.spec,
                 email:e.target.value
             }
           }     
        })
     }

     let changePassword = (e)=>{
        setSignState(prev=>{
           return{
             spec:{
                 ...prev.spec,
                 password:e.target.value
             }
           }     
        })
     }

     let sendData = ()=>{
        setError({
            validateErrors:{
                userNameError :'',
                emailError:'',
                passwordError:''
            }
        })
        setLoading({
            status:true
        })

         todoApi({
            method:'post',
            url:'/spec.json',
            data:signState.spec
         }).then(res=> {
            dispatch({type:'change-login',payload:{data:res.data.name}})
            setTimeout(()=>{
                setLoading({
                    status:false
                })
                navigate('/')
            },2000)
         })
           .catch(err=> console.log('Error send userData',err))
     }






//JSX
    return(
        <>
         <div className="box-1">
          <div className="background">
          </div>   
         </div>
         <div className="box-2">
          <div className="form-box">
            <div className="User-Logo">
                <img src={Eskimo} alt="eskimo"/>
            </div>
            <h1>Sign in</h1>
            <span className="formError">{errors.validateErrors.userNameError}</span>
            <div  className="userName">
             <img className="img" src={User} alt="UserName"/>
             <input type="text" onChange={changeUserName}  placeholder="UserName" className="input"/>
            </div>
            <span className="formError">{errors.validateErrors.emailError}</span>
            <div className="email">
             <img className="img" src={Email} alt="email"/>
             <input type="email" onChange={changeEmail}  placeholder="Email" className="input"/>
            </div>
            <span className="formError">{errors.validateErrors.passwordError}</span>
            <div className="password">
             <img className="img" src={Password} alt="password"/>
             <input type="password" onChange={changePassword} placeholder="Password"className="input"/>
            </div>
             {
             loading.status
              ?<button className="login-button-1"><img className="loader-use" src={Loader} alt='loader'/></button>
              :<button onClick={helpValidate}   className="login-button-1">login</button>
             }
            <div className="remember">
             <input type="checkbox"/>
             <span>remember me</span>
            </div>
            <div className="socalMedia">
                <div><img src={facebook} alt="facebook"/></div>
                <div><img src={twitter} alt="twitter"/></div>
                <div><img src={google} alt="google"/></div>
            </div>
          </div> 
         </div> 
        </>
    )
 }