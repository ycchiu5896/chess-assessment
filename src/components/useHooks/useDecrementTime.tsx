import { useEffect, useCallback } from 'react';

interface PlayerTimeLeft {
    white: number;
    black: number;
}

interface UseDecrementTimeProps {
    playerTurn: 'white' | 'black';
    inGame: boolean;
    PlayerTimeLeft: PlayerTimeLeft;
    setPlayerTimeLeft: React.Dispatch<React.SetStateAction<PlayerTimeLeft>>;
}

export default function useDecrementTime({playerTurn, inGame, setPlayerTimeLeft}: UseDecrementTimeProps) {

    const subtractTime = useCallback((time: PlayerTimeLeft, player: 'white' | 'black'): PlayerTimeLeft => {
        return {
            ...time,
            [player]: time[player] - 1000,
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setPlayerTimeLeft((prev: PlayerTimeLeft) => {
                if (!inGame) {
                    return prev;
                }
                const newTime = subtractTime(prev, playerTurn);
                return newTime;
            });
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [playerTurn, inGame, subtractTime, setPlayerTimeLeft]);

}