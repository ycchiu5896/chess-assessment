import PlayerTurn from './PlayerTurn';
import DisplayTimer from './DisplayTimer';
import useResetGame from './useHooks/useResetGame';
import usePlayerTurn from './useHooks/usePlayerTurn';
import useDecrementTime from './useHooks/useDecrementTime';
import '../App.css';


export default function TimerPage({onStateChange}: {onStateChange: React.Dispatch<React.SetStateAction<'white' | 'black' | null>>;}) {

    const {playerTurn, setPlayerTurn, inGame, setInGame, switchPlayer, startGame} = usePlayerTurn();
    const {PlayerTimeLeft, setPlayerTimeLeft} = useResetGame({onStateChange, playerTurn, setPlayerTurn, setInGame});
    useDecrementTime({playerTurn, inGame, setPlayerTimeLeft, PlayerTimeLeft}); 

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