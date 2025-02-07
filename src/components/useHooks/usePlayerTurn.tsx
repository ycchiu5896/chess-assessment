import { useState } from 'react';

export default function usePlayerTurn() {

    const [playerTurn, setPlayerTurn] = useState<'white' | 'black'>('white');
    
    const [inGame, setInGame] = useState(false);

    function switchPlayer() {
        setPlayerTurn((prev) => prev === 'white' ? 'black' : 'white');
    }

    function startGame() {
        setInGame(true);
    }

    return {playerTurn, setPlayerTurn, inGame, setInGame, switchPlayer, startGame};
}