import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menus from './components/Menus';
import './App.css';
import ChartViewer from './components/ChartViewer';
import Chart from './components/Chart';
import routers from './routers';
class App extends Component {



  render() {
      return (
          
          <Router>
              <div className="App">
                  {/* Menu */}
                  <Menus />

                  {/* Nội Dung  */}
                  <Switch>
                      {this.showContentMenus(routers)}
                  </Switch>
              </div>
          </Router>
      );
  }

  showContentMenus = (routes) => {
      var result = null;
      if (routes.length > 0) {
          result = routes.map((route, index) => {
              return (
                  <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      component={route.main}
                  />
              );
          });
      }
      return result;
  }
}

export default App;

