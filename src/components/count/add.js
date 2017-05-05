import React from 'react'

const Add = (props) => {
    return (
        <button onClick={props.click}>{props.type}</button>
    )
}

export default Add