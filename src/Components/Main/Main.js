import MainTittle from "./MainTittle/Maintittle"
import SnoozeSection from "./SnoozeSection/SnoozeSection"
import PomodoroSection from "./PomodoroSection/PomodoroSection"
import ActivitySection from "./ActivitySection/ActivitySection"
import "./Main.css"

function Main() {
    return (
        <main>
            <MainTittle mainTittleText="Home"/>
            <SnoozeSection/>
            <PomodoroSection/>
            <ActivitySection/>
        </main>
    )
}

export default Main
