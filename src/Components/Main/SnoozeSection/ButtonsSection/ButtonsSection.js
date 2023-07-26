import Button from "../../../BasicComponents/Button";
import "./ButtonsSection.css"

function ButtonsSection(props) {
   return (
      <section className="buttonsSection">
         <Button 
            className="buttonsSection__btn start" 
            onClick={props.onClickStartBtn} 
            btnText="Start" 
         />
         <Button 
            className="buttonsSection__btn stop" 
            onClick={props.onClickStopBtn} 
            btnText="Stop" 
         />
         <Button 
            className="buttonsSection__btn pause" 
            onClick={props.onClickPauseBtn} 
            btnText="Pause" 
         />
      </section>
   )
}

export default ButtonsSection;
