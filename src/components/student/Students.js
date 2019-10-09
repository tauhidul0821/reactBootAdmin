import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import StudentItem from './StudentItem';
import InlineForm from './InlineForm';
//import Pagination from '../pagination/Pagination';
import { Table, Pagination, Card } from 'react-bootstrap';

class Students extends Component {
  state = {
    students: [],
    studentPerPage: 6,
    currentPage: 1,
    editidx: -1,
    editEnablebtn: true
  };

  header = [
    { name: 'Name', prop: 'name' },
    { name: 'Age', prop: 'age' },
    { name: 'Cgpa', prop: 'cgpa' }
  ];

  startEditing = i => {
    this.setState({ editIdx: i });
  };

  stopEditing = () => {
    this.setState({ editIdx: -1 });
  };
  perPageChange = e => {
    this.setState({ studentPerPage: e.target.value });
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const indexOfLastStudent =
      this.state.currentPage * this.state.studentPerPage;
    const indexOfFirstStudent = indexOfLastStudent - this.state.studentPerPage;
    const currentStudents = this.props.student.slice(
      indexOfFirstStudent,
      indexOfLastStudent
    );
    let items = [];
    for (
      let number = 1;
      number <=
      Math.ceil(this.props.student.length / this.state.studentPerPage);
      number++
    ) {
      items.push(
        <Pagination.Item
          key={number}
          onClick={() => paginate(number)}
          active={this.state.currentPage === number}
        >
          {number}
        </Pagination.Item>
      );
    }
    const paginate = pageNumber => this.setState({ currentPage: pageNumber });
    return (
      <div>
        <Card>
          <Card.Body>
            <Card.Title>STUDENT CRUD</Card.Title>
            <Card.Text>
              <Link to='/add'>Add New</Link>
              <br />
              Show:{' '}
              <select
                name='studentPerPage'
                onChange={this.change}
                value={this.state.studentPerPage}
              >
                <option value='5'>5</option>
                <option value='10'>10</option>
                <option value='15'>15</option>
                <option value='20'>20</option>
                <option value='25'>25</option>
              </select>{' '}
              entries
              <Table striped bordered hover>
                <thead>
                  <tr>
                    {this.header.map((item, i) => (
                      <th key={i}>{item.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {currentStudents.map((x, i) =>
                    row(
                      x,
                      i,
                      this.header,
                      this.props.handleRemove,
                      this.startEditing,
                      this.state.editIdx,
                      this.props.handleChange,
                      this.stopEditing
                    )
                  )}
                </tbody>
              </Table>
              <Pagination>{items}</Pagination>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Students;

const row = (
  x,
  i,
  header,
  handleRemove,
  startEditing,
  editIdx,
  handleChange,
  stopEditing
) => {
  const currentlyEditing = editIdx === i;
  return (
    <tr key={`tr-${i}`}>
      {header.map((y, k) => (
        <td key={`trc-${k}`}>
          {currentlyEditing ? (
            <input
              type='text'
              name={y.prop}
              onChange={e => handleChange(e, y.prop, i)}
              value={x[y.prop]}
            />
          ) : (
            x[y.prop]
          )}
        </td>
      ))}
      <td>
        {currentlyEditing ? (
          <button onClick={() => stopEditing()}>stopEditing</button>
        ) : (
          <button onClick={() => startEditing(i)}>startEditing</button>
        )}
      </td>
      <td>
        <button onClick={() => handleRemove(i)}>handleRemove</button>
      </td>
    </tr>
  );
};
