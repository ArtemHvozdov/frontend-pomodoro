import "./LogoTextSection.css"

function LogoTextSection(props) {
   return (
      <p className="logo__text">{props.text}</p>
   )
}

export default LogoTextSection;