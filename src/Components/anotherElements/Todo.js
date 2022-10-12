import React , {useState , useContext} from "react";
import '../../styles/Todo.css' 
import Edit from './Edit'
import TodosContext from "../../Context/Todos";
import todoApi from '../../Api/todo'





function List(props){
//States
  const [edite , setEdite] = useState(false)
  const todosContext = useContext(TodosContext)
  let {dispatch , red , yellow , green , orange} = todosContext
  let {item} = props
  



//handlers
let editHandler = (text)=>{
        dispatch({type:'true-loading',payload:{value:yellow}});

        todoApi.put(`/todos/${item.key}.json`,{done:item.done,text})
         .then(response => {
           dispatch({type:'false-loading'})
           dispatch({type:'edit-todo',payload:{key:item.key,text}})})
         .catch(err => console.log('axiosPuterror (for edit) =>' , err))

        setEdite(false)
    }





let doneHandler = ()=>{
      dispatch({type:'true-loading',payload:{value:green}})
      todoApi.put(`/todos/${item.key}.json`,{done: true,text:item.text})
       .then(response => {
         dispatch({type:'false-loading'})
         dispatch({type:'true-done',payload:{key:item.key}})})
       .catch(err => console.log('axiosPutError (for done) =>' , err))
    }





let undoneHandler = ()=>{
      dispatch({type:'true-loading',payload:{value:orange}})
      todoApi.put(`/todos/${item.key}.json`,{done: false,text:item.text})
       .then(response => {
         dispatch({type:'false-loading'})
         dispatch({type:'false-done',payload:{key:item.key}})})
       .catch(err => console.log('axiosPutError (for undone) =>' , err))
    }





let deleteHandler = (e)=>{
      dispatch({type:'true-loading',payload:{value:red}});

      todoApi({
          method:'delete',
          url:`/todos/${item.key}.json`})
       .then(Response => {
          dispatch({type:'false-loading'})
          dispatch({type:'delete-todo',payload:{key:item.key}});})
       .catch(err => console.log('axiosDeleteErroe =>' ,err))
    }




//JSX    
return(
       <>
        {
          ! edite
          ?(
            <div className="todo">
            <p>{item.text}</p>
            <div>
                {
                  !item.done
                  ?<button className={`doneUndone done_`} style={{backgroundColor:`rgb(0, 218, 0)`}}  onClick={() => doneHandler()}>done</button>
                  :<button className={`doneUndone undone_`} style={{backgroundColor:`rgb(209, 136, 0)`}}  onClick={() =>undoneHandler()}>undone</button>
                }
                <button className='edit' onClick={()=>setEdite(true)}>edit</button>
                <button className='delete' onClick={()=>deleteHandler()}>delete</button>
            </div>
           </div>
          )
          : <Edit item={item} Edite={editHandler}/>
        }
       </>
    )
}

export default List