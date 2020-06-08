import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/index'

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: 1,
          title: "Hoc Reactjs co ban",
          content: "powerpoewvjpoewvjpojwevpowjvpowejvpowejvpowejvpowjvpowejvpowjpovwj",
          image: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
          author: "Tung Nguyen",
          desciption: "ibioanoernoibnaiornboarnboianboianfwpiomc2"
        },
        {
          id: 2,
          title: "React Hook la gi?",
          content: "powerpoewvjpoewvjpojwevpowjvpowejvpowejvpowejvpowjvpowejvpowjpovwj",
          image: "https://techtalk.vn/wp-content/uploads/2018/12/reactjs-thumb-696x392.jpg",
          author: "Tung Nguyen",
          desciption: "ibioanoernoibnaiornboarnboianboianfwpiomc2"
        },
        {
          id: 3,
          title: "React Router la gi?",
          content: "powerpoewvjpoewvjpojwevpowjvpowejvpowejvpowejvpowjvpowejvpowjpovwj",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQX6afpIhBE-df2hUZR6QsvMGIN_Ue4rvHwnr19nyN3QIyLPcaq&usqp=CAU",
          author: "Tung Nguyen",
          desciption: "ibioanoernoibnaiornboarnboianboianfwpiomc2"
        },
        {
          id: 4,
          title: "Hoc Reactjs ko kho nhu ban nghi?",
          content: "powerpoewvjpoewvjpojwevpowjvpowejvpowejvpowejvpowjvpowejvpowjpovwj",
          image: "https://images.pexels.com/photos/744667/pexels-photo-744667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          author: "Tung Nguyen",
          desciption: "ibioanoernoibnaiornboarnboianboianfwpiomc2"
        },
        {
          id: 5,
          title: "React Strap voi giao dien nhanh chong!",
          content: "powerpoewvjpoewvjpojwevpowjvpowejvpowejvpowejvpowjvpowejvpowjpovwj",
          image: "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2018/05/Sunrise-Planning-PWC-4395.jpg?resize=750%2C500&ssl=1",
          author: "Tung Nguyen",
          desciption: "ibioanoernoibnaiornboarnboianboianfwpiomc2"
        },
        {
          id: 6,
          title: "React Redux la gi?",
          content: "powerpoewvjpoewvjpojwevpowjvpowejvpowejvpowejvpowjvpowejvpowjpovwj",
          image: "https://www.luxstay.com/blog/wp-content/uploads/2019/01/dalat.jpg",
          author: "Tung Nguyen",
          desciption: "ibioanoernoibnaiornboarnboianboianfwpiomc2"
        },
        {
          id: 7,
          title: "Javascript tu A-Z ",
          content: "powerpoewvjpoewvjpojwevpowjvpowejvpowejvpowejvpowjvpowejvpowjpovwj",
          image: "https://trungtamjava.com/wp-content/uploads/2019/06/khai-giang-khoa-hoc-JS-thang-7.jpg",
          author: "Tung Nguyen",
          desciption: "ibioanoernoibnaiornboarnboianboianfwpiomc2"
        },
        {
          id: 8,
          title: "study HTML only 3 hour",
          content: "powerpoewvjpoewvjpojwevpowjvpowejvpowejvpowejvpowjvpowejvpowjpovwj",
          image: "https://blog.mypage.vn/wp-content/uploads/2019/11/html.png",
          author: "Tung Nguyen",
          desciption: "ibioanoernoibnaiornboarnboianboianfwpiomc2"
        },
        {
          id: 9,
          title: "Asynchronous Javascript very easy ",
          content: "powerpoewvjpoewvjpojwevpowjvpowejvpowejvpowejvpowjvpowejvpowjpovwj",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwOyiO-vuvdGtZt4yj48rcyF46rQBhmLAQVsHw1TX2blrS-Ug8&usqp=CAU",
          author: "Tung Nguyen",
          desciption: "ibioanoernoibnaiornboarnboianboianfwpiomc2"
        },
        {
          id: 10,
          title: "SCSS vs CSS nhu the nao?",
          content: "powerpoewvjpoewvjpojwevpowjvpowejvpowejvpowejvpowjvpowejvpowjpovwj",
          image: "https://topdev.vn/blog/wp-content/uploads/2019/08/sass-va%CC%80-scss-la%CC%80-gi%CC%80.png",
          author: "Tung Nguyen",
          desciption: "ibioanoernoibnaiornboarnboianboianfwpiomc2"
        }
      ]
    }
  }

  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        <Header data={this.state.data} />

      </div>
    );
  }
}

export default App;
