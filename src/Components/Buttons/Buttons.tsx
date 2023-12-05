import './Buttons.css';
import { useState, FC } from 'react';

interface IButtonProps{
  intervalTimer: ()=>void;
  resetTimer: ()=>void;
}

const Buttons: FC<IButtonProps> = ({intervalTimer, resetTimer}): JSX.Element =>{

    const [action, setAction] = useState<string>('Start');

    const handleBtnName = function ():void{
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