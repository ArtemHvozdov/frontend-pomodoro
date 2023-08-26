import Text from "../../../common/text";
import "./logo-text-section.css"

function LogoTextSection(props) {
    return (
        <Text className="logo__text" text={props.text} />
    )
}

export default LogoTextSection;
