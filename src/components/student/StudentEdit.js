import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class StudentEdit extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      cgpa: ''
    };
  }
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <Link to='/'> Back</Link>
        <br />
        Student Edit:
        <form onSubmit={this.onSubmit}>
          <div className='row'>
            <div className='col'>
              <label for='inputEmail4'>Name</label>
              <input
                type='text'
                className='form-control'
                name='name'
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>
            <div className='col'>
              <label for='inputEmail4'>Age</label>
              <input
                type='text'
                className='form-control'
                name='age'
                value={this.state.age}
                onChange={this.onChange}
              />
            </div>
            <div className='col'>
              <label for='inputEmail4'>cgpa</label>
              <input
                type='text'
                className='form-control'
                name='cgpa'
                value={this.state.cgpa}
                onChange={this.onChange}
              />
            </div>
          </div>
          <input type='submit' value='add new' />
        </form>
      </div>
    );
  }
}
export default StudentEdit;
