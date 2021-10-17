import { useState, useEffect } from 'react';
import { TimerDiv, TimerContainer, ButtonsContainer } from './styles';

const Timer = (props: any) => {
    const { initialMinute = 10, initialSeconds = 0 } = props;
    const [minutes, setMinutes] = useState(initialMinute);
    const [seconds, setSeconds] = useState(initialSeconds);

    const [start, setStart] = useState(false);

    function add2Minutes() {
        setMinutes(minutes + 2);
    }

    function reset() {
        setMinutes(initialMinute);
        setSeconds(initialSeconds);
    }

    useEffect(() => {
        if (start) {
            let myInterval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                }
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(myInterval)
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                }
            }, 1000)
            return () => {
                clearInterval(myInterval);
            };
        }
    });

    return (
        <TimerDiv>
            <TimerContainer>
                <h1> {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                <ButtonsContainer>
                    <button className={start ? 'stop' : 'start'} onClick={() => start ? setStart(false) : setStart(true)} >{start ? 'Stop' : 'Start'}</button>
                    <button className='add' onClick={() => add2Minutes()} >Add 2 minutes</button>
                    <button className='reset' onClick={() => reset()} >Reset</button>
                </ButtonsContainer>
            </TimerContainer>
        </TimerDiv>
    )
}

export { Timer };