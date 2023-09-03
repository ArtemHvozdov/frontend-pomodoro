import Logo from "./logo/logo";
import Toggle from "./toggle/toggle";
import "./header.css"

function Header(props) {
    return (
        <header>
            <div className="header__container">
                <Logo />
                <Toggle onClick={props.handleShowMenu} />
            </div>
        </header>
    )
}

export default Header;
