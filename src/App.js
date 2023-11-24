import './App.css';
import {useState, useRef} from 'react';
import Buttons from './Components/Buttons/Buttons';
import Timer from './Components/Timer/Timer';

function App() {

  const [time, setTime] = useState(['0','0','0']);
  const [running, setRunning] = useState(false);

  const intervalTimer = function (){
    let mins = +time[0];
    let secs = +time[1];
    let milsecs = +time[2];

    if(running === false){
      setRunning(setInterval(()=>{
        milsecs += 1;
        if(milsecs == 100) {
          milsecs = 0;
          secs += 1;
        }
        if(secs == 60){
          secs = 0;
          mins += 1;
        }
        setTime([mins, secs, milsecs])
      },10))
    }
    else{
      clearInterval(running);
      setRunning(false);
    }
  }

  const resetTimer = function (){
    clearInterval(running);
    setRunning(false);
    setTime(['0','0','0']);
  }
  
  return (
   <div className='container'>
    <Timer time={time}/>
    <Buttons intervalTimer={intervalTimer} resetTimer={resetTimer}/>
   </div>
  );
}

export default App;
