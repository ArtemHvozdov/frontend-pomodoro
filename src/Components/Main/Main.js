import MainTittle from "./MainTittle/Maintittle"
import SnoozeSection from "./SnoozeSection/SnoozeSection"
import PomodoroSection from "./PomodoroSection/PomodoroSection"
import ActivityComponent from "./activity/activity-component"
import AppMenu from "./AppMenu/AppMenu"
import "./Main.css"

function Main({ statusMenu }) {

      return (
            <main className="main-container">
                  <div className="content">
                        <MainTittle mainTittleText="Home" />
                        <SnoozeSection />
                        <PomodoroSection />
                        <ActivityComponent />
                  </div>
            {statusMenu && <AppMenu />}
            </main>
      )
}

export default Main;
