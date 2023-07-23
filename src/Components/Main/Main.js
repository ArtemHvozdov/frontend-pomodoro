import MainTittle from "./MainTittle/Maintittle"
import SnoozeSection from "./SnoozeSection/SnoozeSection"
import PomodoroSection from "./PomodoroSection/PomodoroSection"
import ActivityComponent from "./activity/activity-component"
import "./Main.css"

function Main() {

      return (
         <main>
               <MainTittle mainTittleText="Home"/>
               <SnoozeSection/>
               <PomodoroSection/>
               <ActivityComponent/>
         </main>
      )
   
}

export default Main;
