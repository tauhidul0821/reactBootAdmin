import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class StudentDelete extends Component {
  render() {
    return (
      <div>
        <Link to="/"> Back</Link>
        <br />
        <div
          className="card text-white bg-danger mb-3"
          style={{ maxWidth: '18rem' }}
        >
          <div className="card-header">Header</div>
          <div className="card-body">
            <h5 className="card-title">Are you Sure ?</h5>
            <Link to="/">Yes</Link>| <Link to="/">No</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentDelete;
