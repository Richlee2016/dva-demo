import React from 'react'

const Add = (props) => {
    return (
        <button key='minus' onClick={props.onClick}>{props.type}</button>
    )
}

export default Add