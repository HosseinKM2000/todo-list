import todoApi from '../Api/todo'


function AppReducer(state,action){

    switch(action.type){

        case 'add-todo':
             return addTodos(state,action);
        

        case 'delete-todo':
             return deleteTodos(state,action);
        

        case 'edit-todo':
             return editTodos(state,action);
        

        case 'true-done':
             return trueDone(state,action);
               
             
        case 'false-done':
             return falseDone(state,action);
            

        case 'change-login':
             return changeLogin(state,action);
            

        case 'change-status':
             return changeStatus(state,action)  
             
        case 'init-todo':
            let {todos} = action.payload
            return{
               ...state,
               todos

            }

        case 'scep-user':
           let {scep} = action.payload
           return{
              ...state,
              login:scep.status,
              scep:scep
           }

        case 'true-loading' :
            let {value} = action.payload
             return{
              ...state,
              src: value,
              loading:true
             }

        case 'false-loading' : 
             return{
              ...state,
              loading : false
             }

            

        default:
             return state;
            

    }

}

export default AppReducer






//methods
let addTodos = (state,action) => {

     let {todo} = action.payload
    
         return{
          ...state,
          todos : [
              ...state.todos,
              todo
          ],
         }  
  }
  
let  deleteTodos = (state,action) => {
      
    let {key} = action.payload

        return{
          ...state,
          todos : state.todos.filter(item => item.key !== key)  
        }
  }

let editTodos = (state , action) => {
    let {todos} = state;
    let {key , text} = action.payload;
  
    let item = todos.find(item =>item.key === key)
    item.text = text
  
    let newTodos = todos.filter(item => item.key !== key)
  
    return{
      ...state,
      todos :[
        ...newTodos,
        item
      ]
    }
  }

let trueDone = (state,action) => {
  
    let {key} = action.payload

    let item = state.todos.find(item =>item.key === key)
    item.done = true;
  

    let newTodos = state.todos.filter(item => item.key !== key)

    return{
      ...state,
      todos :[
        ...newTodos,
        item
      ]
    }
  
  } 
  
  let falseDone = (state,action) => {
  
    let {key} = action.payload

    let item = state.todos.find(item =>item.key === key)
    item.done = false;
  

    let newTodos = state.todos.filter(item => item.key !== key)
    
    return{
      ...state,
      todos :[
        ...newTodos,
        item
      ]
    }
  
  }
  
let changeLogin = (state,action) => {
    
    let {data} = action.payload;
    
     return{
      ...state,
      user:data,
      login:false
     }

  }

let changeStatus = (state,action) => {
    
    let {value} = action.payload

    return{
        ...state,
        status:value
    }
}