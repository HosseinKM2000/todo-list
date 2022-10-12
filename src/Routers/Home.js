import React , {useEffect , useContext} from 'react'


//import components
import Add from '../Components/anotherElements/Add'
import Filter from '../Components/anotherElements/Filter'
import Header from '../Components/anotherElements/Header'


//import Contexts
import TodosContext from '../Context/Todos'

//import Api
import todoApi from '../Api/todo'


//import loadings
import rainbowloading from '../loadings/rainbow.svg'

//import img
import Logon from '../img/polar-bear (1).png'








function Home(){

//States
    const  todosContext = useContext(TodosContext)
    let {dispatch,todos,login,src,loading,status} = todosContext





    useEffect(()=>{  

        dispatch({type:'true-loading',payload:{value:rainbowloading}})
        todoApi({
          method:'get',
          url:`/todos.json`
        })
        .then(response => jsonHandler(response.data))
        .catch(err => console.log('Error get todos from fireBase  =>',err))


        todoApi({
          method:'get',
          url:'/spec.json'
        })
        .then(data => jsonHandler2(data.data))
        .catch(err => console.log('Error get spec from fireBase =>', err))
                 } ,[])




//handlers              
        let jsonHandler = (data) =>{
        dispatch({type:'false-loading'})
        let todos = Object
                         .entries(data)
                         .map(([key,value])=>{
                          return {
                          ...value,
                            key
                            }
                  });
        dispatch({type:'init-todo',payload:{todos}})
        }
        
        let jsonHandler2 = (data) =>{
         let scep = Object 
                         .entries(data)
                         .map(([key,value])=>{
                          return {...value}
                          
        
                         })
                         dispatch({type:'scep-user',payload:{scep:scep[0]}})
      }



//JSX    
    return(
         <>
         <Header/>
          {
                      !login
                      ?<>
                      <span className='VPN'>If You Live In Iran , Activate Your VPN</span>
                      <div className="alert-login">
                        <h1>You Must be Login</h1>
                        <img src={Logon} alt="login"/>
                        </div>
                      </>
                      :<>
                      <Add/>
                      <div className="List-box">
                        <div className="title">
                         <div className="done">
                            <span className="text" onClick={()=>dispatch({type:'change-status',payload:{value: !status}})}>done</span>
                            <span className="badge-green">{todos.filter(item => item.done === true).length}</span>
                         </div>
                         <div className="undone">
                            <span className="text" onClick={()=>dispatch({type:'change-status',payload:{value: !status}})}>undone</span>
                            <span className="badge-grey">{todos.filter(item => item.done === false).length}</span> 
                         </div>
                       </div>
                       <div className='todos'>
                        {
                         loading
                         ? <img className="loading-gif" src={src} alt="loading"/>
                         : <Filter/>
                        }
                       </div>
                      </div>
                      </>
          }
        </>
    )
}


export default Home