import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth, createUserProfileDocument } from './firebase/firebase.utils.js';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import Header from './components/header/header.component';
import SignInAndSingUpPage from './pages/sign-in-up/sign-in-up.component.jsx';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';

import './App.css';

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

// Switch component - prevents from rendering all Route components. When Route's is in Switch component, React finds Route component with the path which are needed, renders that Route component and stops rendering other Route components.(A <Switch> will iterate over all of its children <Route> elements and only render the first one that matches the current location. This helps when multiple route’s paths match the same pathname, when animating transitions between routes, and in identifying when no routes match the current location (so that you can render a “404” component).)
// Any component that gets render by Route component, gets three props - history, location, match
class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // if user sign in, check if user is sign in(userAuth !== null), gets userRef from createUserProfileDocument from userAuth object been passed -
      // if there is a document there(userRef), it will be passed back to userRef var. If there isn't an user document, it will create a document in 
      // createUserProfileDocument method in line 26, userRef.set() and that why it will still pass back document(userRef) to const userRef
      // than it will listen(a.k.a.subscribe)(.onSnapshot()) to userRef for any changes to that data, but it will all so get back the first state(snapShot) of that data. 
      // So than, using that state, it will setState of app.js using that state(snapShot) - snapShot.id and snapShot.data()
      // if user logs out(else statement) it will set currentUser: userAuth (userAuth !== null)

      // onAuthStateChanged returns authenticated user, which we pass to createUserProfileDocument, which returns documentReference(userRef)  
      // firebase database. On that userRef we call an onSnapshot() method which returns documentSnapshot from firebase
      // than we setState tp currentUser with data from snapShot. Need to use .data() method on snapShot - thats the way to get data from snapshots
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      } else {
        // if userAuth is null, setState - currentUser is userAuth (userAuth === null)
        setCurrentUser(userAuth)
      }
    })
  }

  //cause auth.onAuthStateChanged() connection is always open. Because it's an open subscription, we need to close that subscription when component unmounts, to prevent memory leeks 
  // when componentWillUnmount it will close auth subscription.
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/sign' render={() =>
            this.props.currentUser ? (
              <Redirect to='/' />
            ) : (
                <SignInAndSingUpPage />
              )
          } />
        </Switch>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
