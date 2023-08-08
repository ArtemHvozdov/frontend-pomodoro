import MenuItem from "./MenuItem";
import Menu_Button_Icon from "./../../../icons/menu-item-icons/Menu_Button_Icon.svg"
import Activities_Icon from "./../../../icons/menu-item-icons/Activities_Icon.svg"
import Profile_Icon from "./../../../icons/menu-item-icons/Profile_Icon.svg"
import Notifications_Icon from "./../../../icons/menu-item-icons/Notifications_Icon.svg"
import "./AppMenu.css"

function AppMenu() {
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

export default AppMenu;
