import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class StudentItem extends Component {
  render() {
    const { name, age, cgpa } = this.props.item;
    return (
      <tr>
        <td>{name}</td>
        <td>{age}</td>
        <td>{cgpa}</td>
        <td>
          <Link to='/edit'>Edit</Link> | <Link to='/delete'>Delete</Link>
        </td>
      </tr>
    );
  }
}
