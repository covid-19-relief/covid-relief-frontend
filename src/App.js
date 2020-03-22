import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Submit from './Submit';
import Resources from './Resources';
import FundDetail from './FundDetail';
import Search from './Search';
import Splash from './Splash';
import { getUserFromLocalStorage } from './api-services';
// import PrivateRoute from './PrivateRoute';
// import Login from './Login';
// import AddResidency from './AddResidency';
// import EditResidency from './EditResidency';
// import MyResidencies from './MyResidencies';
// import ResidencyTable from './ResidencyTable';
// import UserTable from './UserTable';
// import GMap from './GMap';

import './bootstrap-reboot.min.css';
import './style.css';
  
export default class App extends Component {

state = {
    user: [],
    username: ''
}

// Put user into state and in persistence on login via callback
setUser = (userFromLogin) => {
  localStorage.setItem('user', JSON.stringify(userFromLogin));
  this.setState({ user: userFromLogin });
}

// Put user into state from localStorage first for subsequent props passing
componentWillMount = () => {
  const userFromLocalStorage = getUserFromLocalStorage();
  if (userFromLocalStorage) {
    this.setState({ user: userFromLocalStorage });
  }
}

render() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          {/* <Route path='/search' component={Search}/> */}
          {/* <PrivateRoute exact path='/bookmarks' component={Bookmarks} user={this.state.user}/>
          <PrivateRoute exact path='/add' component={AddResidency} user={this.state.user} />
          <PrivateRoute exact path='/edit/:id' component={EditResidency} user={this.state.user} />
          <PrivateRoute exact path='/my/listings/' component={MyResidencies} user={this.state.user} />
          <Route exact path='/map' component={GMap} />
          <Route exact path='/login' render={(props) => <Login {...props} setUser={ this.setUser } user={this.state.user } />} /> */}
          <Route path='/home' component={Home} />
          <Route path='/submit' component={Submit} />
          <Route path='/resources' component={Resources} />
          <Route exact path="/listings/:fundId" render={(props) => <FundDetail {...props} />} />
          {/* <Route exact path="/admin/listings" component={ResidencyTable} />
          <Route path="/admin/users" component={UserTable} /> */}
          <Route exact path='/' render={() => <Splash />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
}