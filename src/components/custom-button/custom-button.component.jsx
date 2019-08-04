import React from 'react'

import './custom-button.styles.scss'

// children property is innerTEXT value which are passed when component is rendered, ex sign-in-component.jsx
const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
    console.log(children)
    return (
        <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps} >
            {children}
        </button>
    )
}

export default CustomButton;