import Text from "../../../BasicComponents/Text";
import "./LogoTextSection.css"

function LogoTextSection(props) {
    return (
        <Text className="logo__text" text={props.text} />
    )
}

export default LogoTextSection;
