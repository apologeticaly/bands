import React, { Component } from 'react'
import './like.css'


class Like extends Component{
  constructor(props) {
      super(props);
      this.state = {
          likes: 0,
          show: true
      };
  }

  Increase = () => {
      this.setState({likes: this.state.likes + 1});
  }

  Decrease = () => {
    this.setState({likes: this.state.likes - 1});
    }

  Show = () => {
      this.setState({ show: !this.state.show});
  }
    

  render() {
    return (
        <div className="like">
            <div className="inner-like">
                <span onClick={this.Increase} className="thumb">👍</span>
                <span className="count">{this.state.likes}</span>
                <span onClick={this.Decrease} className="thumb">👎</span>
            </div>
        </div>
    );
  }
}

export default Like;