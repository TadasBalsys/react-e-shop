import React from 'react'
import { withRouter } from 'react-router-dom'

import "./menu-item.styles.scss"

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
    return (
        <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div
                className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl}) `
                }}
            />
            <div className='content'>
                <h2 className='title'>{title.toUpperCase()}</h2>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
}
// Route component from react-router-dom passes three props to component which he renders.
// And only that rendered component can access those props. But in this case,
// those props need to be passed down in DOM three to children components Route > Homepage(gets history, match, location props) > Directory > MenuItem(here those props: history, match. location, are needed)
// withRouter will pass updated match, location and history props to the wrapped component whenever it renders
export default withRouter(MenuItem);