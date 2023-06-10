import MainTittle from "./MainTittle/Maintittle";
import SnoozeSection from "./SnoozeSection/SnoozeSection";
import TimeTrackSection from "./TimeTrackSection/TimeTrackSection";
import "./Main.css"
import BasicSection from "../Basic Components/BasicSection";

function Main() {
   return (
      <main>
         <MainTittle mainTittleText="Home"/>
         <SnoozeSection />
         <TimeTrackSection />
         
      </main>
   )
}

export default Main;