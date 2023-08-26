import LogoTextSection from "./text/logo-text-section";
import "./logo-section.css"
import logo from "./../../../icons/logo.svg"

function LogoSection() {
    return (
        <section className="logo__section">
            <div className="logo__img">
                <img src={logo} alt="Pomodoro"></img>
            </div>
            <LogoTextSection text="Senior Pomodoro" />
        </section>
    )
}

export default LogoSection;