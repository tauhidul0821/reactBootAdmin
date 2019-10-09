import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class InlineForm extends Component {
  state = {
    name: '',
    age: '',
    cgpa: '',
    editIdx: -1,
    editEnablebtn: true
  };

  cancelEditForm = () => {
    console.log('edit cancel');
    this.setState({
      editIdx: 1,
      editEnablebtn: true
    });
  };
  saveEditForm = () => {
    console.log('Save this form');
    this.setState({
      editIdx: 1,
      editEnablebtn: true
    });
  };
  render() {
    return (
      <Table>
        <tr>
          <td>
            <input type='text' className='form-control' name='name' />
          </td>
          <td>
            <input type='text' className='form-control' name='age' />
          </td>
          <td>
            <input type='text' className='form-control' name='cgpa' />
          </td>
          <td>
            <button onClick={this.saveEditForm}>Save</button> |{' '}
            <button onClick={this.cancelEditForm}>Cancel</button>
          </td>
        </tr>
      </Table>
    );
  }
}
export default InlineForm;
