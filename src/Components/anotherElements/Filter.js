import React , {useContext} from "react";
import TodosContext from '../../Context/Todos';
import Todo from './Todo';





function Filter(props){
//States
  const todosContext = useContext(TodosContext);
  let {todos,status} = todosContext




//methods
let filterTodo = todos.filter(item => item.done === status )
    filterTodo.reverse()




//JSX
return(
        filterTodo.length === 0
        ? <p>there is not any todos !!!</p>
        :filterTodo.map(item=><Todo item={item}/>)
     )
}

export default Filter