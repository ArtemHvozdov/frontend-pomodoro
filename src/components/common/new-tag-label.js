import React from 'react'
import plusSymbol from './../../icons/plus-symbol.svg'

const NewTagLabel = () => {
    const borderStyle = {
        display: 'flex',
        borderRadius: '20px',
        borderWidth: '2px',
        borderColor: 'white',
        borderStyle: 'dashed',
        color: 'white',
        borderImageSlice: '1',
        dashArray: '4px 4px',
        padding: '2px',
        boxSizing: 'border-box',
        fontSize: '12px'
    }

    const plusTagTextContainerStyle = {
        display: 'flex',
        marginTop: '3px',
        marginBottom: '3px',
        marginLeft: '5px',
        marginRight: '5px'
    }

    const plusStyle = {
        marginRight: '5px'
    }

    return (
        <div style={borderStyle}>
            <div style={plusTagTextContainerStyle}>
                <div style={plusStyle}>
                    <img src={plusSymbol} alt='plusSymbol'></img>
                </div>
                <div>
                    New tag
                </div>
            </div>
        </div>)
}

export default NewTagLabel
