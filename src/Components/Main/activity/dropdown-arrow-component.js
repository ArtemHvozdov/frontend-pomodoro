import ArrowIcon from '../../../icons/dropdown-arrow.svg'

const DropdownArrowComponent = ({onClick}) => {
    const filterStyle = {
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
    }

    return (
        <div onClick={onClick}>
            <img src={ArrowIcon} style={filterStyle} alt="DropdownArrowComponent"></img>
        </div>
    )
}

export default DropdownArrowComponent
