import React, { Component } from "react";
import AboutMe from './AboutMe/index'
import Blog from './Blog/index'
import Home from './Home/index'
import Logo from '../Logo/index'
import './MainMenu.css'
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from "react-router-dom";

export default class MainMenu extends Component {
  render() {
    return (
      <Router>
        <div className="MainMenu">
          <ul className="nav">
            <div className="container">
              <div className="logo">
                <NavLink activeStyle={{ color: "red" }} to="/Home">
                  <Logo />
                </NavLink>
              </div>

              <div className="mainmenu">
                <li><NavLink to="/Home">Home</NavLink></li>
                <li><NavLink to="/Blog">Blog</NavLink></li>
                <li><NavLink to="/About">About Me</NavLink></li>
              </div>
            </div>
          </ul>


          <Route path="/(Home|)/"
            exact render={props => <Home data={this.props.data} {...props} />}
          />

          <Route path="/Blog"
            exact render={props => <Blog data={this.props.data} {...props} />}
          />
          <Route path="/About"
            exact render={props => <AboutMe data={this.props.data} {...props} />}
          />

        </div>
      </Router>

    );
  }
}
