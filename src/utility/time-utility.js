const generateTimeIntervals = (currentTime) => {
    const startHour = currentTime.getHours();
    const startMinute = Math.floor(currentTime.getMinutes() / 30) * 30;

    const timeIntervals = [];

    let initialHour = (startHour - 12 + 24) % 24;

    for (let i = 0; i < 48; i++) {
        const hourOffset = Math.floor((startMinute + 30 * i) / 60);
        const hourInterval = (initialHour + hourOffset) % 24;
        const minuteInterval = (startMinute + 30 * i) % 60;

        const formattedHour = hourInterval.toString().padStart(2, "0");
        const formattedMinute = minuteInterval.toString().padStart(2, "0");

        const interval = `${formattedHour}:${formattedMinute}`;

        timeIntervals.push(interval);
    }

    return timeIntervals
}

export default generateTimeIntervals
