import ArrowIcon from '../../icons/dropdown-arrow.svg'

const DropDownArrow = () => {
    const filterStyle = {
      filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
    }

    return (
        <div>
            <img src={ArrowIcon} style={filterStyle} alt="DropDownArrow"></img>
        </div>
    )
}

export default DropDownArrow
