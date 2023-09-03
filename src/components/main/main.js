import MainTittle from "./tittle/main-tittle"
import SnoozeSection from "./snooze/snooze-section"
import PomodoroSection from "./pomodoro/pomodoro-section"
import ActivityReport from "./activity/activity-report"
import Menu from "./menu/menu"
import "./main.css"
import StatisticsReport from "./statistics/statistics-component"
import ActivityTags from "./activity/tags/activity-tags";

function Main({ statusMenu }) {

    return (
        <main className="main-container">
            <div className="content">
                <MainTittle mainTittleText="Home" />
                <SnoozeSection />
                <PomodoroSection />
                <ActivityReport />
                <StatisticsReport />
                <ActivityTags />
            </div>
            {statusMenu && <Menu />}
        </main>
    )
}

export default Main;
