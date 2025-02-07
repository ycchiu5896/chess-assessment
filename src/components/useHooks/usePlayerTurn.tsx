import { useState } from 'react';

export default function usePlayerTurn() {

    const [playerTurn, setPlayerTurn] = useState<'White' | 'Black'>('White');
    
    const [inGame, setInGame] = useState(false);

    function switchPlayer() {
        setPlayerTurn((prev) => prev === 'White' ? 'Black' : 'White');
    }

    function startGame() {
        setInGame(true);
    }

    return {playerTurn, setPlayerTurn, inGame, setInGame, switchPlayer, startGame};
}