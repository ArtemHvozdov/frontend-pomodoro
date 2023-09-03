import Text from '../../common/text'

const TitleRow = (props) => {

    const outerDivStyle = {
        display: 'flex',
        flexFlow: 'column'
    }

    const innerDivStyle = {
        display: 'flex',
        justifyContent: 'space-between'
    }

    const spanStyle = {
        'border-bottom': '1px solid',
        'padding-top': '7px',
        color: 'white'
    }

    return (
        <div style={outerDivStyle}>
            <div style={innerDivStyle}>
                <Text className={props.className} text={props.text}/>
                {props.childComponent}
            </div>
            {props.showSpan ? <span style={spanStyle}></span> : null}
        </div>
    )
}

export default TitleRow
