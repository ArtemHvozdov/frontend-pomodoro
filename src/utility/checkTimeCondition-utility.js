const checkTimeCondition = (time, currentHour, currentMinute) => {
    const [hours, minutes] = time.split(':')
    const timeHours = parseInt(hours, 10)
    const timeMinutes = parseInt(minutes, 10)

    if (timeHours === 0 && timeMinutes === 0) {
        return ((currentHour === 23 && currentMinute > 45) ||
            (currentHour === timeHours && currentMinute <= 15))
    } else if (timeHours === 0 && timeMinutes === 30) {
        return (currentHour === timeHours &&
            currentMinute > 15 && currentMinute < 45)
    } else if (timeMinutes === 0) {
        return ((currentHour === timeHours && currentMinute <= 15) ||
            (currentHour === timeHours - 1 && currentMinute > 45))
    } else if (timeMinutes === 30) {
        return (currentHour === timeHours && currentMinute > 15 && currentMinute <= 45)
    }
}

export default checkTimeCondition
