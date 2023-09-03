import React from 'react'
import closeSymbol from './../../../../icons/close-symbol.svg'

const Tag = ({onClose, text}) => {
    const tagContainerStyle = {
        display: 'flex',
        width: '95px',
        backgroundColor: 'white',
        borderRadius: '3px',
        border: '1px solid #ccc',
        marginBottom: '10px'
    }

    const textCloseSymbolContainer = {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        padding: '5px'
    }
    
    const tagTextStyle = {
        display: 'flex',
        fontSize: '12px'
    }

    const tagClosePartStyle = {
        display: 'flex'
    }

    return (
        <div style={tagContainerStyle} id='Tag'>
            <div style={textCloseSymbolContainer} id='TagTextCloseSymbol'>
                <div style={tagTextStyle} id='TagText'>{text}</div>
                <div style={tagClosePartStyle} onClick={onClose} id='TagCloseSymbol'>
                    <img src={closeSymbol} alt='close'></img>
                </div>
            </div>
        </div>
    )
}

export default Tag
