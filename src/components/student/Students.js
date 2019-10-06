import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StudentItem from './StudentItem';
//import Pagination from '../pagination/Pagination';
import { Table, Pagination, Card } from 'react-bootstrap';

class Students extends Component {
  state = {
    students: [],
    studentPerPage: 6,
    currentPage: 1
  };
  perPageChange = e => {
    // if(!('value' in this.props)){
    //   this.setState({e});
    // }
    // this.triggerChange();
    this.setState({ studentPerPage: e.target.value });
  };

  triggerChange = changedValue => {
    // Should provide an event to pass value to Form.
    const { onChange } = this.props;
    if (onChange) {
      onChange({
        ...this.state,
        ...changedValue
      });
    }
  };
  render() {
    const indexOfLastStudent =
      this.state.currentPage * this.state.studentPerPage;
    const indexOfFirstStudent = indexOfLastStudent - this.state.studentPerPage;
    const currentStudents = this.props.student.slice(
      indexOfFirstStudent,
      indexOfLastStudent
    );
    //Change Page

    let active = 1;
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
                onChange={this.perPageChange}
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
                    <th>Name</th>
                    <th>Age</th>
                    <th>Cgpa</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentStudents.map(function(item, i) {
                    return (
                      <StudentItem item={item} key={i} paginate={paginate} />
                    );
                  })}
                </tbody>
              </Table>
              <Pagination>{items}</Pagination>
            </Card.Text>
          </Card.Body>
          {/* <Pagination
          studentPerPage={this.state.studentPerPage}
          totalStudent={this.props.student.length}
          paginate={paginate}
        /> */}
        </Card>
      </div>
    );
  }
}

export default Students;
