import React from 'react';

// props => { className: "alguem passa", href: "/"}

function ButtonLink (props) {
    return (
        <a href="/" className={props.className}>
            {props.children}
        </a>
    )
}

export default ButtonLink;