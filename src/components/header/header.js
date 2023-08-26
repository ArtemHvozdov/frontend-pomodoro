import LogoSection from "./logo/logo-section";
import Toggle from "./toggle/toggle";
import "./header.css"

function Header(props) {
    return (
        <header>
            <div className="header__container">
                <LogoSection />
                <Toggle onClick={props.handleShowMenu} />
            </div>
        </header>
    )
}

export default Header;
