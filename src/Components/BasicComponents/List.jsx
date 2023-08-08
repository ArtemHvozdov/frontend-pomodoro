function List(props) {
    return (
        <ul className={props.className}>
            {props.arrayItems.map((item, index) => {
                <li key={index}>{props.children}</li>
            })}
        </ul>
    )
}

export default List;
