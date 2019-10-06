import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
class StudentAdd extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      cgpa: '',
      redirect: false,
      students: []
    };
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />;
    }
  };

  onSubmit = e => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/students/add', this.state)
      .then(res => console.log('student added'));
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <Link to='/'> Back</Link>
        <br />
        Student Add:
        <form onSubmit={this.onSubmit}>
          <div className='row'>
            <div className='col'>
              <label htmlFor='inputEmail4'>Name</label>
              <input
                type='text'
                className='form-control'
                name='name'
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>
            <div className='col'>
              <label htmlFor='inputEmail4'>Age</label>
              <input
                type='text'
                className='form-control'
                name='age'
                value={this.state.age}
                onChange={this.onChange}
              />
            </div>
            <div className='col'>
              <label htmlFor='inputEmail4'>cgpa</label>
              <input
                type='text'
                className='form-control'
                name='cgpa'
                value={this.state.cgpa}
                onChange={this.onChange}
              />
            </div>
          </div>
          <input type='submit' value='add new' onClick={this.setRedirect} />
        </form>
      </div>
    );
  }
}
export default StudentAdd;
