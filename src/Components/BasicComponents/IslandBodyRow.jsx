import Text from "./Text";
import {useState} from "react";

const IslandBodyRow = ({rowClassName, rowText, valueClassName, valueText, hoverable = false}) => {
    const rowContainerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: '5px',
        transition: 'background-color 0.3s ease',
        backgroundColor: 'transparent'
    }

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        if (hoverable) {
            setIsHovered(true);
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div style={{
            ...rowContainerStyle,
            backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.5)' : 'transparent',
            borderRadius: isHovered ? '10px': 0
        }}
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}
        >
            <div>
                <Text className={rowClassName} text={rowText}/>
            </div>
            <div>
                <Text className={valueClassName} text={valueText}/>
            </div>
        </div>
    )
}

export default IslandBodyRow
