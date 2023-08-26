import "./menu-toggle.css"
import menuIcon from "./../../../icons/menu-icon.svg"

function MenuToggle({ onClick }) {
    return (
        <div className="menu__icon" onClick={onClick}>
            <img src={menuIcon} alt="Menu"></img>
        </div>
    )
}

export default MenuToggle;
