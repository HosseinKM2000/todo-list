import Seal from '../img/seal.png'
import '../styles/404.css'
import {Link} from 'react-router-dom'




export default function Error404(){
   return(
    <div className='main-404'>
        <div className='button-404'>
         <Link to='/'>back to home</Link>
        </div>
        <div className='box-404'>
            <h1>page not found !!!</h1>
            <img src={Seal} alt="seal"/>
        </div>
    </div>
   )
}