
interface DisplayTimerProps {
    player: string;
    time: number;
}

export default function DisplayTimer({player, time}: DisplayTimerProps) {

    function convertToClock(time: number){
        const hours = Math.floor(time / 3600000);
        const minutes = Math.floor((time % 3600000) / 60000);
        const seconds = Math.floor((time % 60000) / 1000);

        // wants to return a string in the format of h:mm:ss or m:ss
        if (hours === 0){
            return `${minutes}:${String(seconds).padStart(2, '0')}`;
        }
        return `${hours}:${String(minutes).padStart(2,`0`)}:${String(seconds).padStart(2, '0')}`;
    }   

    return(
        <div className={`${player}-container font-style`}>
            <div className="timer-textbox">
                {convertToClock(time)}
            </div>
        </div>
    )
}