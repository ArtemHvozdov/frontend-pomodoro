import Text from "../../../common/text";
import Button from "../../../common/button";
import "./snooze-section-tittle.css"

function SnoozeSectionTittle() {
    return (
        <section className="SnoozeSectionTittle">
            <Text className="SnoozeSectionTittle__text" text="Pomodoro 2" />
            <Button className="SnoozeSectionTittle__btn" btnText="Snooze" />
        </section>
    )
}

export default SnoozeSectionTittle;
