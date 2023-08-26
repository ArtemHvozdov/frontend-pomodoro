import Text from "./../../basic-components/text";
import "./main-tittle.css"
import clockIcon from "./../../../icons/clock-icon.svg"

function MainTittle(props) {
    return (
        <section className="main__tittle">
            <img src={clockIcon} alt="Home"></img>
            <Text className="main__tittle-text" text={props.mainTittleText} />
        </section>
    )
}

export default MainTittle;
