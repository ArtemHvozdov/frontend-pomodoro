import LogoSection from "./logo-section/logo-section";
import MenuToggle from "./menu-toggle/menu-toggle";
import "./header.css"

function Header(props) {
    return (
        <header>
            <div className="header__container">
                <LogoSection />
                <MenuToggle onClick={props.handleShowMenu} />
            </div>
        </header>
    )
}

export default Header;
