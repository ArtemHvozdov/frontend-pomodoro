import { useRef, useEffect, useState } from 'react'
import Island from "../../BasicComponents/Island"
import IntervalTimeItem from "./IntervalTimeItem/IntervalTimeItem"
import generateTimeIntervals from '../../../utility/time-utility'
import "./PomodoroSection.css"

function PomodoroSection() {
    const [currentTime, setCurrentTime] = useState(new Date())
    
    const timeIntervals = generateTimeIntervals(currentTime)

    const parentContainer = useRef(null)
    const childContainer = useRef(null)

    let minutes = currentTime.getMinutes()
    let seconds = currentTime.getSeconds()

    useEffect(() => {

        const timeLineSection = parentContainer.current;
        let halfOfFullWidth = timeLineSection.scrollWidth / 2

        let defaultScrollLeftValue = 0

        if (minutes === 0 || minutes === 30) {
            defaultScrollLeftValue = halfOfFullWidth + (seconds * 0.05) - 121.1
        } else if (minutes === 45) {
            defaultScrollLeftValue = halfOfFullWidth - 119.5 + 43
        } else if (minutes > 30 && minutes <= 59) {
            defaultScrollLeftValue = halfOfFullWidth + ((minutes - 30) * 3) + (seconds * 0.05) - 121.1
        } else {
            defaultScrollLeftValue = halfOfFullWidth + (minutes * 3) + (seconds * 0.05) - 121.1
        }

        timeLineSection.scrollLeft = defaultScrollLeftValue

        const interval = setInterval(() => {
            setCurrentTime(new Date())
        }, 20000)

        return () => {
            clearInterval(interval)
        }

    }, [currentTime])



    return (
        <Island>
            <div className="red-vertical-line"></div>
            <div className="timeline__section" ref={parentContainer}>
                {timeIntervals.map((time, index) => (
                    <div
                        className={`timeline__section-container`}
                        key={index}
                        ref={childContainer}
                    >
                        <IntervalTimeItem time={time} />
                    </div>
                ))}
            </div>
        </Island >
    )
}

export default PomodoroSection;
