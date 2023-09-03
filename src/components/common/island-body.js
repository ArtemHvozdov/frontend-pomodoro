function IslandBody({ children, showSpan }) {
    const style = {
        display: 'flex',
        flexFlow: 'column',
        paddingTop: '10px',
        'max-height': '150px'
    }

    const spanStyle = {
        'border-bottom': '1px solid',
        'padding-top': '7px',
        color: 'white'
    }

    return (
        <div style={style} id='IslandBody'>
            {children}
            {showSpan ? <span style={spanStyle}></span> : null}
        </div>
    )
}

export default IslandBody
