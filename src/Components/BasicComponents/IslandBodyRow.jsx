import Text from "./Text";

const IslandBodyRow = ({rowClassName, rowText, valueClassName, valueText}) => {
    const rowContainerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: '5px'
    }

    return (
        <div style={rowContainerStyle}>
            <div>
                <Text className={rowClassName} text={rowText}/>
            </div>
            <div>
                <Text className={valueClassName} text={valueText}/>
            </div>
        </div>
    )
}

export default IslandBodyRow;
