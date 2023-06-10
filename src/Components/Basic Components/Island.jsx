function Island({children}) {
    return (
        <div style={{
            'padding-top': '10px',
            'padding-bottom': '10px',
            'display': 'flex'}}>
            <section style={{
                'padding': '15px',
                'width': '100%',
                'background': 'rgba(255, 255, 255, 0.25)',
                'border': '1px solid rgba(255, 255, 255, 0.25)',
                'border-radius': '32px',
                'box-shadow': '2px 4px 19px rgba(0, 0, 0, 0.25)'}}>
                {children}
            </section>
        </div>
    )
}

export default Island;
