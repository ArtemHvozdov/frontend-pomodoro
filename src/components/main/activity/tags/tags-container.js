import Tag from './tag'

function TagsContainer() {

    const containerStyle = {
        display: 'flex',
        marginTop: '15px',
        width: '100%',
        justifyContent: 'space-between'
    }

    const columnStyle = {
        display: 'flex',
        flexFlow: 'column'
    }

    return (
        <div style={containerStyle} id='TagsContainer'>
            <div style={columnStyle} id='TagsColumn'>
                <Tag text='Tag'></Tag>
                <Tag text='Tag'></Tag>
            </div>
            <div style={columnStyle} id='TagsColumn'>
                <Tag text='Tag'></Tag>
                <Tag text='Tag'></Tag>
            </div>
            <div style={columnStyle}>
                <Tag text='Tag'></Tag>
                <Tag text='Tag'></Tag>
            </div>
        </div>
    )

}

export default TagsContainer
