import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
export default class StudentItem extends Component {
  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    // x,
    // i,
    // header,
    // handleRemove,
    // startEditing,
    // editIdx,
    // handleChange,
    // stopEditing
    const i = this.props.index;

    const { name, age, cgpa } = this.props.item;
    const { editidx, startEditing, stopEditing, header, index } = this.props;
    console.log(editidx);
    return (
      <tr>
        <td style={{ display: 'none' }}>{index}</td>
        <td>{name}</td>
        <td>{age}</td>
        <td>{cgpa}</td>
        <td>
          {/* <input type='submit' onClick={startEditing} /> */}
          <button onClick={startEditing}>Edit</button>|{' '}
          <Link to='/delete'>Delete</Link>
        </td>
      </tr>
    );
  }
}

const row = (name, age, cgpa, editidx, startEditing, stopEditing, index) => {
  const currentlyEditing = editidx === index;
  return (
    <div>
      <tr>
        {currentlyEditing ? (
          <div>
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
          </div>
        ) : (
          <div>
            <td style={{ display: 'none' }}>{index}</td>
            <td>{name}</td>
            <td>{age}</td>
            <td>{cgpa}</td>
            <td>
              {/* <input type='submit' value={index} onClick={startEditing} /> */}
              <button onClick={this.openEditForm}>Edit</button>|{' '}
              <Link to='/delete'>Delete</Link>
            </td>
          </div>
        )}
      </tr>
    </div>
  );
};

const row2 = (
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
    <tr key={`tr-${i}`} selectable={false}>
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
          // <CheckIcon onClick={() => stopEditing()} />
          <button onClick={() => stopEditing()}>stopEditing</button>
        ) : (
          // <EditIcon onClick={() => startEditing(i)} />
          <button onClick={() => startEditing(i)}>startEditing</button>
        )}
      </td>
      <td>
        {/* <TrashIcon onClick={() => handleRemove(i)} /> */}
        <button onClick={() => handleRemove(i)}>handleRemove</button>
      </td>
    </tr>
  );
};
