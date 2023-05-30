function Button(props) {
   return <button className={props.className} onClick={props.onClick}>{props.btnText}</button>
}

export default Button;