function IslandBodyContainer({children, showSpan}) {
    const style = {
        display: 'flex',
        flexFlow: 'column',
        paddingTop: '10px',
        'overflow-y': 'auto',
        'max-height': '150px'
    }

    const spanStyle = {
        'border-bottom': '1px solid',
        'padding-top': '7px',
        color: 'white'
    }

    return (
        <div style={style}>
            {children}
            {showSpan ? <span style={spanStyle}></span> : null}
        </div>
    )
}

export default IslandBodyContainer
