function IslandBodyContainer({children}) {
    const style = {
        display: 'flex',
        flexFlow: 'column',
        paddingTop: '10px'
    }

    return (
        <div style={style}>
            {children}
        </div>
    )
}

export default IslandBodyContainer
