import "./Menu.css"
import menuIcon from "./../../../icons/menu-icon.svg"

function Menu() {
   return (
      <section>
         <div className="menu__icon">
            <img src={menuIcon}></img>
         </div>
      </section>
   )
}

export default Menu;