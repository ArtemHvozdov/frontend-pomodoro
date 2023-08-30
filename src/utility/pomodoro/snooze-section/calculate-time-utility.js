const calculateTime = (timeValue) => {
    let minutes = Math.floor(timeValue / 60)
    let seconds = timeValue - minutes * 60;

    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    let time = {
        minutes: minutes,
        seconds: seconds
    }

    return time
}

export default calculateTime;
