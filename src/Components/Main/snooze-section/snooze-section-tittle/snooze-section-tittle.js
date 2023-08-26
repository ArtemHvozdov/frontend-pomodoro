import Text from "./../../../basic-components/text";
import Button from "./../../../basic-components/button";
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
