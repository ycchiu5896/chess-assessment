
interface PlayerTurnProps {
    startGame: () => void;
    inGame: boolean;
    switchPlayer: () => void;
}

export default function PlayerTurn({startGame, inGame, switchPlayer}: PlayerTurnProps) {
    return(
        <div className='player-turn-container'>
            {!inGame ? (
                <button type="button" className="btn-player-turn" onClick={startGame}>Start Game</button>
            ): (
                <button type="button" className="btn-player-turn" onClick={switchPlayer}>End Turn</button>
            )
            } 
        </div>
    )
}