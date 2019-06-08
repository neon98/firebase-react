import React, {Component} from 'react';
import './App.css';
import * as firebase from 'firebase';

class Form extends Component{
  // dbRef;
  constructor(){
    super();
    this.state = {
      username : '',
      email : ''
    }
    this.dbRef = firebase.database().ref().child('react').child('users').push()
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]:value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    
    this.dbRef.set({
      username: this.state.username,
      email: this.state.email
    });
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            User name :
            <input 
              name="username" 
              type="text"
              onChange={this.handleChange}
              />
          </label>
          <br/>
          <label>
            Email :
            <input 
              name="email"
              type="text"
              onChange={this.handleChange}
              />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

class UserList extends Component{
  constructor(){
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    const dbRef = firebase.database().ref().child('react').child('users');
    dbRef.on('value', snap => {
      var users = [];
      snap.forEach(function(childsnap){
        users.push(childsnap.val());
      });
      this.setState({
        data : users
      });
    });
  }
  render(){
    var users = this.state.data;
    var userslist = users.map(user => <li> Username : {user.username}, Email: {user.email}</li>)
    return (
      <div>
        <ul>{userslist}</ul>
      </div>
    );
  }
}
class App extends Component {
  constructor(){
    super();
    this.state = {
      speed: 10
    }
  }
  componentDidMount(){
    const rootRef = firebase.database().ref().child('react');
    const speedRef = rootRef.child('speed');
    speedRef.on('value', snap => {
      this.setState({
        speed: snap.val()
      })
    });
  }
  render(){
    return (
      <div className="App">
        <h1>{this.state.speed}</h1>
        <Form/>
        <UserList/>
      </div>
    );
  }
  
}

export default App;
