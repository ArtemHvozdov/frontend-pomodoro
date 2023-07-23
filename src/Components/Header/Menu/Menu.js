import "./Menu.css"
import menuIcon from "./../../../icons/menu-icon.svg"

function Menu({onClick}) {
   return (
         <div className="menu__icon" onClick={onClick}>
            <img src={menuIcon} alt="Menu"></img>
         </div>
   )
}

export default Menu;
