import "./Timer.css";

function Timer({time}){
    let array = [...time];
    if(array[0] < 10) array[0] = '0' + array[0];
    if(array[1] < 10) array[1] = '0' + array[1];
    if(array[2] < 10) array[2] = '0' + array[2];

    return(
        <div className="timer-container">
            <p className='timer'>{array.join(":")}</p>
        </div>
    )
};

export default Timer;