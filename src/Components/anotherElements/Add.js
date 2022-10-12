import React ,{ useState ,useContext }  from 'react'
import '../../styles/Add.css'
import TodosContext from '../../Context/Todos'
import todoApi from '../../Api/todo'





function Add(){
//States
  const [text , setText] = useState('')
  const todosContext = useContext(TodosContext)
  let {dispatch,blue,userName} = todosContext




//handlers
let formHnadler = (e) =>{
      e.preventDefault()

      if(text.length >= 1){
        dispatch({type:'true-loading',payload:{value:blue}})
        let todo = {text, done:false}

        todoApi({
          method:'post',
          url:'/todos.json',
          data:todo, })
        .then(response => { 
            dispatch({type:'false-loading',payload:{value:false}})
            dispatch({type:'add-todo',payload:{todo:{...todo,key:response.data.name}}})})
        .catch(err => {console.log('axiosPostError =>',err)})

        setText('')
      }  
   }





let inputHandler = e => setText(e.target.value)
   




return(
      <div className="Add-box">
        <div className='div-1'>
         <h1>Wellcome  {userName.length > 0 ? `"${userName}"` : ''}</h1>
         <span>" To get started , add some items to your list "</span>
        </div>
        <form className='div-2' onSubmit={formHnadler}>
         <input type="text" value={text} placeholder="i want to do ..." onChange={inputHandler}/>
         <button type='submit'>add</button>
        </form>
      </div>   
    )
}

export default Add