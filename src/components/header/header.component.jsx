import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { createStructuredSelector } from 'reselect';

import { auth } from './../../firebase/firebase.utils';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const Header = ({ currentUser, hidden }) => ( 
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
            <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
    </div>
)


export default connect(mapStateToProps)(Header);