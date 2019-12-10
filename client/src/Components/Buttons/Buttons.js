import React from 'react'

export default function Buttons(props) {
    return (
        <div>
            <button type="button" className={props.className}>{props.children}</button>
        </div>
    )
}
