import React, {Component} from 'react'
import './Blog.css'
import Blog1 from './Blog1'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";
  
export default class Blog extends Component {
    render(){
        // var item = 4;
        // const data = this.props.data.slice(-item);
        return(
        <Router>
            <div className="Blog"> 
                <div className="blog_title">
                    <h2>Tổng hợp các bài blog hay</h2>
                </div>
            
                <div className="container">
                    <div className="wrap_blogItem">
                    {
                        this.props.data.map(item =>
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
                            {/* <Route exact path={`${this.props.match.path}/${item.id}`} component={Blog1} /> */}
                             
                            </div>
                    )}
                    </div>
                </div>

        </div>
        </Router>
        );
    }
}