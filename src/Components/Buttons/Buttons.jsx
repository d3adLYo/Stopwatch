import './Buttons.css';
import { useState } from 'react';

function Buttons({intervalTimer, resetTimer}){

    const [action, setAction] = useState('Start');


    const handleBtnName = function (){
      if(action==='Start') {
        setAction('Stop');
      }
      else if(action==='Stop') {
        setAction('Start');
      }
    }

    return(
        <div className='buttons-container'>
            <button onClick={()=>{
                handleBtnName()
                intervalTimer()
            }}>{action}</button>
            <button onClick={()=>{
                resetTimer()
                if(action==='Stop') {
                    setAction('Start');
                }
                else return
            }}>Reset</button>
        </div>
    )
}

export default Buttons;