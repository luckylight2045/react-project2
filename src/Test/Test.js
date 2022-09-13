import './Test.css'
import React, { Component } from 'react'

export default class Test extends Component {
  render() {
    return (
        <div className="all-container">
        <div className="title-text">
          <h1><span>ویژگی های </span>اصلی</h1>
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و</p>
        </div>
        <div className="qualities">
            {this.props.children}
        </div>
      </div>
    )
  }
}


Test.defaultProps = {
    message:'hello world'
}

