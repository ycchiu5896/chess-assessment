import { useState, useEffect, useCallback } from 'react';
import PlayerTurn from './PlayerTurn';
import DisplayTimer from './DisplayTimer';

interface PlayerTimeLeft {
    white: number;
    black: number;
};

interface TurnDuration {
    hours: number;
    minutes: number;
    seconds: number;
};

const TURN_DURATION: TurnDuration = {hours:0, minutes: 0, seconds: 5};

export default function TimerPage({onStateChange}: {onStateChange: (winner: 'white' | 'black' | null) => void}) {

    const SECONDS_GAME_ENDS = 0;

    const [PlayerTimeLeft, setPlayerTimeLeft] = useState<PlayerTimeLeft>({
        white: convertToSeconds(TURN_DURATION),
        black: convertToSeconds(TURN_DURATION),
    });

    const [playerTurn, setPlayerTurn] = useState<'white' | 'black'>('white');

    const [inGame, setInGame] = useState(false);
    
    
    function convertToSeconds (time: TurnDuration): number {
        return (time.hours * 3600 + time.minutes * 60 + time.seconds) * 1000;
    };

    function switchPlayer() {
        setPlayerTurn((prev) => prev === 'white' ? 'black' : 'white');
    }

    function startGame() {
        setInGame(true);
    }

    const subtractTime = useCallback((time: PlayerTimeLeft, player: 'white' | 'black'): PlayerTimeLeft => {
        return {
            ...time,
            [player]: time[player] - 1000,
        };
    }, []);

        //decrement time every second
    useEffect(() => {
        const interval = setInterval(() => {
            setPlayerTimeLeft((prev) => {
                if (!inGame) {
                    return prev;
                }
                const newTime = subtractTime(prev, playerTurn);
                return newTime;
            });
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [playerTurn, inGame, subtractTime]);

    return (
    <div className='parent-container'>
        <div className='timer-page'>
            {
                Object.entries(PlayerTimeLeft).map(([player, time], index) => (
                    <div className={`${player}-container`} key={`${player}-${index}`}> 
                        <DisplayTimer player={player} time={time}/>
                        {playerTurn === player && <PlayerTurn startGame={startGame} inGame={inGame} switchPlayer={switchPlayer}/>}
                    </div>
                ))
            }
        </div>
    </div>
    )
}