import React from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom"

import { auth } from './../../firebase/firebase.utils'

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss'

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options-container'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                Contact
            </Link>
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> :
                    <Link className='option' to='/sign' >SIGN IN</Link>
            }
        </div>
    </div>
)

export default connect(mapStateToProps)(Header);