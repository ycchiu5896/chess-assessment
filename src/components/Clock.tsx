import { useState } from 'react';
import TimerPage from './TimerPage';
import WinnerPage from './WinnerPage';
export default function Clock() {

    const [winner, setWinner] = useState<'white' | 'black' | null> (null);

    //show different pages based on the state of the game
    return (
        <div>{
            winner ? (
                <WinnerPage winner={winner} onStateChange={setWinner}/>
            ) : (
                <TimerPage onStateChange={setWinner}/>
            )}
        </div>
    )
}
