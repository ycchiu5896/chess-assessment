export default function WinnerPage({winner, onStateChange} : {winner: 'White' | 'Black' | null, onStateChange: (winner: 'White' | 'Black' | null) => void}) {
    return (
        <div className={`winner-page ${winner}-Wins`}>
            <div className='winner-textbox'>
                {winner} Wins
            </div>
            <button type="button" className="btn-play-again" onClick={() => onStateChange(null)}> Play Again</button>
        </div>
    )
}