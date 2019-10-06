import React, { Component } from 'react';

class Pagination extends Component {
  render() {
    const pageNumber = [];
    const { studentPerPage, totalStudent, paginate } = this.props;
    for (let i = 1; i <= Math.ceil(totalStudent / studentPerPage); i++) {
      pageNumber.push(i);
    }
    return (
      <nav aria-label='Page navigation example'>
        <ul className='pagination justify-content-end'>
          {pageNumber.map(number => (
            <li key={number} className='page-item'>
              <a
                onClick={() => paginate(number)}
                className='page-link'
                href='#'
                tabIndex='-1'
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
