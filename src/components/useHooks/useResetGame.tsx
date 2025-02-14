import React, { useCallback, useEffect, useState } from 'react';

interface TurnDuration {
    hours: number;
    minutes: number;
    seconds: number;
}

interface PlayerTimeLeft {
    White: number;
    Black: number;
}

interface UseResetGameProps {
    onStateChange: React.Dispatch<React.SetStateAction<'White' | 'Black' | null>>;
    playerTurn: 'White' | 'Black';
    setPlayerTurn: React.Dispatch<React.SetStateAction<'White' | 'Black'>>;
    setInGame: React.Dispatch<React.SetStateAction<boolean>>;
}

const TURN_DURATION: TurnDuration = {hours: 0, minutes: 5, seconds: 0};

export default function useResetGame({onStateChange, playerTurn, setPlayerTurn, setInGame}: UseResetGameProps) {

    const SECONDS_GAME_END = 0;

    const [PlayerTimeLeft, setPlayerTimeLeft] = useState<PlayerTimeLeft>({
        White: convertToSeconds(TURN_DURATION),
        Black: convertToSeconds(TURN_DURATION),
    });

    const resetTimers = useCallback((): PlayerTimeLeft => {
        return {
            White: convertToSeconds(TURN_DURATION),
            Black: convertToSeconds(TURN_DURATION),
        };
    }, []);

    function convertToSeconds (time: TurnDuration): number {
        return (time.hours * 3600 + time.minutes * 60 + time.seconds) * 1000;
    }

    const resetGame = useCallback(() => {
        setPlayerTimeLeft(resetTimers());
        setInGame(false);
        setPlayerTurn('White');
    }, [resetTimers, setInGame, setPlayerTurn]);

    useEffect(() => {
        if (PlayerTimeLeft[playerTurn] <= SECONDS_GAME_END) {
            onStateChange(playerTurn === 'White' ? 'Black' : 'White');
            resetGame();
        }
    }, [PlayerTimeLeft, playerTurn, onStateChange, resetGame]);

    return {PlayerTimeLeft, setPlayerTimeLeft};

}