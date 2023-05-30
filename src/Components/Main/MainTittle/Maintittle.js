import "./MainTittle.css"
import clockIcon from "./../../../icons/clock-icon.svg"

function MainTittle(props) {
   return (
      <section className="main__tittle">
         <img src={clockIcon}></img>
         <p className="main__tittle-text">{props.mainTittleText}</p>
      </section>
   )
}

export default MainTittle;