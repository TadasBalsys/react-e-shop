import React from 'react'

import './custom-button.styles.scss'

// children property is innerTEXT value which are passed when component is rendered, ex sign-in-component.jsx
const CustomButton = ({ children, isGoogleSignIn, inverted,...otherProps }) => {
    return (
        <button className={` ${inverted ? 'google-sign-in' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps} >
        {children}
        </button>
    )
}

export default CustomButton;