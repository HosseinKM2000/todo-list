import React ,{Component} from "react";
import '../../styles/Todo.css'
import TodoContext from '../../Context/Todos'





class Edit extends Component{
//States
  state ={
        text : this.props.item.text
         }
    constructor(props){
        super(props)
        this.props = props
    }



  static contextType = TodoContext;




//handlers
inputHandler(e){
        this.setState({
            text: e.target.value
        })
    }




//JSX
render(){
        return(
                    <div className="todo">
         <input style={{backgroundColor:'grey' , border:'none', color:'whitesmoke'}} value={this.state.text} onChange={this.inputHandler.bind(this)} type="text"/>
         <div>
            <button className='edit' onClick={()=> this.props.Edite(this.state.text)}>edit</button>
         </div>
       </div>
        )
      }
}

export default Edit