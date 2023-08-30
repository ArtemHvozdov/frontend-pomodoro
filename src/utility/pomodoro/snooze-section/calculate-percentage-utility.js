const calculatePercentage = (timeValue) => {
    let percentage = ((25 * 60 - timeValue) / (25 * 60)) * 200;
    return Math.round(percentage);
}

export default calculatePercentage;
