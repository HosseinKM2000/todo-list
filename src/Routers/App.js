import React ,{useReducer , lazy , Suspense} from "react";
import '../styles/App.css'
import {Route,Routes} from 'react-router-dom'


//import page 404
import Error404 from "../Components/404";

//import wait loading
import Waiting from "../Components/anotherElements/waiting";


//import loadings
import addLoading from '../loadings/blue.svg'
import deleteLoading from '../loadings/red.svg'
import editeLoading from '../loadings/yellow.svg'
import doneLoading from '../loadings/green.svg'
import undoneLoading from '../loadings/orange.svg'




//import Contexts
import TodosContext from '../Context/Todos'
import LoginContext from "../Context/Login";

//import Reducers
import AppReducer from "../Reducers/AppReducer";


//import Routers
import Home from './Home'
const Sign = lazy(()=> import('./Sign in'));








function App(){

//States
  const [state,dispatch] = useReducer(AppReducer,{
    todos :[],
    login :false,
    status:false,
    loading:false,
    src:'',
    user:'',
    scep:{},
})


 

console.log(state.scep.userName)


//JSX
  return (
    <LoginContext.Provider value={{
      login:state.login,
      dispatch,
      user:state.user
    }}>
     <TodosContext.Provider value={{
      todos:state.todos,
      status :state.status,
      login:state.login,
      dispatch,
      blue:addLoading,
      red:deleteLoading,
      yellow:editeLoading,
      green:doneLoading,
      orange:undoneLoading,
      loading:state.loading,
      src:state.src,
      userName:state.scep.userName,
     }}>
        <div className="container">
         <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/UserLogin" element={
            <Suspense fallback={<Waiting/>}>
              <Sign/>
            </Suspense>
           }/>
           <Route path="*" element={
            <Suspense fallback={<Waiting/>}>
              <Error404/>
            </Suspense>
           }/>
         </Routes>
     </div>
    </TodosContext.Provider>
  </LoginContext.Provider>
  )
}


export default App