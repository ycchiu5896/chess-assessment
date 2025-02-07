import React, { useCallback, useEffect, useState } from 'react';

interface TurnDuration {
    hours: number;
    minutes: number;
    seconds: number;
}

interface PlayerTimeLeft {
    white: number;
    black: number;
}

interface UseResetGameProps {
    onStateChange: React.Dispatch<React.SetStateAction<'white' | 'black' | null>>;
    playerTurn: 'white' | 'black';
    setPlayerTurn: React.Dispatch<React.SetStateAction<'white' | 'black'>>;
    setInGame: React.Dispatch<React.SetStateAction<boolean>>;
}

const TURN_DURATION: TurnDuration = {hours: 0, minutes: 0, seconds: 5};

export default function useResetGame({onStateChange, playerTurn, setPlayerTurn, setInGame}: UseResetGameProps) {

    const SECONDS_GAME_END = 0;

    const [PlayerTimeLeft, setPlayerTimeLeft] = useState<PlayerTimeLeft>({
        white: convertToSeconds(TURN_DURATION),
        black: convertToSeconds(TURN_DURATION),
    });

    const resetTimers = useCallback((): PlayerTimeLeft => {
        return {
            white: convertToSeconds(TURN_DURATION),
            black: convertToSeconds(TURN_DURATION),
        };
    }, []);

    function convertToSeconds (time: TurnDuration): number {
        return (time.hours * 3600 + time.minutes * 60 + time.seconds) * 1000;
    }

    const resetGame = useCallback(() => {
        setPlayerTimeLeft(resetTimers());
        setInGame(false);
        setPlayerTurn('white');
    }, [resetTimers,setInGame,setPlayerTurn]);

    useEffect(() => {
        if (PlayerTimeLeft[playerTurn] <= SECONDS_GAME_END) {
            onStateChange(playerTurn === 'white' ? 'black' : 'white');
            resetGame();
        }
    }, [PlayerTimeLeft, playerTurn, onStateChange, resetGame]);

    return {PlayerTimeLeft, setPlayerTimeLeft};

}