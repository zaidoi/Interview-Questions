import React, { Component, useState } from 'react';
import './styles.css';


const user = {
  name: 'Jane Doe',
  bio: 'Frontend developer who loves React and coffee ☕️',
  image: 'https://do6gp1uxl3luu.cloudfront.net/question-webp/dummyUser.jpg'
};



class UserProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOn:false
    }
  }

  toggleState = () => {
  this.setState({isOn: !this.state.isOn})
}

  render() {
    return (
      <div className="user-profile">
        <img src={user.image} style={{ width:"190px" , borderRadius:"100px",boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)'}} />
        <h2>{user.name}</h2>
        <button onClick={this.toggleState}>{this.state.isOn ? 'Hide Bio' : 'Show Bio'}</button>
        {this.state.isOn ? <p>{user.bio}</p> : null}
      </div>
    );
  }
}

export default UserProfile;
