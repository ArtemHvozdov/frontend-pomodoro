import DropdownArrowComponent from './dropdown-arrow-component'
import Text from '../../basic-components/text'

const TitleRow = ({ text, className, showSpan, onClick }) => {
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
                <Text className={className} text={text} />
                <DropdownArrowComponent onClick={onClick} />
            </div>
            {showSpan ? <span style={spanStyle}></span> : null}
        </div>
    );
};

export default TitleRow;
