import LogoSection from "./LogoSection/LogoSection";
import Menu from "./Menu/Menu";
import "./Header.css"

function Header(props) {
    return (
        <header>
            <div className="header__container">
                <LogoSection />
                <Menu onClick={props.handleShowMenu} />
            </div>
        </header>
    )
}

export default Header;
