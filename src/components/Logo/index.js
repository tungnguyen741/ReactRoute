import React, {Component} from 'react'
import './Logo.css'
import Home from '../MainMenu/Home/index'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class Logo extends Component {
  render(){
      return(
          <div className="Logo">
              <img src="https://static.wixstatic.com/media/84770f_52ca6a10a27c4f70a62312a1fb5f48fb~mv2.png/v1/fill/w_64,h_64,al_c,q_85,usm_0.66_1.00_0.01/84770f_52ca6a10a27c4f70a62312a1fb5f48fb~mv2.webp" alt=""/>
              <h3>Tung Nguyenn</h3>
          </div>
 
      );
  }
}