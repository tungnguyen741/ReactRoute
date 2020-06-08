import React, {Component} from 'react';
import MainMenu from '../MainMenu/index';
import './style.css'

export default class Header extends Component {
  render(){
      return(
        <div className="Header">
          <MainMenu data={this.props.data} />
      </div>
      );
  }
}