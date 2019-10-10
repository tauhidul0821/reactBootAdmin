import React, { Component } from 'react';
import axios from 'axios';

class File extends Component {
  state = {
    photo: ''
  };

  onSubmit = e => {
    e.preventDefault();
    console.log('photo submit button clicked   = ' + this.state.photo);
    axios
      .get('http://localhost:5000/api/students/photoup', this.state)
      .then(res => console.log('photo added'));
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <table>
            <tr>
              <td>Photo: </td>
              <td>
                <input
                  type='file'
                  name='photo'
                  value={this.state.photo}
                  onChange={this.onChange}
                />
              </td>
              <td>
                <input type='submit' />
              </td>
            </tr>
          </table>
        </form>
      </div>
    );
  }
}
export default File;
