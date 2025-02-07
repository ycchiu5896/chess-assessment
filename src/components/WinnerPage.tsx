export default function WinnerPage({winner, onStateChange} : {winner: 'white' | 'black' | null, onStateChange: (winner: 'white' | 'black' | null) => void}) {
    return (
        <div className={`winner-page`}>
            <div className='winner-textbox'>
                {winner} wins
            </div>
            <button type="button" className="btn-play-again" onClick={() => onStateChange(null)}> Play Again</button>
        </div>
    )
}