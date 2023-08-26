import MainTittle from "./tittle/main-tittle"
import SnoozeSection from "./snooze/snooze-section"
import PomodoroSection from "./pomodoro/pomodoro-section"
import ActivityComponent from "./activity/activity-component"
import Menu from "./menu/menu"
import "./main.css"
import StatisticsComponent from "./statistics/statistics-component"

function Main({ statusMenu }) {

    return (
        <main className="main-container">
            <div className="content">
                <MainTittle mainTittleText="Home" />
                <SnoozeSection />
                <PomodoroSection />
                <ActivityComponent />
                <StatisticsComponent />
            </div>
            {statusMenu && <Menu />}
        </main>
    )
}

export default Main;
