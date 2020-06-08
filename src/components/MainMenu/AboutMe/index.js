import React, {Component} from 'react'
import './AboutMe.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default class AboutMe extends Component {
    render(){
        return(
            <div className="AboutMe"> 
                Thông tin về tôi
            </div>
        );
    }
}