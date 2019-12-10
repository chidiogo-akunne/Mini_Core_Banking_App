import React from 'react'

export default function Input(props) {
    return (
<div className={props.className}>
    <input type={props.type} className="form-control" id="exampleInputEmail1"/>
</div>
    )
}
