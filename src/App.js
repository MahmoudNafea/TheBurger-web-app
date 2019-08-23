import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import { Route, Switch } from 'react-router-dom';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
class App extends Component {
  render() {
    return (
      <div >
        <Layout>
          <Switch> {/* //we can use only exact or switch// */}
            <Route path='/Checkout' component={Checkout} />
            <Route path='/orders' component={Orders} />
            <Route path='/auth' component={Auth} />
            <Route path='/logout' component={Logout} />
            <Route path='/' component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div >
    );
  }
};

export default App;
