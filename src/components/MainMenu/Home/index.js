import React, {Component} from 'react'
import './Home.css'
import AboutMe from '../AboutMe/index'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";
 
export default class Home extends Component {
    constructor(props){
        super(props);
        this.url = "Home"
    }
    render(){
       const data = this.props.data.slice(-4);
       console.log('props of home', 'path: ', this.props.match.path, 'url: ', this.props.match.url)
        return(
                <Router>
            <div className="Home"> 
                <div className="title_home">
                    <h2>Các bài blog mới nhất</h2>
                </div>

                <div className="container">
                    <div className="wrap_blogItem">
                        {
                            data.map(item =>
                                <div key={item.id} className="blogItem">
                        <Link to={`${this.props.match.url}/${item.id}`} >
                                    <div className="top_blog">
                                        <img src={item.image} alt="img_blog"/>
                                    </div>
                                    <div className="bot_blog">
                                        <div className="info_author">
                                            <div className="avatar_author">
                                                <img src="https://lh3.googleusercontent.com/ogw/ADGmqu-EpEZzUQe82J2_GT2pAJEYTofB8cHZsm7FAqfY=s64-c-mo" alt=""/>
                                            </div>
                                            <div className="name_author">{item.author}</div>
                                    </div>
                                    <h2 className="title_blog">
                                            {item.title}
                                    </h2>
                                    <div className="desciption_blog">
                                            {item.desciption}
                                    </div>
                                    </div>
                        </Link>
                                </div>
                        )}
                        <Route exact path={`${this.props.match.url}/:blogId`} 
                               render={(props) => <AboutMe {...props} />} 
                        />
                        
                </div>
                </div>

            </div>
                        </Router>
        );
    }
}