import { useEffect, useCallback } from 'react';

interface PlayerTimeLeft {
    White: number;
    Black: number;
}

interface UseDecrementTimeProps {
    playerTurn: 'White' | 'Black';
    inGame: boolean;
    PlayerTimeLeft: PlayerTimeLeft;
    setPlayerTimeLeft: React.Dispatch<React.SetStateAction<PlayerTimeLeft>>;
}

export default function useDecrementTime({playerTurn, inGame, setPlayerTimeLeft}: UseDecrementTimeProps) {

    const subtractTime = useCallback((time: PlayerTimeLeft, player: 'White' | 'Black'): PlayerTimeLeft => {
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