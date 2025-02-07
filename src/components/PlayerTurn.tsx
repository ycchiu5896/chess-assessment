
interface PlayerTurnProps {
    startGame: () => void;
    inGame: boolean;
    switchPlayer: () => void;
}

export default function PlayerTurn({startGame, inGame, switchPlayer}: PlayerTurnProps) {
    return(
        <div>
            {!inGame ? (
                <button onClick={startGame}>Start Game</button>
            ): (
                <button onClick={switchPlayer}>End Turn</button>
            )
            } 
        </div>
    )
}