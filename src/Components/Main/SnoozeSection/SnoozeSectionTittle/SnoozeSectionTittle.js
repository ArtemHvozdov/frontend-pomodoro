import Text from "../../../Basic Components/Text";
import Button from "../../../Basic Components/Button";
import "./SnoozeSectionTittle.css"

function SnoozeSectionTittle() {
   return (
      <section className="SnoozeSectionTittle">
         <Text className="SnoozeSectionTittle__text" text="Pomodoro 2"/>
         <Button className="SnoozeSectionTittle__btn" btnText="Snooze"/>
      </section>
   )
}

export default SnoozeSectionTittle;