export default function WinnerPage({winner, onStateChange} : {winner: 'white' | 'black' | null, onStateChange: (winner: 'white' | 'black' | null) => void}) {
    return (
        <div className={`winner-page ${winner}`}>
            <div>
                <h1>{winner} wins</h1>
            </div>
            <button onClick={() => onStateChange(null)}> Play Again</button>
        </div>
    )
}