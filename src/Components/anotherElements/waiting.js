import Waite from '../../loadings/WAIT.svg'
import '../../styles/Wait.css'





export default function Waiting(){
    return(
        <div className='wait'>
          <div className='wait-box'>
            <h1>Please Waiting</h1>
            <img src={Waite} alt="loading"/>
          </div>
        </div>
    )
}