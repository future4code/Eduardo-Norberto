import React from 'react';
import './ButtonIcon.css'

function ButtonIcon (props) {
    return (
        <div className="ButtonIcon">
            {props.children}
        </div>
    )
}

export default ButtonIcon