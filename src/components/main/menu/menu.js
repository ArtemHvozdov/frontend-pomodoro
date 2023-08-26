import MenuItem from "./menu-item"
import Menu_Button_Icon from "../../../icons/menu/menu_button_icon.svg"
import Activities_Icon from "../../../icons/menu/activities_icon.svg"
import Profile_Icon from "../../../icons/menu/profile_icon.svg"
import Notifications_Icon from "../../../icons/menu/notifications_icon.svg"
import "./menu.css"

function Menu() {
    return (
        <div className="appmenu-container">
            <ul className="appmenu-list">
                <li className="list-item">
                    <MenuItem
                        href="#"
                        classNameOfLink="menu-link"
                        srcIcon={Menu_Button_Icon}
                        classNameOfIcon="list__item-icon"
                        text="Menu Button"
                        classNameOfText="menu__item-text"
                    />
                </li>
                <li className="list-item">
                    <MenuItem
                        href="#"
                        classNameOfLink="menu-link"
                        srcIcon={Activities_Icon}
                        classNameOfIcon="list__item-icon"
                        text="Activities"
                        classNameOfText="menu__item-text"
                    />
                </li>
                <li className="list-item">
                    <MenuItem
                        href="http://localhost:8081/oauth2/authorization/google"
                        classNameOfLink="menu-link"
                        srcIcon={Profile_Icon}
                        classNameOfIcon="list__item-icon"
                        text="Login"
                        classNameOfText="menu__item-text"
                    />
                </li>
                <li className="list-item">
                    <MenuItem
                        href="#"
                        classNameOfLink="menu-link"
                        srcIcon={Notifications_Icon}
                        classNameOfIcon="list__item-icon"
                        text="Notifications"
                        classNameOfText="menu__item-text"
                    />
                </li>
            </ul>
        </div>
    )
}

export default Menu;
