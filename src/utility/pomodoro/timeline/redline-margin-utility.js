const calculateMarginForRedLine = (minutes, seconds) => {
    let marginLeftValue
    if (minutes >= 0 && minutes <= 15) {
        marginLeftValue = 47 + (minutes * 3) + (seconds * 0.05)
    } else if (minutes > 15 && minutes <= 30) {
        marginLeftValue = 2 + ((minutes - 15) * 3) + (seconds * 0.05)
    } else if (minutes > 30 && minutes <= 45) {
        marginLeftValue = 47 + ((minutes - 30) * 3) + (seconds * 0.05)
    } else if (minutes > 45 && minutes <= 59) {
        marginLeftValue = 2 + ((minutes - 45) * 3) + (seconds * 0.05)
    }

    return marginLeftValue
}

export default calculateMarginForRedLine
