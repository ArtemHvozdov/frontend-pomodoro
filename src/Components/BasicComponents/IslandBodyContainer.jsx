function IslandBodyContainer({children}) {
    const style = {
        display: 'flex',
        flexFlow: 'column',
        paddingTop: '10px',
        'overflow-y': 'auto',
        'max-height': '150px'
    }

    return (
        <div style={style}>
            {children}
        </div>
    )
}

export default IslandBodyContainer
