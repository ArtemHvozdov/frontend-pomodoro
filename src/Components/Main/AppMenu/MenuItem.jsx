import Text from './../../BasicComponents/Text.jsx'

function MenuItem(props) {
   return (
      <a href={props.href} className={props.classNameOfLink} onClick={props.onClick}>
         <img src={props.srcIcon} className={props.classNameOfIcon} alt={props.text}></img>
         <Text text={props.text} className={props.classNameOfText}/>
      </a>
   )
}

export default MenuItem;
