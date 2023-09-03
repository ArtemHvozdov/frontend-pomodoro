import Text from "../../../common/text";
import "./logo-text.css"

function LogoText(props) {
    return (
        <Text className="logo__text" text={props.text} />
    )
}

export default LogoText;
