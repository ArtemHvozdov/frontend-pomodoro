import LogoSection from "./LogoSection/LogoSection";
import Menu from "./Menu/Menu";
import "./Header.css"

function Header() {
   return (
      <header className="container">
         <div className="header__container">
            <LogoSection />
            <Menu />
         </div>

      </header>
   )
}

export default Header;