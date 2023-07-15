import { useState } from 'react'
import MainTittle from "./MainTittle/Maintittle"
import SnoozeSection from "./SnoozeSection/SnoozeSection"
import PomodoroSection from "./PomodoroSection/PomodoroSection"
import ActivitySection from "./ActivitySection/ActivitySection"
import AppMenu from "./AppMenu/AppMenu"
import "./Main.css"

function Main({ statusMenu }) {

      return (
            <main className="main-container">
                  <div className="content">
                        <MainTittle mainTittleText="Home" />
                        <SnoozeSection />
                        <PomodoroSection />
                        <ActivitySection />
                        <AppMenu />
                  </div>
            {statusMenu && <AppMenu />}
            </main>
      )

}

export default Main;
