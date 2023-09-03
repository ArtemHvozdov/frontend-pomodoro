import LogoText from "./text/logo-text";
import "./logo.css"
import logo from "./../../../icons/logo.svg"

function Logo() {
    return (
        <section className="logo__section">
            <div className="logo__img">
                <img src={logo} alt="Pomodoro"></img>
            </div>
            <LogoText text="Senior Pomodoro" />
        </section>
    )
}

export default Logo;
