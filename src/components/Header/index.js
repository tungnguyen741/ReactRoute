import React, {Component} from 'react';
import Logo from '../Logo/index';
import MainMenu from '../MainMenu/index';
import './style.css'

export default class Header extends Component {
  constructor(props){
    super(props);
  }
  render(){
      return(
        <div className="Header">
          <MainMenu data={this.props.data} />
      </div>
      );
  }
}