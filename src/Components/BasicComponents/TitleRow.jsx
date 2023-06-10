import DropDownArrow from './DropDownArrow'
import Text from './Text'

const TitleRow = ({text, className}) => {
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
                <Text className={className} text={text}/>
                <DropDownArrow/>
            </div>
            <span style={spanStyle}></span>
        </div>
    );
};

export default TitleRow;
